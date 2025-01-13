export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-8">
      <p>Login Or Register</p>
      <input
        className="py-2 text-sm border border-gray-500 text-left bg-neutral-900"
        type="text"
        placeholder="Random text for testing"
      />
      {children}
    </div>
  );
}
