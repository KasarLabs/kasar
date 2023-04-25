import React from 'react'
import styled from 'styled-components';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Flex } from '../s-components/SFlex';
import { H1, Text } from '../s-components/Titles';
import { defaultTheme } from '../../theme';
import { GradientText } from '../s-components/utils';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  text-align: center;
  width: 70%;
  gap: ${defaultTheme.spacing['4xs']};
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



function Hero() {
  return (
    <MainContainer>
      <H1>Web3 powered by the <GradientText> users</GradientText> for the <GradientText>users</GradientText></H1>
      <Box>
        <Text>Setup and deploy blockchain infrastructure in one click.</Text>
      </Box>
      <Flex>
        <ButtonPrimary>Starknode</ButtonPrimary>
        <ButtonOutline>Learn more</ButtonOutline>
      </Flex>
    </MainContainer>
  )
}

export default Hero