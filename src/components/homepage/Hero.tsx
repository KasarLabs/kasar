import React, { useRef } from 'react'
import styled from 'styled-components';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Flex } from '../s-components/SFlex';
import { H1, Text } from '../s-components/Titles';
import { defaultTheme } from '../../theme';
import { GradientText, SeparatorXL, SeparatorSM, VerticalLine } from '../s-components/utils';
import { useMediaQuery } from "react-responsive";
import Link from 'next/link'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: ${defaultTheme.spacing['4xs']};
  overflow: hidden;
  max-width: 1200px;
  @media (max-width: 800px) {
		width: 100%;
  }
`

const Box = styled.div`
  width: 100%;
  @media (max-width: 800px) {
		width: 90%;
  }
  margin-bottom: 30px;
`

const VideoBox = styled.div`
  position: relative;
  width: 768px; // Adjust the width according to your design preferences
  height: 432px; // Adjust the height according to your design preferences
  @media (max-width: 900px) {
  }
`

const ButtonVideo = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.bgChange};
  border-radius:${defaultTheme.radius.xxl};
  bottom: 0;
  left: 50%;
  z-index:100;
  padding:${defaultTheme.spacing['2xs']};
  white-space: nowrap;
  transform: translate(-50%, 50%);
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Inter', sans-serif;
  cursor: pointer;
`

const Video = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media (max-width: 900px) {
    width: 100%;
    height: 50%;
  }
`

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 900 })
  const mySectionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    mySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <MainContainer>
      <SeparatorXL />
      <Box>
        <H1 data-aos="zoom-y-out">Web3 powered by the <GradientText> users</GradientText> for the <GradientText>users</GradientText></H1>
        <Text>Setup and query blockchain infrastructure in one click.</Text>
      </Box>
      <Flex data-aos="zoom-y-out">
        <Link href="/starknode">
          <ButtonPrimary>Buy</ButtonPrimary>
        </Link>
        <ButtonOutline onClick={handleClick}>Learn more</ButtonOutline>
      </Flex>
      <SeparatorSM />

      <VideoBox data-aos="zoom-y-out" ref={mySectionRef} id="my-section">
        <Video width="1920" height="1080" loop controls autoPlay muted>
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoBox>
      {!isMobile && <SeparatorSM />}
      <VerticalLine />
    </MainContainer>
  )
}

export default Hero