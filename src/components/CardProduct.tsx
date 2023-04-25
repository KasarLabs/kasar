import React, { useContext } from 'react'
import styled from 'styled-components';
import { defaultTheme } from '../theme';
import { UserContext } from "../context";

const MainContainer = styled.div`
  border-radius: ${defaultTheme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImageItem = styled.img`
  width: 50%;
  border-radius: ${defaultTheme.radius.xl};
`

function CardProduct() {
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
      <h1>{name}</h1>
      <ImageItem src={image} />
      <p>{description}{" "}{price}{" "}euros</p>
    </MainContainer>
  )
}

export default CardProduct