import Head from 'next/head'
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import Hero from '@/components/homepage/Hero';
import Header from '../components/Header';
import DropdownSm from '@/components/DropdownSm';
import Features from '@/components/homepage/Features';
import { Separator } from '@/components/s-components/utils';
import Laboratory from '@/components/homepage/Laboratory';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import Footer from '@/components/Footer';
import PlugNPlay from '@/components/homepage/plugnplay';
import posthog from 'posthog-js'

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`

const SvgContainer = styled.div`
  position: absolute;
  top: 600px;
  z-index: -10;
`

const SvgContainer2 = styled.div`
  position: absolute;
  bottom: 100px;
  z-index: -10;
`

export default function Home() {

  const isMobile = useMediaQuery({ maxWidth: 900 })

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000
    });
  }, [])

  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, { api_host: 'https://eu.posthog.com' })
    posthog.capture('enter site', { property: 'value' })
  }, [])

  return (
    <>
      <Head>
        <title>KasarLabs</title>
        <meta name="description" content="KasarLabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' rel="stylesheet" />
      </Head>
      <Header />
      {isMobile && <DropdownSm />}
      <MainContainer>
        <SvgContainer>
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </SvgContainer>
        {/* <SvgContainer2>
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </SvgContainer2> */}
        <Hero />
        {/* <Separator />
        <Features />
        <Separator />
        <Laboratory />
        <PlugNPlay /> */}
        <Footer />
      </MainContainer>
    </>
  )
}
