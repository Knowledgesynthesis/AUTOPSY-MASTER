import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/pages/Home'
import { ModulesPage } from '@/pages/ModulesPage'
import { ModuleDetail } from '@/pages/ModuleDetail'
import { Assessment } from '@/pages/Assessment'
import { Settings } from '@/pages/Settings'
import { Tools } from '@/pages/Tools'
import { OrganWeightAnalyzer } from '@/pages/tools/OrganWeightAnalyzer'
import { CODMapper } from '@/pages/tools/CODMapper'
import { ToolPlaceholder } from '@/pages/tools/ToolPlaceholder'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/module/:moduleId" element={<ModuleDetail />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tools" element={<Tools />} />

          {/* Interactive Tools */}
          <Route path="/tools/organ-weights" element={<OrganWeightAnalyzer />} />
          <Route path="/tools/cod-mapper" element={<CODMapper />} />
          <Route
            path="/tools/external-exam"
            element={
              <ToolPlaceholder
                title="External Exam Builder"
                description="Practice systematic external examination documentation"
              />
            }
          />
          <Route
            path="/tools/injury-classifier"
            element={
              <ToolPlaceholder
                title="Injury Classifier"
                description="Distinguish between injuries and postmortem artifacts"
              />
            }
          />
          <Route
            path="/tools/evisceration"
            element={
              <ToolPlaceholder
                title="Evisceration Method Selector"
                description="Learn appropriate organ removal techniques"
              />
            }
          />
          <Route
            path="/tools/toxicology"
            element={
              <ToolPlaceholder
                title="Toxicology Sample Decider"
                description="Select appropriate specimens for toxicology testing"
              />
            }
          />
          <Route
            path="/tools/pm-changes"
            element={
              <ToolPlaceholder
                title="Postmortem Change Identifier"
                description="Recognize postmortem artifact patterns"
              />
            }
          />
          <Route
            path="/tools/case-engine"
            element={
              <ToolPlaceholder
                title="Integrated Autopsy Case Engine"
                description="Work through complete synthetic autopsy cases"
              />
            }
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
