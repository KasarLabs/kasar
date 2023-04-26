import Head from 'next/head'
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
// import Header from '../components/Header'
import { defaultTheme } from '../theme';
import Hero from '@/components/homepage/Hero';
import Header from '../components/Header';
import DropdownSm from '@/components/starknode/DropdownSm';
import Features from '@/components/homepage/Features';
import { Separator } from '@/components/s-components/utils';
import Laboratory from '@/components/homepage/Laboratory';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function Home() {

  const isMobile = useMediaQuery({ maxWidth: 900 })

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000
    });
  }, [])
  return (
    <>
      <Head>
        <title>My Osiris</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {isMobile && <DropdownSm />}
      <MainContainer>
        <Hero />
        <Separator />
        <Features />
        <Laboratory />
      </MainContainer>
    </>
  )
}
