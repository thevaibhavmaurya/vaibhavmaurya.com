import { Divider } from "@/components/divider";
import { Header } from "@/components/header/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl *:[[id]]:scroll-mt-22">
        <Divider />
        {children}
        <Divider hideBeforeBorder={false} />
      </main>
    </>
  );
}
