import { ClerkProvider } from '@clerk/react-router';
import { Outlet } from 'react-router';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const PROXY_URL = import.meta.env.DEV ? undefined : import.meta.env.VITE_CLERK_PROXY_URL;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" proxyUrl={PROXY_URL}>
      <Outlet />
    </ClerkProvider>
  );
}
