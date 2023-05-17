import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FlexCol, Flex } from '../s-components/SFlex';
import { H2, H3, TextGrey, TextBold, Text, H4 } from '../s-components/Titles';
import { SeparatorSM, Separator, GradientText, VerticalLine } from '../s-components/utils';
import Image from 'next/image';
import Step1Img from '../../assets/images/features-bg.png';
import Config from '../../assets/gif/config3.gif';
import Dashboard from '../../assets/gif/dashboard4.gif';
import Plug from '../../assets/gif/board.gif';
import Starkware from '../../assets/images/starkware.png'
// import Carbonable from '../../assets/images/carbonable.png'
import Nethermind from '../../assets/images/nethermind.png'
import Equilibrium from '../../assets/images/equilibrium.png'
import { defaultTheme } from '@/theme';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`;

const Box = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 350px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const BoxCenter = styled.div`
  width: 70%;
  text-align: center;
  @media (max-width: 800px) {
    width: 90%;
  }
`;


const TimelineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${defaultTheme.spacing.m};
  position: relative;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: ${defaultTheme.spacing['4xs']};
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: ${defaultTheme.spacing['4xs']};
  }
`;


const MovingDiv = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(to right, #338CF5, #4FD1C5);
  z-index: -10;
`;



const ImageCard = styled(Image)`
  width: 100%;
  height: auto;
`

const ImageCardVertical = styled(Image)`
  width: 50%;
  height: auto;
  @media (max-width: 900px) {
    width: 50%;
  }
`

const ImageTestimony = styled(Image)`
  position: absolute;
  border-radius: 50%;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImagePartner = styled(Image)`
  width: 20%;
  height: auto; 
  transition: 0.15s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    width: 50%;
  }
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`

function PlugNPlay() {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <MainContainer>
      <Separator />
      <H2 data-aos="zoom-y-out">Introducing <GradientText>Starknode</GradientText></H2>
      <SeparatorSM />
      <BoxCenter data-aos="zoom-y-out">
        <TextGrey>
          The only limitation for running a full node should be the hardware.
          We made it simple and accessible.
        </TextGrey>
      </BoxCenter>
      <SeparatorSM />

      <TimelineWrapper>
        <Box>
          <ImageCardVertical src={Config} alt="Step 1" />
          <div>
            <H3>
              Config
            </H3>
            <SeparatorSM />
            <TextGrey>
              Use our GUI KasarOS to setup your node with your desired client in less than a minute.
            </TextGrey>
          </div>
        </Box>
        {!isMobile &&

          <div style={{ position: 'absolute', left: '30%', width: '70px', zIndex: -10 }}>
            <Marquee speed={50} gradient={false} direction='right'>
              <div style={{ display: 'flex', gap: '7px' }}>
                <MovingDiv />
                <MovingDiv />
                <MovingDiv />
                <MovingDiv />
              </div>
            </Marquee>
          </div>
        }
        <Box>
          {/* <Video loop controls autoPlay muted>
            <source src="/videos/board.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video> */}
          <ImageCard src={Plug} alt="Step 3" />

          <div>
            <H3>
              Plug
            </H3>
            <SeparatorSM />
            <TextGrey>
              Plug your home node with to the network.
            </TextGrey>
            <br />
          </div>
        </Box>
        {!isMobile &&
          <div style={{ position: 'absolute', left: '63.2%', width: '70px', zIndex: -10 }}>
            <Marquee speed={50} gradient={false} direction='right'>
              <div style={{ display: 'flex', gap: '7px' }}>
                <MovingDiv />
                <MovingDiv />
                <MovingDiv />
                <MovingDiv />
              </div>
            </Marquee>
          </div>
        }
        <Box>
          <ImageCard src={Dashboard} alt="Step 3" />
          <div>
            <H3>
              Manage
            </H3>
            <SeparatorSM />
            <TextGrey>
              Manage, track and query it with simplicity through our user dashboard.
            </TextGrey>
          </div>
        </Box>
      </TimelineWrapper>
      <SeparatorSM />
      <Flex data-aos="zoom-y-out">
        <Link href="/starknode">
          <ButtonPrimary>Buy</ButtonPrimary>
        </Link>
        <ButtonOutline onClick={() => window.open('https://docs.kasar.io')}>Learn more</ButtonOutline>
      </Flex>
      <Separator />
      <Separator />
      <H2 data-aos="zoom-y-out">Powered by <GradientText>Starknet</GradientText></H2>
      <SeparatorSM />
      <BoxCenter data-aos="zoom-y-out">
        <TextGrey>
          Kasar labs is a research and engineering laboratory based on Starknet,
          an ecosystem in which we are delegates and active contributors supported by pioneers.
        </TextGrey>
      </BoxCenter>
      <Separator />
      <ImgWrapper>
        <ImagePartner onClick={() => window.open('https://starkware.co/')} src={Starkware} alt='kasarLabs' />
        <ImagePartner onClick={() => window.open('https://equilibrium.co/')} src={Equilibrium} alt='kasarLabs' />
        <ImagePartner style={isMobile ? { width: "40%" } : { width: "15%" }} onClick={() => window.open('https://nethermind.io/')} src={Nethermind} alt='kasarLabs' />
        {/* <ImagePartner src={Carbonable} alt='kasarLabs' /> */}
      </ImgWrapper>
      <TimelineWrapper>
        {!isMobile && <Separator />}
        {/* <CardQuote data-aos="zoom-y-out">
          <ImageTestimony src={Starkware} width={96} height={96} alt="Testimonial 01" />
          <SeparatorSM />
          <Text>
            “ I love this product and would recommend it to anyone.
            Could be not easier to use, and our multiple websites are wonderful.
            We get nice comments all the time. “
          </Text>
          <TextBold>Darya Finger</TextBold>
          <TextGrey>CEO & Co-Founder @Dropbox</TextGrey>
        </CardQuote> */}
      </TimelineWrapper>
    </MainContainer>
  );
}

export default PlugNPlay;