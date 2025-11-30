import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/theme'
import { Moon, Sun, AlertCircle } from 'lucide-react'

export function Settings() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Customize your learning experience</p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium">Theme</p>
              <p className="text-sm text-muted-foreground">
                Switch between light and dark mode
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={toggleTheme}
              className="w-32"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </>
              ) : (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About Autopsy Master</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-sm text-muted-foreground">
              Autopsy Master is a comprehensive educational platform designed to teach pathology
              residents, autopsy fellows, and forensic trainees the complete workflow of hospital
              and forensic autopsy examination.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>12 comprehensive learning modules covering all aspects of autopsy practice</li>
              <li>Detailed content on external and internal examination techniques</li>
              <li>Natural disease pathology, forensic pathology, and toxicology</li>
              <li>Session-based assessments to test your knowledge</li>
              <li>Mobile-first design with offline capability</li>
              <li>Dark mode optimized for reduced eye strain</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Educational Approach</h3>
            <p className="text-sm text-muted-foreground">
              This platform emphasizes pattern recognition, systematic workflow, safety protocols,
              and clinical correlation. All content is designed to reflect real autopsy training
              while using only synthetic, non-identifiable educational examples.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Version</h3>
            <p className="text-sm text-muted-foreground">
              Autopsy Master v1.0.0
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="flex items-center text-destructive">
            <AlertCircle className="mr-2 h-5 w-5" />
            Important Disclaimers
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Educational Use Only</h3>
            <p className="text-sm text-muted-foreground">
              This platform is designed exclusively for educational purposes. It is NOT intended
              for use in actual patient care, clinical decision-making, or medicolegal
              applications.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Synthetic Content</h3>
            <p className="text-sm text-muted-foreground">
              All cases, examples, and scenarios presented in this platform are fully synthetic
              and non-identifiable. No real patient data, images, or information is used.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">No Medical Advice</h3>
            <p className="text-sm text-muted-foreground">
              Information provided through this platform does not constitute medical advice,
              diagnosis, or treatment recommendations. Always consult qualified medical
              professionals for actual medical situations.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Professional Supervision</h3>
            <p className="text-sm text-muted-foreground">
              Autopsy procedures should only be performed under appropriate supervision by
              qualified pathologists in authorized settings. This platform is a supplement to,
              not a replacement for, formal residency training.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Accuracy & Updates</h3>
            <p className="text-sm text-muted-foreground">
              While content is developed with care, medical knowledge evolves continuously.
              Users should verify information against current medical literature and institutional
              protocols.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Privacy</h3>
            <p className="text-sm text-muted-foreground">
              This application does not track user progress, collect personal data, or store
              assessment results. All learning activities are session-based only.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
