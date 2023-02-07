import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import HomeNavigation  from './components/nav'
import DotGroup from "./components/dotGroup"
import Landing from "./components/landing"
import MySkills from './components/mySkills'

import { useEffect } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import useMediaQuery from './hooks/useMediaQuery'
import Portfolio from './components/portfolio'
import Things from './components/things'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className='app bg-beige'>
      <Head>
        <title>Elkopasto</title>
        <meta name="description" content="Elkopasto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap" rel="stylesheet" />
      </Head>

      <HomeNavigation 
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

      <main className='min-h-screen'>
        <section>
          <div className='w-5/6 mx-auto md:h-full'>
            {isDesktop ? (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ) : (<div></div>)}
            <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("home")}
            ></motion.div>
            {/* <Landing setSelectedPage={setSelectedPage} /> */}
          </div>

        </section>

        <Landing setSelectedPage={setSelectedPage} />

        <MySkills setSelectedPage={setSelectedPage} />

        <Portfolio setSelectedPage={setSelectedPage} />

        <Things setSelectedPage={setSelectedPage} />

      </main>
    </div>
  )
}
