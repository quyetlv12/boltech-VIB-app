"use client";
import Header from "@components/Header";
import "./globals.css";
import { Providers } from "./provider";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName:string = usePathname() || '/'
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <Header />
          <div className={`${pathName === '/' ? "" : "pt-[50px] pb-[30px] bg-light-gray w-full min-h-screen mx-auto"}`}>
          {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
