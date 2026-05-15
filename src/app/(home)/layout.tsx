export default function LPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`h-full antialiased overflow-clip`}>
        {children}
      </body>
    </html>
  );
}