import DarkModeToggle from "@/src/components/ui/Button/DarkModeToggle";

export default function LPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`overflow-clip`}>
      <DarkModeToggle />
      {children}
    </div>
  );
}