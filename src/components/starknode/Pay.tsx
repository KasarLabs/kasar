import React, { useContext, useState } from 'react'
import { ButtonPrimary, ButtonOutline } from '../s-components/Button';
import styled from 'styled-components';
import { UserContext } from "../../context";
import { Dispatch, SetStateAction } from 'react';
import { Flex, FlexCol } from '../s-components/SFlex';
import { H2, Text } from '../s-components/Titles';

interface ICart {
  setPage: Dispatch<SetStateAction<number>>;
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ImageStark = styled.img`
  width:150px;
  height:150px;
  @media (max-width: 800px) {
		width:150px;
    height:150px;
  }
`

function Pay({ setPage }: ICart) {
  const {
    name,
    checkout,
    image
  } = useContext(UserContext);
  const numberOfProducts = checkout.lineItems[0].quantity
  const amount = checkout.subtotalPrice.amount
  const memory = checkout.lineItems[0].customAttributes[0].value
  const shippingAddress = checkout.shippingAddress
  console.log('numberOfProducts', numberOfProducts)
  console.log('amount', amount)
  console.log('memory', memory)
  console.log('shippingAddress', shippingAddress)

  return (
    <MainContainer>
      <Flex>
        <FlexCol>
          <H2>Recap</H2>
          <ImageStark src={image} alt='starknode' />
          <Text>item x{numberOfProducts}</Text>
          <Text>total: {amount}</Text>
          <Text>type: {name}{' '}{memory}{' '}Go</Text>
          <Text>address1: {shippingAddress.address1}</Text>
          <Text>address2: {shippingAddress.address2}</Text>
          <Text>city: {shippingAddress.city}</Text>
          <Text>country: {shippingAddress.country}</Text>
          <Text>ZIP: {shippingAddress.zip}</Text>
          <Text>name: {shippingAddress.name}</Text>
          <Text>phone: {shippingAddress.phone}</Text>


        </FlexCol>
        <FlexCol>
          <H2>Pay</H2>
          <Flex>
            <ButtonOutline>Crypto</ButtonOutline>
            <ButtonOutline>Fiat</ButtonOutline>
          </Flex>
        </FlexCol>
      </Flex>

      <ButtonOutline onClick={() => setPage(2)}>Back</ButtonOutline>
    </MainContainer>
  )
}

export default Pay