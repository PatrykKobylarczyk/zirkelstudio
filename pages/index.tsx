import Carousel from '@/components/Carousel'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>zirkelstudio. | interior photography</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen w-full grid place-items-center relative'>
       <Carousel/>
      </main>
    </>
  )
}
