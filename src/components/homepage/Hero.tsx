import React, { useState } from 'react'
import styled from 'styled-components';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Flex } from '../s-components/SFlex';
import { H1, Text } from '../s-components/Titles';
import { defaultTheme } from '../../theme';
import { GradientText, SeparatorXL, SeparatorSM } from '../s-components/utils';
import Image from 'next/image'
import HeroImage from '../../assets/images/hero-image.png'
import { useMediaQuery } from "react-responsive";
import Modal from './modal';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 70%;
  gap: ${defaultTheme.spacing['4xs']};
  overflow: hidden;
  @media (max-width: 800px) {
		width: 100%;
  }
`

const Box = styled.div`
  width: 100%;
  @media (max-width: 800px) {
		width: 70%;
  }
`

const VideoBox = styled.div`
  position: relative;

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
  width: 80%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  @media (max-width: 900px) {
    width: 120%;
    height: 50%;
  }
`



function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false)
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <MainContainer>
      <SeparatorXL />
      <H1 data-aos="zoom-y-out">Web3 powered by the <GradientText> users</GradientText> for the <GradientText>users</GradientText></H1>
      <Box>
        <Text>Setup and deploy blockchain infrastructure in one click.</Text>
      </Box>
      <Flex data-aos="zoom-y-out">
        <ButtonPrimary>Starknode</ButtonPrimary>
        <ButtonOutline>Learn more</ButtonOutline>
      </Flex>
      <SeparatorSM />

      <VideoBox data-aos="zoom-y-out">
        <Image src={HeroImage} width={isMobile ? 358 : 768} height={isMobile ? 201 : 432} priority alt="Hero" />
        <ButtonVideo onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }}>
          Watch the full video (2 min)
        </ButtonVideo>
      </VideoBox>
      <SeparatorSM />

      <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
        <Video width="1920" height="1080" loop controls>
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </Modal>
    </MainContainer>
  )
}

export default Hero