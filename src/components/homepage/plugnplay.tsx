import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FlexCol, Flex } from '../s-components/SFlex';
import Pulse from '../s-components/Pulse';
import { H2, H3, TextGrey, TextBold, Text, H4 } from '../s-components/Titles';
import { SeparatorSM, Separator, GradientText, VerticalLine } from '../s-components/utils';
import Image from 'next/image';
import Step1Img from '../../assets/images/features-bg.png';
import Step2Img from '../../assets/images/features-bg.png';
import Step3Img from '../../assets/images/features-bg.png';
import TestimonialImage from '../../assets/images/testimonial.jpg'
import { defaultTheme } from '@/theme';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import { useMediaQuery } from "react-responsive";
import Logo from '../../assets/images/alchemy.png'

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`;

const Box = styled.div`
  width: 30%;
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
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    opacity: 1;
    transform: translateX(200%);
  }
  51% {
    opacity: 0;
    transform: translateX(-200%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MovingDiv = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: linear-gradient(to right, #338CF5, #4FD1C5);
  z-index: -10;
`;


const CardQuote = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  padding: ${defaultTheme.spacing.xs};
  gap: ${defaultTheme.spacing.m};
  // border: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;
  @media (max-width: 800px) {
    margin: 0px 0px;
  }
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};

`


const ImageCard = styled(Image)`
  width: 100%;
  height: auto;
`

const ImageTestimony = styled(Image)`
  position: absolute;
  border-radius: 50%;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImagePartner = styled(Image)`
  width: 10%;
  height: auto; 
`


function PlugNPlay() {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <MainContainer>
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
          <ImageCard src={Step1Img} alt="Step 1" />
          <H3>
            Config
          </H3>
          <SeparatorSM />
          <TextGrey>
            Use our GUI KasarOS to setup your node with your desired client in less than a minute.
          </TextGrey>
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
          <ImageCard src={Step1Img} alt="Step 1" />
          <H3>
            Plug
          </H3>
          <SeparatorSM />
          <TextGrey>
            Plug your home node with to the network.
          </TextGrey>
          <br />
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
          <ImageCard src={Step1Img} alt="Step 3" />
          <H3>
            Manage
          </H3>
          <SeparatorSM />
          <TextGrey>
            Manage, track and query it with simplicity through our user dashboard.
          </TextGrey>
        </Box>
      </TimelineWrapper>
      <SeparatorSM />
      <Flex data-aos="zoom-y-out">
        <Link href="/starknode">
          <ButtonPrimary>Buy</ButtonPrimary>
        </Link>
        <ButtonOutline>Learn more</ButtonOutline>
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
        <ImagePartner src={TestimonialImage} alt='kasarLabs' />
        <ImagePartner src={TestimonialImage} alt='kasarLabs' />
        <ImagePartner src={TestimonialImage} alt='kasarLabs' />
        <ImagePartner src={TestimonialImage} alt='kasarLabs' />
      </ImgWrapper>
      <Separator />
      <TimelineWrapper>
        <Separator />
        <CardQuote data-aos="zoom-y-out">
          <ImageTestimony src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
          <SeparatorSM />
          <Text>
            “ I love this product and would recommend it to anyone.
            Could be not easier to use, and our multiple websites are wonderful.
            We get nice comments all the time. “
          </Text>
          <TextBold>Darya Finger</TextBold>
          <TextGrey>CEO & Co-Founder @Dropbox</TextGrey>
        </CardQuote>
      </TimelineWrapper>
    </MainContainer>
  );
}

export default PlugNPlay;