import { Spinner } from './ui/spinner';

export function LoadingContent() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-2">
        <Spinner className="size-6" />
        <div>Loading...</div>
      </div>
    </div>
  );
}
