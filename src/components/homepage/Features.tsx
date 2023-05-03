import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexXL, FlexCol } from '../s-components/SFlex';
import { H2, TextGrey, TextBold } from '../s-components/Titles';
import { SeparatorSM, Separator, GradientText } from '../s-components/utils';
import Image from 'next/image'
import FeaturesBg from '../../assets/images/features-bg.png'
import { defaultTheme } from '@/theme';
import { useMediaQuery } from "react-responsive";

interface CardProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
`

const Box = styled.div`
  width: 95%;
  @media (max-width: 800px) {
		width: 90%;
  }
`

const CardWrapper = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${defaultTheme.radius.s};
  padding:${defaultTheme.spacing['2xs']};
  cursor: pointer;
  gap: ${defaultTheme.spacing['4xs']};
  background-color: ${({ active, theme }) => (active ? theme.colors.bgChange : theme.colors.background)};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`

const ImageWrapper = styled.div<{ showImage: boolean; isMobile: boolean }>`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: ${({ isMobile }) => (isMobile ? '358px' : '500px')};
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ showImage }) => (showImage ? 0 : '-100%')});
`;


const Card = ({ active, onClick, children }: CardProps) => {
  return <CardWrapper active={active} onClick={onClick}>{children}</CardWrapper>;
};

function Features() {
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <MainContainer>
      <H2 data-aos="zoom-y-out">Truly own <GradientText>web3</GradientText></H2>
      <SeparatorSM />
      <Box data-aos="zoom-y-out">
        <TextGrey>
        Why should RPC providers have a monopoly on blockchain data access when you can communicate with Starknet from home like with your wifi router
        </TextGrey>
      </Box>
      <Separator />

      <FlexXL style={isMobile ? { padding: '10px' } : { padding: '50px' }}>
        <FlexCol data-aos="zoom-y-out">
          <FlexCol>
            <H2 style={isMobile ? { textAlign: 'center' } : { textAlign: 'start' }}>How does it works</H2>
            <SeparatorSM />
            <TextGrey>
            Our goal at Kasar Labs is to show you that it is possible to make every user an actor of the blockchain.
            </TextGrey>
          </FlexCol>
          <SeparatorSM />

          <Card active={active === 0} onClick={() => setActive(0)}>
            <TextBold>Decentralised providers</TextBold>
            <Box>
              <TextGrey>
              We believe in empowering individuals 👫 to contribute to the decentralized RPC ecosystem.
              Our platform allows anyone to easily set up nodes across various blockchain clients and make it accessible to users worldwide. 🌐
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 1} onClick={() => setActive(1)}>
            <TextBold>Fast reliability</TextBold>
            <Box>
              <TextGrey>
              To ensure optimal user experience and fast 🏎️ reliability we've implemented a leaderboard that ranks available RPC providers based on performance criterias. This ranking system allows users to be redirected in real time to the most suitable provider. 🫡 
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 2} onClick={() => setActive(2)}>
            <TextBold>User friendly</TextBold>
            <Box>
              <TextGrey>
              Users can easily create projects for any supported blockchain like a classical RPC provider. Our platform then generates an access key 🔑, that is directly linked to all the RPC providers available, which users can utilize in their applications to interact smoothly with the network.
              </TextGrey>
            </Box>
          </Card>

        </FlexCol>
        {active === 0 && <Image src={FeaturesBg} width={isMobile ? 358 : 500} alt="Features bg" data-aos="zoom-y-out" />}
        {active === 1 && <Image src={FeaturesBg} width={isMobile ? 358 : 500} alt="Features bg" />}
        {active === 2 && <Image src={FeaturesBg} width={isMobile ? 358 : 500} alt="Features bg" />}
      </FlexXL>
    </MainContainer>
  )
}

export default Features