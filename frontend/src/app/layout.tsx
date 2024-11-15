import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";
import ClienteContextProvider from "@/concept/Cliente/contexts/ClienteContext";
import ToastProvider from "./ToastProvider";
import ClientSideToastContainer from "./ToastContainer";

export const metadata: Metadata = {
  title: "AppBarber",
  description: "AppBarber"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClienteContextProvider>
      <html lang="pt-BR">
        <body className="h-[100vh] flex flex-col">
          <nav className="flex p-4 gap-6 items-center">
            <Link href={"/"} className="text-xl font-bold text-blue-500">
              AppBarber
            </Link>
            <div className="flex gap-3 items center">
              <Link href={"/barbearia"}>Barbearias</Link>
              <Link href={"/barbeiro"}>Barbeiros</Link>
              <Link href={"/cliente"}>Clientes</Link>
              <Link href={"/agendamento"}>Agendamentos</Link>
            </div>
          </nav>
          <Providers>
            {" "}
            <ClientSideToastContainer />
            {children}
          </Providers>
        </body>
      </html>
    </ClienteContextProvider>
  );
}
