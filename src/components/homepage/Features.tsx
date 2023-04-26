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
      <H2 data-aos="zoom-y-out"> Explore the solutions</H2>
      <SeparatorSM />
      <Box data-aos="zoom-y-out">
        <TextGrey>
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur excepteur
          sint occaecat cupidatat.
        </TextGrey>
      </Box>
      <Separator />

      <FlexXL style={isMobile ? { padding: '10px' } : { padding: '50px' }}>
        <FlexCol data-aos="zoom-y-out">
          <FlexCol>
            <H2 style={isMobile ? { textAlign: 'center' } : { textAlign: 'start' }}>Powerful suite of tools</H2>
            <SeparatorSM />
            <TextGrey>
              Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur excepteur
              sint occaecat cupidatat.
            </TextGrey>
          </FlexCol>
          <SeparatorSM />

          <Card active={active === 0} onClick={() => setActive(0)}>
            <TextBold>Building the Simple ecosystem</TextBold>
            <Box>
              <TextGrey>
                Take collaboration to the next level with security
                and administrative features built for teams.
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 1} onClick={() => setActive(1)}>
            <TextBold>Building the Simple ecosystem</TextBold>
            <Box>
              <TextGrey>
                Take collaboration to the next level with security
                and administrative features built for teams.
              </TextGrey>
            </Box>
          </Card>
          <SeparatorSM />

          <Card active={active === 2} onClick={() => setActive(2)}>
            <TextBold>Building the Simple ecosystem</TextBold>
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