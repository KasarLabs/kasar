import React, { useState } from 'react'
import styled from 'styled-components';
import { FlexXL, FlexCol } from '../s-components/SFlex';
import { H2, TextGrey, TextBold } from '../s-components/Titles';
import { SeparatorSM, Separator } from '../s-components/utils';
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
  width: 70%;
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
      <H2 data-aos="zoom-y-out">Your gateway to the Web3</H2>
      <SeparatorSM />
      <Box data-aos="zoom-y-out">
        <TextGrey>
        With our plug'n'play full nodes, it has never been easier to contribute to the decentralised web.
        </TextGrey>
      </Box>
      <Separator />

      <FlexXL style={isMobile ? { padding: '10px' } : { padding: '50px' }}>
        <FlexCol data-aos="zoom-y-out">
          <FlexCol>
            <H2 style={isMobile ? { textAlign: 'center' } : { textAlign: 'start' }}>Easy to config</H2>
            <SeparatorSM />
            <TextGrey>
            Starknode empowers users of all technical levels to participate in the network. It is a compact yet powerful microcomputer eliminating traditional barriers to entry, providing a simplified and accessible blockchain experience with cutting-edge technology.
            </TextGrey>
          </FlexCol>
          <SeparatorSM />

          <Card active={active === 0} onClick={() => setActive(0)}>
            <TextBold>Configure</TextBold>
            <Box>
              <TextGrey>
                Configure it through Osiris our software to ma
                by picking a name, a client and your Ethereum RPC url.

              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 1} onClick={() => setActive(1)}>
            <TextBold>Plug</TextBold>
            <Box>
              <TextGrey>
                Take collaboration to the next level with security
                and administrative features built for teams.
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 2} onClick={() => setActive(2)}>
            <TextBold>Manage</TextBold>
            <Box>
              <TextGrey>
                Take collaboration to the next level with security
                and administrative features built for teams.
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