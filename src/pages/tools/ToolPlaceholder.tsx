import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Construction } from 'lucide-react'

interface ToolPlaceholderProps {
  title: string
  description: string
}

export function ToolPlaceholder({ title, description }: ToolPlaceholderProps) {
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
            <Construction className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Tool</CardTitle>
        </CardHeader>
        <CardContent className="py-12 text-center space-y-4">
          <Construction className="h-16 w-16 mx-auto text-muted-foreground" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Tool Available</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              This interactive educational tool helps you practice {title.toLowerCase()} through hands-on scenarios and immediate feedback.
            </p>
          </div>
          <Link to="/tools">
            <Button>Explore Other Tools</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
