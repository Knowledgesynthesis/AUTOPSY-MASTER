import { Link } from 'react-router-dom'
import { ModuleCard } from '@/components/ModuleCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { modules } from '@/data/modules'
import { BookOpen, Target, AlertCircle } from 'lucide-react'

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Autopsy Master
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From scene → table → truth. A comprehensive educational platform for autopsy
          and postmortem examination training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/modules">
            <Button size="lg" className="group">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Modules
            </Button>
          </Link>
          <Link to="/assessment">
            <Button size="lg" variant="outline">
              <Target className="mr-2 h-5 w-5" />
              Take Assessment
            </Button>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <Card className="border-destructive/50 bg-destructive/5">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-destructive mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-semibold text-destructive">Educational Only</h3>
              <p className="text-sm text-muted-foreground">
                This platform is designed for educational purposes only. All cases and examples are
                fully synthetic and non-identifiable. Not for patient care or medicolegal application.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission Statement */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-center">Comprehensive Autopsy Education</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="font-semibold text-lg">Hospital Autopsy</h3>
              <p className="text-sm text-muted-foreground">
                Master the workflow from consent to clinicopathologic correlation, integrating
                clinical history and advancing medical knowledge.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="font-semibold text-lg">Forensic Pathology</h3>
              <p className="text-sm text-muted-foreground">
                Understand scene investigation, injury patterns, evidence handling, and
                cause-of-death determination in legal contexts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="font-semibold text-lg">Pattern Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Develop expertise in recognizing natural disease, traumatic injuries, postmortem
                artifacts, and toxicologic findings.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Learning Modules</h2>
          <p className="text-muted-foreground">
            Comprehensive curriculum covering all aspects of autopsy practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} {...module} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-bold">Ready to Begin?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Start with Module A: Introduction & Safety to learn fundamental autopsy protocols,
          or explore any module that matches your learning needs.
        </p>
        <Link to="/module/intro-safety">
          <Button size="lg">Start Learning</Button>
        </Link>
      </section>
    </div>
  )
}
