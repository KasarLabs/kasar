import React, { useRef } from 'react'
import styled from 'styled-components';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Flex } from '../s-components/SFlex';
import { H1, Text } from '../s-components/Titles';
import { defaultTheme } from '../../theme';
import { GradientText, SeparatorXL, SeparatorSM, VerticalLine } from '../s-components/utils';
import { useMediaQuery } from "react-responsive";
import Link from 'next/link'
import Marquee from "react-fast-marquee";
import Projects from '../../data/projects.json'
import Image from "next/image"

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
  display: flex;
  align-items: center;
flex-direction: column;
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 2px solid #000;
  background: #FFF; 
  gap: ${defaultTheme.spacing['4xs']};
  padding: ${defaultTheme.spacing.m};
  width: 201px;
  height: 257px; 
  @media (max-width: 800px) {
    flex-direction: column;
    padding: ${defaultTheme.spacing.xs};
  }
  margin-right: 20px;
`
const SImage = styled(Image)`
  width: 50px;
  height: 50px;
`

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 900 })
  const mySectionRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    window.open('https://t.me/kasarlabs')
  };
  return (
    <MainContainer>
      <SeparatorXL />
      <SeparatorXL />
      <Box>
        <H1 data-aos="zoom-y-out">Build your next gen <GradientText> Starknet</GradientText> project with Kasar<GradientText>²</GradientText></H1>
        <Text style={{ width: '70%', textAlign: 'center' }}>
          Join our Starknet Engineering and Research Laboratory where Starknet experts and
          Cairo wizards converge to solve your high and low-level problems.
        </Text>
      </Box>
      <Flex data-aos="zoom-y-out">
        <ButtonPrimary onClick={handleClick}>Contact us</ButtonPrimary>
        <ButtonOutline onClick={() => window.open("https://app.kasar.io")}>App</ButtonOutline>
      </Flex>
      <SeparatorXL />
      <SeparatorXL />
      {/* <Marquee speed={50} gradient={false} pauseOnHover>
        {Projects.map((project, index) => {
          return (
            <Card key={index}>
              <Image width={105} height={105} src={project.src} alt={project.alt} />
              <Text>{project.alt}</Text>
              <Text style={{ maxWidth: '170px' }}>{project.text}</Text>
            </Card>
          )
        })}
      </Marquee> */}

      {/* <VideoBox data-aos="zoom-y-out" ref={mySectionRef} id="my-section">
        <Video width="1920" height="1080" loop controls autoPlay muted>
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </VideoBox>
      {!isMobile && <SeparatorSM />}
      <VerticalLine /> */}
    </MainContainer>
  )
}

export default Hero