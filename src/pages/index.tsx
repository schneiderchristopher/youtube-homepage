import Head from "next/head";
import Link from "next/link";

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>YouTube</title>
        <meta name="description" content="Youtube homepagemock" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">

      </main>
    </>
  );
}
