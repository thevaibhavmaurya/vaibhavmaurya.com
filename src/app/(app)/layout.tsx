import { Divider } from "@/components/divider";
import { Header } from "@/components/header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto max-w-3xl *:[[id]]:scroll-mt-22">
          <Divider />
          {children}
          <Divider />
        </div>
      </main>
    </>
  );
}
