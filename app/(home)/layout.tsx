import QueryProvider from "@/lib/queryProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex relative overflow-hidden w-screen h-screen gap-2 p-2 bg-gray-200 dark:bg-zinc-950">
      <Sidebar />
      <main className="relative flex-grow overflow-hidden rounded-md w-full gap-4">
        <Header />
        <div className="w-full max-h-[calc(100vh-16px)] overflow-scroll">
          <QueryProvider>{children}</QueryProvider>
        </div>
      </main>
    </div>
  );
}
