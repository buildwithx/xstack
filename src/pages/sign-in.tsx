import { SignIn } from '@clerk/react-router';
import { useLocation } from 'react-router';

export default function SignInPage() {
  const location = useLocation();
  const from = (location.state as { from?: Location })?.from?.pathname ?? '/';

  return <SignInScreen from={from} />;
}

function SignInScreen({ from }: { from: string }) {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn routing="path" path="/sign-in" fallbackRedirectUrl={from} signUpUrl="/sign-up" />
    </div>
  );
}
