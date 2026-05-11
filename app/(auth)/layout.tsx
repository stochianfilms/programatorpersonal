export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-16">
      <div className="panel w-full max-w-md rounded-[1.75rem] p-8 md:p-10">
        {children}
      </div>
    </main>
  );
}