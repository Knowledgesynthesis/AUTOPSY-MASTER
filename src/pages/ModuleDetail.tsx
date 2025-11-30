import { useParams, Link } from 'react-router-dom'
import { modules } from '@/data/modules'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react'

export function ModuleDetail() {
  const { moduleId } = useParams()
  const module = modules.find((m) => m.id === moduleId)

  if (!module) {
    return (
      <div className="text-center space-y-4 py-12">
        <h1 className="text-2xl font-bold">Module Not Found</h1>
        <Link to="/modules">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Modules
          </Button>
        </Link>
      </div>
    )
  }

  const Icon = module.icon

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="space-y-4">
        <Link to="/modules">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Modules
          </Button>
        </Link>

        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center space-x-2">
              <h1 className="text-4xl font-bold">{module.title}</h1>
              {module.badge && <Badge variant="secondary">{module.badge}</Badge>}
            </div>
            <p className="text-lg text-muted-foreground">{module.description}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{module.content.overview}</p>

          <div className="space-y-2">
            <h3 className="font-semibold">Learning Objectives:</h3>
            <ul className="space-y-1">
              {module.content.objectives.map((objective, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Topics */}
      <div className="flex flex-wrap gap-2">
        {module.topics.map((topic, i) => (
          <Badge key={i} variant="outline">
            {topic}
          </Badge>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Content Sections</h2>

        {module.content.sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{section.content}</p>

              {section.keyPoints && section.keyPoints.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                    Key Points
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-6">
                    {section.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {section.pitfalls && section.pitfalls.length > 0 && (
                <div className="space-y-2 bg-destructive/5 p-4 rounded-lg border border-destructive/20">
                  <h4 className="font-semibold flex items-center text-destructive">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Common Pitfalls
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm ml-6">
                    {section.pitfalls.map((pitfall, i) => (
                      <li key={i}>{pitfall}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Link to="/modules">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All Modules
          </Button>
        </Link>
        <Link to="/assessment">
          <Button>Test Your Knowledge</Button>
        </Link>
      </div>
    </div>
  )
}
