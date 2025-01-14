// app/auth/layout.tsx (Apply layout for login/register)
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-8">
      <p>Login or Register</p>
      <input
        className="py-2 text-sm border border-gray-500 text-left bg-neutral-900"
        type="text"
        placeholder="Random text for testing"
      />
      {children} {/* This will render the content of the login/register page */}
    </div>
  );
}
