import { Header } from "@/components/header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-screen overflow-x-hidden px-2">{children}</main>
    </>
  );
}
