"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()} className="bg-blue-600 px-4">
          Try Again
        </button>
      </body>
    </html>
  );
}
