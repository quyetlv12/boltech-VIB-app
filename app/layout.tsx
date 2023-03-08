"use client";
import Header from "@components/Header";
import "./globals.css";
import { Providers } from "./provider";
import { usePathname } from "next/navigation";
import CurrencyInputCpn from "@components/InputCpn";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName:string = usePathname() || '/'
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header />
          <div className={`${pathName === '/' ? "" : "pt-[50px] bg-light-gray w-full min-h-screen mx-auto"}`}>
          {children}
          </div>
          
        </Providers>
      </body>
    </html>
  );
}
