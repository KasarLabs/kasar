import React from 'react';
import styled from 'styled-components';
import { FlexCol, Flex } from '../s-components/SFlex';
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

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`;

const Box = styled.div`
  width: 95%;
  @media (max-width: 800px) {
    width: 90%;
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
`;

const Dot = styled(FaArrowAltCircleLeft)`
  font-size: 0.5rem;
  color: linear-gradient(to right, #338CF5, #4FD1C5);
`;

const GradientLine = styled.div`
  position: absolute;
  height: 4px;
  width: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  top: 50%;
  transform: translateY(-50%);
`;

const CardQuote = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  padding: ${defaultTheme.spacing.xs};
  gap: ${defaultTheme.spacing.m};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;
  @media (max-width: 800px) {
    margin: 0px 0px;
  }
`

const ImageTestimony = styled(Image)`
  position: absolute;
  border-radius: 50%;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function PlugNPlay() {
  return (
    <MainContainer>
      <H2 data-aos="zoom-y-out">Introducing <GradientText>Starknode</GradientText></H2>
      <SeparatorSM />
      <BoxCenter data-aos="zoom-y-out">
        <TextGrey>
          Its user-friendly design and powerful features make it the perfect choice for developers looking to harness the potential of Web3.
        </TextGrey>
      </BoxCenter>
      <SeparatorSM />
      
      <TimelineWrapper>
        <Box>
          <Image src={Step1Img} width={300} alt="Step 1" data-aos="zoom-y-out" />
          <H3>Config</H3>
          <SeparatorSM />
          <TextGrey>Use our GUI KasarOS to setup your node with your desired client in less than a minute.</TextGrey>
        </Box>
        <Box>
          <Image src={Step1Img} width={300} alt="Step 2" data-aos="zoom-y-out" />
          <H3>Plug</H3>
          <SeparatorSM />
          <TextGrey>Plug you home node with to the network.</TextGrey>
        </Box>
        <Box>
          <Image src={Step1Img} width={300} alt="Step 3" data-aos="zoom-y-out" />
          <H3>Manage</H3>
          <SeparatorSM />
          <TextGrey>Manage, track and query it with simplicity trought our user dashboard.</TextGrey>
        </Box>
      </TimelineWrapper>
      <SeparatorSM />
      <Flex data-aos="zoom-y-out">
        <ButtonPrimary>Buy</ButtonPrimary>
        <ButtonOutline>Learn more</ButtonOutline>
      </Flex>
      <Separator />
      <VerticalLine />
      <Separator />
      <H3 data-aos="zoom-y-out">Key Benefits</H3>
      <SeparatorSM />
      <Box>
        <H2 data-aos="zoom-y-out">In Starknet we trust</H2>
        <Separator />
        <TextGrey>
          Arcu cursus vitae congue mauris rhoncus viverra nibh
          cras pulvinar mattis blandit libero cursus mattis.
        </TextGrey>
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
      </Box>
    </MainContainer>
  );
}

export default PlugNPlay;