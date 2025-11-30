import { ModuleCard } from '@/components/ModuleCard'
import { modules } from '@/data/modules'

export function ModulesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Learning Modules</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive curriculum covering hospital autopsy, forensic pathology, and death investigation
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} {...module} />
        ))}
      </div>
    </div>
  )
}
