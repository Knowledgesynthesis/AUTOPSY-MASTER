import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Eye,
  AlertTriangle,
  Scissors,
  Scale,
  TestTubes,
  GitBranch,
  Clock,
  Stethoscope,
  ArrowRight
} from 'lucide-react'

interface Tool {
  id: string
  title: string
  description: string
  icon: any
  route: string
}

const tools: Tool[] = [
  {
    id: 'external-exam',
    title: 'External Exam Builder',
    description: 'Practice systematic external examination documentation and pattern recognition',
    icon: Eye,
    route: '/tools/external-exam',
  },
  {
    id: 'injury-classifier',
    title: 'Injury Classifier',
    description: 'Distinguish between antemortem injuries and postmortem artifacts',
    icon: AlertTriangle,
    route: '/tools/injury-classifier',
  },
  {
    id: 'evisceration',
    title: 'Evisceration Method Selector',
    description: 'Learn when to use Virchow, Rokitansky, Ghon, or Letulle techniques',
    icon: Scissors,
    route: '/tools/evisceration',
  },
  {
    id: 'organ-weights',
    title: 'Organ Weight Analyzer',
    description: 'Compare autopsy organ weights against expected normal ranges',
    icon: Scale,
    route: '/tools/organ-weights',
  },
  {
    id: 'toxicology',
    title: 'Toxicology Sample Decider',
    description: 'Select appropriate specimens for toxicology testing based on case scenarios',
    icon: TestTubes,
    route: '/tools/toxicology',
  },
  {
    id: 'cod-mapper',
    title: 'Cause-of-Death Mapper',
    description: 'Build causal chains from immediate to underlying causes',
    icon: GitBranch,
    route: '/tools/cod-mapper',
  },
  {
    id: 'pm-changes',
    title: 'Postmortem Change Identifier',
    description: 'Recognize and interpret postmortem artifact patterns',
    icon: Clock,
    route: '/tools/pm-changes',
  },
  {
    id: 'case-engine',
    title: 'Integrated Autopsy Case Engine',
    description: 'Work through complete synthetic autopsy cases from external to final report',
    icon: Stethoscope,
    route: '/tools/case-engine',
  },
]

export function Tools() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Interactive Tools</h1>
        <p className="text-lg text-muted-foreground">
          Hands-on practice with autopsy decision-making and pattern recognition
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Card key={tool.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={tool.route}>
                  <Button className="w-full group">
                    Launch Tool
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
