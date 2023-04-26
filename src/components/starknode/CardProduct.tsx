import React, { useContext } from 'react'
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { UserContext } from "../../context";
import Image from 'next/image';
import StarkGif from '../../assets/gif/stark.gif'
import { H2 } from '../s-components/Titles';
import { ButtonOutline, ButtonPrimary } from '../s-components/Button';
import { Dispatch, SetStateAction } from 'react';

const MainContainer = styled.div`
  border-radius: ${defaultTheme.radius.xl};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing.xs};
`

const ImageItem = styled(Image)`
  border-radius: ${defaultTheme.radius.xl};
`

const FlexJustify = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;  
  width: 100%;
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

  return (
    <MainContainer>
      <ImageItem src={StarkGif} alt="Starknode" />
      <H2>{name}</H2>
      <FlexJustify>
        <ButtonPrimary onClick={() => setPage(1)}>Buy</ButtonPrimary>
        <ButtonOutline>Learn more</ButtonOutline>
      </FlexJustify>
    </MainContainer>
  )
}

export default CardProduct