import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, GitBranch, AlertCircle } from 'lucide-react'

export function CODMapper() {
  const [immediate, setImmediate] = useState('')
  const [intermediate, setIntermediate] = useState('')
  const [underlying, setUnderlying] = useState('')
  const [contributing, setContributing] = useState('')
  const [feedback, setFeedback] = useState<{ type: string; message: string }[]>([])

  const commonMechanisms = [
    'Cardiac arrest',
    'Respiratory failure',
    'Cardiopulmonary arrest',
    'Multi-organ failure',
  ]

  const handleValidate = () => {
    const errors: { type: string; message: string }[] = []

    // Check for common errors
    if (commonMechanisms.some(m => underlying.toLowerCase().includes(m.toLowerCase()))) {
      errors.push({
        type: 'error',
        message: 'Underlying cause should not be a mechanism (cardiac arrest, respiratory failure, etc.). These are modes of dying, not diseases.',
      })
    }

    if (immediate && underlying && immediate.toLowerCase() === underlying.toLowerCase()) {
      errors.push({
        type: 'error',
        message: 'Immediate and underlying causes should not be identical. The underlying cause initiates the sequence.',
      })
    }

    if (!underlying.trim()) {
      errors.push({
        type: 'error',
        message: 'Underlying cause is required. This is the disease/injury that started the lethal sequence.',
      })
    }

    if (!immediate.trim()) {
      errors.push({
        type: 'warning',
        message: 'Immediate cause is typically required for a complete death certificate.',
      })
    }

    if (errors.length === 0) {
      errors.push({
        type: 'success',
        message: 'Good! This causal chain structure looks reasonable. Verify that each condition logically causes the one above it.',
      })
    }

    setFeedback(errors)
  }

  const handleClear = () => {
    setImmediate('')
    setIntermediate('')
    setUnderlying('')
    setContributing('')
    setFeedback([])
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-4">
        <Link to="/tools">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tools
          </Button>
        </Link>

        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-lg bg-primary/10">
            <GitBranch className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Cause-of-Death Mapper</h1>
            <p className="text-muted-foreground">Build logical causal chains for death certification</p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Build Your Causal Chain</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Immediate Cause</label>
            <input
              type="text"
              value={immediate}
              onChange={(e) => {
                setImmediate(e.target.value)
                setFeedback([])
              }}
              placeholder="e.g., Bronchopneumonia"
              className="w-full p-3 rounded-lg border bg-background"
            />
            <p className="text-xs text-muted-foreground">
              The final disease/condition directly causing death
            </p>
          </div>

          <div className="flex items-center justify-center text-muted-foreground">
            <span className="text-sm">↑ due to ↑</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Intermediate Cause (Optional)</label>
            <input
              type="text"
              value={intermediate}
              onChange={(e) => {
                setIntermediate(e.target.value)
                setFeedback([])
              }}
              placeholder="e.g., Immobility"
              className="w-full p-3 rounded-lg border bg-background"
            />
            <p className="text-xs text-muted-foreground">
              Condition(s) between immediate and underlying causes
            </p>
          </div>

          <div className="flex items-center justify-center text-muted-foreground">
            <span className="text-sm">↑ due to ↑</span>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Underlying Cause</label>
            <input
              type="text"
              value={underlying}
              onChange={(e) => {
                setUnderlying(e.target.value)
                setFeedback([])
              }}
              placeholder="e.g., Hip fracture"
              className="w-full p-3 rounded-lg border bg-background"
            />
            <p className="text-xs text-muted-foreground">
              The disease/injury that initiated the sequence leading to death
            </p>
          </div>

          <div className="border-t pt-6 space-y-2">
            <label className="text-sm font-medium">Contributing Conditions (Optional)</label>
            <textarea
              value={contributing}
              onChange={(e) => {
                setContributing(e.target.value)
                setFeedback([])
              }}
              placeholder="e.g., Hypertension, Diabetes mellitus"
              className="w-full p-3 rounded-lg border bg-background min-h-20"
            />
            <p className="text-xs text-muted-foreground">
              Other significant conditions that contributed but are not part of the direct causal sequence
            </p>
          </div>

          <div className="flex space-x-2">
            <Button onClick={handleValidate} className="flex-1">
              Validate Chain
            </Button>
            <Button onClick={handleClear} variant="outline">
              Clear
            </Button>
          </div>

          {feedback.length > 0 && (
            <div className="space-y-2">
              {feedback.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg border-2 ${
                    item.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50'
                      : item.type === 'error'
                      ? 'bg-red-500/10 border-red-500/50'
                      : 'bg-yellow-500/10 border-yellow-500/50'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 mt-0.5" />
                    <p className="text-sm">{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Errors to Avoid</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
            <li>
              <strong>Don't use mechanisms as underlying cause:</strong> "Cardiac arrest" or
              "respiratory failure" describe how the body stopped functioning, not the disease that
              caused death
            </li>
            <li>
              <strong>Ensure logical sequence:</strong> Each condition should plausibly cause the
              one above it (e.g., MI can cause cardiac arrest, but cardiac arrest doesn't cause MI)
            </li>
            <li>
              <strong>Be specific:</strong> "Cancer" is too vague; specify "Metastatic lung
              adenocarcinoma"
            </li>
            <li>
              <strong>Separate competing causes:</strong> If multiple diseases contributed equally,
              list them as contributing conditions rather than in a false sequence
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example Causal Chains</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Example 1: Cardiovascular Death</h3>
            <div className="bg-muted p-3 rounded text-sm space-y-1">
              <p>Immediate: Acute myocardial infarction</p>
              <p>Due to: Coronary artery thrombosis</p>
              <p>Due to: Coronary atherosclerosis</p>
              <p>Contributing: Hypertension, Diabetes mellitus</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Example 2: Traumatic Death</h3>
            <div className="bg-muted p-3 rounded text-sm space-y-1">
              <p>Immediate: Exsanguination</p>
              <p>Due to: Laceration of aorta</p>
              <p>Due to: Blunt force trauma to chest</p>
              <p>Contributing: None</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Example 3: Infectious Death</h3>
            <div className="bg-muted p-3 rounded text-sm space-y-1">
              <p>Immediate: Septic shock</p>
              <p>Due to: Bacterial pneumonia</p>
              <p>Due to: Aspiration</p>
              <p>Contributing: Alcohol intoxication, COPD</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
