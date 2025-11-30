import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Scale } from 'lucide-react'

interface OrganRange {
  organ: string
  normalRange: [number, number]
  unit: string
  notes: string
}

const organRanges: OrganRange[] = [
  { organ: 'Heart (Male)', normalRange: [250, 350], unit: 'g', notes: 'Athletic hearts may be larger' },
  { organ: 'Heart (Female)', normalRange: [200, 300], unit: 'g', notes: 'Obesity increases heart weight' },
  { organ: 'Brain', normalRange: [1200, 1600], unit: 'g', notes: 'Edema increases weight' },
  { organ: 'Liver', normalRange: [1200, 1800], unit: 'g', notes: 'Cirrhotic livers often smaller' },
  { organ: 'Right Lung', normalRange: [400, 600], unit: 'g', notes: 'Edema/pneumonia increases weight' },
  { organ: 'Left Lung', normalRange: [350, 550], unit: 'g', notes: 'Normally lighter than right' },
  { organ: 'Spleen', normalRange: [100, 200], unit: 'g', notes: 'Congestion increases weight' },
  { organ: 'Right Kidney', normalRange: [120, 170], unit: 'g', notes: 'CKD decreases weight' },
  { organ: 'Left Kidney', normalRange: [120, 170], unit: 'g', notes: 'Usually similar to right' },
]

export function OrganWeightAnalyzer() {
  const [selectedOrgan, setSelectedOrgan] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState<{ status: string; message: string } | null>(null)

  const handleAnalyze = () => {
    const organ = organRanges.find(o => o.organ === selectedOrgan)
    if (!organ || !weight) return

    const weightNum = parseFloat(weight)
    const [min, max] = organ.normalRange

    if (weightNum < min) {
      setResult({
        status: 'low',
        message: `This weight is BELOW the expected range (${min}-${max}${organ.unit}). ${organ.notes}`,
      })
    } else if (weightNum > max) {
      setResult({
        status: 'high',
        message: `This weight is ABOVE the expected range (${min}-${max}${organ.unit}). ${organ.notes}`,
      })
    } else {
      setResult({
        status: 'normal',
        message: `This weight is within the expected range (${min}-${max}${organ.unit}). ${organ.notes}`,
      })
    }
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
            <Scale className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Organ Weight Analyzer</h1>
            <p className="text-muted-foreground">Compare autopsy organ weights against expected ranges</p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Analyze Organ Weight</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Organ</label>
            <select
              value={selectedOrgan}
              onChange={(e) => {
                setSelectedOrgan(e.target.value)
                setResult(null)
              }}
              className="w-full p-3 rounded-lg border bg-background"
            >
              <option value="">Choose an organ...</option>
              {organRanges.map((organ) => (
                <option key={organ.organ} value={organ.organ}>
                  {organ.organ} ({organ.normalRange[0]}-{organ.normalRange[1]}{organ.unit})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Weight (grams)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value)
                setResult(null)
              }}
              placeholder="Enter weight in grams"
              className="w-full p-3 rounded-lg border bg-background"
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!selectedOrgan || !weight}
            className="w-full"
          >
            Analyze Weight
          </Button>

          {result && (
            <div className={`p-4 rounded-lg border-2 ${
              result.status === 'normal'
                ? 'bg-green-500/10 border-green-500/50'
                : result.status === 'high'
                ? 'bg-yellow-500/10 border-yellow-500/50'
                : 'bg-blue-500/10 border-blue-500/50'
            }`}>
              <div className="flex items-start space-x-2">
                <Badge
                  variant={result.status === 'normal' ? 'default' : 'secondary'}
                  className="mt-1"
                >
                  {result.status === 'normal' ? 'Normal' : result.status === 'high' ? 'Elevated' : 'Decreased'}
                </Badge>
                <p className="text-sm flex-1">{result.message}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Organ Weight Interpretation</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Organ weights vary with body size, age, and sex</li>
              <li>Increased heart weight suggests cardiomegaly (hypertrophy or dilation)</li>
              <li>Heavy lungs indicate edema, pneumonia, or congestion</li>
              <li>Cirrhotic livers are often smaller and firmer than normal</li>
              <li>Enlarged spleen (splenomegaly) suggests congestion or infiltrative disease</li>
              <li>Small kidneys suggest chronic disease</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
