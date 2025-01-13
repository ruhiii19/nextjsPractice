export default function ParallelLayout({
  children,
  model,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  model: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div className="w-[800px] h-screen flex flex-col gap-8">
      <div>{children}</div>
      <div className="flex gap-4">
        <div className="w-2/5">{sidebar}</div>
        <div className="w-3/5">{model}</div>
      </div>
    </div>
  );
}
