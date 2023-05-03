import React, { useContext } from 'react'
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { UserContext } from "../../context";
import Image from 'next/image';
import StarkGif from '../../assets/gif/stark.gif'
import { H2, H3, H4, TextGrey } from '../s-components/Titles';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Dispatch, SetStateAction } from 'react';
import { Flex, FlexCol, FlexXL } from '../s-components/SFlex';
import { useMediaQuery } from 'react-responsive';
import { GradientText, SeparatorSM, VerticalLineBig } from '../s-components/utils';


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${defaultTheme.spacing['4xs']};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: ${defaultTheme.spacing.m};
  border-radius: ${defaultTheme.radius.m};
  @media (max-width: 800px) {
    flex-direction: column;
    padding: ${defaultTheme.spacing.xs};
    width: 90%;
    height: 80vh;
  }
  margin-top: 100px;
`

const ImageItem = styled(Image)`
  border-radius: ${defaultTheme.radius.xl};
  @media (max-width: 800px) {
		width: 200px;
		height: 200px;
  }
`

const FlexJustify = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  width: 100%;
`

const ProgressBar = styled.div`
  margin-top: 25px;
  background: #F5F5F5;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 30px;
  width: 100%;
`

const ProgressValue = styled.div`
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: linear-gradient(to right, #338CF5, #4FD1C5);
  height: 20px;
  width: 0;

  @keyframes load {
    0% { width: 0; }
    100% { width: 68%; }
  }
`

const ImageStark = styled.img`
  width:350px;
  height:350px;
  @media (max-width: 800px) {
		width:250px;
    height:250px;
  }
`

const Col = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
`

const Box = styled.div`
  width: 325px;
  text-align: left;
  margin-top: 25px; 
  @media (max-width: 800px) {
		width: 90%;
  }
`

interface ICart {
  setPage: Dispatch<SetStateAction<number>>;
}

function CardProduct({ setPage }: ICart) {
  const {
    name,
    id,
    description,
    image,
    date,
    price
  } = useContext(UserContext);

  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <>
    <MainContainer>
      <FlexCol style={{ textAlign: 'center', alignItems: 'center', width: '50%' }}>
        <ImageStark src={image} alt='starknode' />
      </FlexCol>
      {!isMobile && <VerticalLineBig />}
      <FlexCol style={{ textAlign: 'center', alignItems: 'center', width: '50%' }}>
        <H3>Starknode <GradientText>Mew 1.0</GradientText></H3>
        <Box>
          <TextGrey>
          With Mew, the first generation of Starknet plug'n'play full node, it has never been easier to contribute to the decentralised web.
          <br></br>
          <br></br>
          Already <GradientText>42 nodes</GradientText> contributing to Starknet
          </TextGrey>
        </Box>
          <ProgressBar>
          <ProgressValue></ProgressValue>
        </ProgressBar>
        <Col>
          <Flex>
            <ButtonPrimary onClick={() => setPage(1)}>Buy</ButtonPrimary>
            <ButtonOutline>Learn more</ButtonOutline>
          </Flex>
        </Col>
      </FlexCol>
    </MainContainer>
    </>
  )
}

export default CardProduct