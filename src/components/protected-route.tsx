// src/components/ProtectedRoute.tsx
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '@clerk/react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Bell } from 'lucide-react';
import { LoadingContent } from './loading-content';

export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    // Clerk hasn't hydrated session state yet — avoid a flash-redirect
    return <LoadingContent />;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace state={{ from: location }} />;
  }

  return <ProtectedRouteScreen />;
}

function ProtectedRouteScreen() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 sticky top-0 z-50 bg-background/40 backdrop-blur-md">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4!" />
          <h2 className="text-sm font-medium">Home</h2>

          <div className="ml-auto flex">
            <Button variant="outline" size="icon-sm">
              <Bell />
            </Button>
          </div>
        </header>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
