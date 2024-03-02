import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="h-screen bg-[#DDDDDD] flex justify-center items-center">
      {children}
    </main>
  );
}
