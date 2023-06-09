import React, { useEffect, useState } from "react";

//COMPONENTS
import Head from "next/head";
import Carousel from "@/components/Carousel";
import Loader from "@/components/Loader";
import PageTransitioning from "@/components/PageTransitioning";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>zirkelstudio. | interior photography</title>
        <meta name="description" content="Interior photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTransitioning/>
      <main className="w-full md:h-screen grid place-items-center relative">
        {loading && <Loader />}
        <Carousel />
      </main>
    </>
  );
}
