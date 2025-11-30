import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Home, BookOpen, Settings } from 'lucide-react'
import { useThemeStore } from '@/store/theme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore()
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Autopsy Master</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Home className="inline mr-1 h-4 w-4" />
              Home
            </Link>
            <Link
              to="/modules"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/modules') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <BookOpen className="inline mr-1 h-4 w-4" />
              Modules
            </Link>
            <Link
              to="/settings"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive('/settings') ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              <Settings className="inline mr-1 h-4 w-4" />
              Settings
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="container mx-auto flex flex-col space-y-4 p-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <Home className="inline mr-2 h-4 w-4" />
                Home
              </Link>
              <Link
                to="/modules"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive('/modules') ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <BookOpen className="inline mr-2 h-4 w-4" />
                Modules
              </Link>
              <Link
                to="/settings"
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive('/settings') ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                <Settings className="inline mr-2 h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Autopsy Master - Educational Only. Not for Clinical or Medicolegal Use.</p>
        </div>
      </footer>
    </div>
  )
}
