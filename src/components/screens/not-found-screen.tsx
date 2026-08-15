import { ArrowLeft, FileQuestion, Home, LogIn, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function NotFoundScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 lg:px-8">
      {/* Ambient background glow elements */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-100 w-100 rounded-full bg-primary/5 blur-[100px]" />

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* Animated Badge */}
        <Badge
          variant="outline"
          className="mb-6 gap-2 px-3.5 py-1.5 text-xs font-medium backdrop-blur-md"
        >
          <FileQuestion className="h-4 w-4 text-primary animate-pulse" />
          <span>Error 404 &bull; Page Not Found</span>
        </Badge>

        {/* Hero Graphic / Code */}
        <div className="relative mb-6 flex items-center justify-center">
          <h1 className="select-none text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-foreground via-foreground/80 to-foreground/20 sm:text-9xl">
            404
          </h1>
        </div>

        {/* Title and Message */}
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Lost in hyperspace?</h2>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg max-w-md">
          The page you are looking for doesn't exist, was removed, or had its name changed.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate(-1)}
            className="gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>

          <Button size="lg" asChild className="gap-2 cursor-pointer">
            <Link to="/">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </Button>
        </div>

        {/* Helpful Shortcuts Card */}
        <Card className="mt-12 w-full border-border/60 bg-card/60 backdrop-blur-md text-left shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Search className="h-4 w-4 text-primary" />
              Quick Navigation
            </CardTitle>
            <CardDescription>
              Here are some popular destinations you might be looking for:
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 sm:grid-cols-2">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Dashboard</div>
                <div className="text-xs text-muted-foreground">Go to your main home screen</div>
              </div>
            </Link>

            <Link
              to="/sign-in"
              className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/50 p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                <LogIn className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Account Sign In</div>
                <div className="text-xs text-muted-foreground">Manage your session & auth</div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
