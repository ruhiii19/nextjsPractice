export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-8">
      <p>Blog & Chat</p>
      <input
        className="py-2 text-sm border border-gray-500 text-left"
        type="text"
        placeholder="Random text for testing"
      />
      {children}
    </div>
  );
}
