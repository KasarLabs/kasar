import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexXL, FlexCol } from '../s-components/SFlex';
import { H2, H3, TextGrey, TextBold } from '../s-components/Titles';
import { SeparatorSM, Separator, GradientText } from '../s-components/utils';
import Image from 'next/image'
import FeaturesBg from '../../assets/images/features-bg.png'
import myOsiris from '../../assets/images/my-osiris.gif'
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

const BoxCenter = styled.div`
  width: 70%;
  text-align: center;
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
      <BoxCenter data-aos="zoom-y-out">
        <TextGrey>
        Embrace Web3's true potential with a decentralized, community-driven ecosystem where everyone can effortlessly contribute to blockchain access through user-friendly infrastructure.
        </TextGrey>
      </BoxCenter>
      <Separator />

      <FlexXL style={isMobile ? { padding: '10px' } : { padding: '50px' }}>
        <FlexCol data-aos="zoom-y-out">
          <FlexCol>
            <H3 style={isMobile ? { textAlign: 'center' } : { textAlign: 'start' }}> Multiple providers. One user.</H3>
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
              We empower individuals to contribute to the decentralized RPC ecosystem by enabling easy node setup across multiple blockchain clients for global accessibility.
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 1} onClick={() => setActive(1)}>
            <TextBold>Fast reliability</TextBold>
            <Box>
              <TextGrey>
              For optimal user experience and reliability, we use a performance-based leaderboard to rank RPC providers, enabling real-time redirection to the most suitable provider.              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 2} onClick={() => setActive(2)}>
            <TextBold>User friendly</TextBold>
            <Box>
              <TextGrey>
              Like a traditional RPC provider users can create projects for supported blockchains, receive an access key linked to all RPC providers, and seamlessly interact with the network in their applications.
              </TextGrey>
            </Box>
          </Card>

        </FlexCol>
        {active === 0 && <Image src={myOsiris} width={isMobile ? 358 : 500} alt="Features bg" data-aos="zoom-y-out" />}
        {active === 1 && <Image src={FeaturesBg} width={isMobile ? 358 : 500} alt="Features bg" />}
        {active === 2 && <Image src={FeaturesBg} width={isMobile ? 358 : 500} alt="Features bg" />}
      </FlexXL>
    </MainContainer>
  )
}

export default Features