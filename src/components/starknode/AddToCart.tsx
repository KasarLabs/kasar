import React, { useContext, useEffect, useState } from 'react'
import { ButtonOutline, ButtonPrimary } from '../s-components/Button'
import { UserContext } from "../../context";
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Flex, FlexCol, FlexXL } from '../s-components/SFlex';
import Cart from './Cart';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { SeparatorSM } from '../s-components/utils';
import { H2 } from '../s-components/Titles';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${defaultTheme.spacing['4xs']};
`

const ImageStark = styled.img`
  width:400px;
  height:400px;
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
`

interface ICart {
  setPage: Dispatch<SetStateAction<number>>;
}

function AddToCart({ setPage }: ICart) {
  const { client, id, setCheckout, checkout, image, setClient, name } = useContext(UserContext);
  const [number, setNumber] = useState(1)
  const [showCart, setShowCart] = useState(false)

  const pressPlus = () => {
    number < 10 ? setNumber(number + 1) : setNumber(number)
  }
  const pressLess = () => {
    number > 1 ? setNumber(number - 1) : setNumber(number)
  }

  useEffect(() => {
    if (client) {
      client?.checkout?.create().then((checkout: any) => {
        setCheckout(checkout);
      });
    }
  }, [client])

  const checkoutOrder = () => {

    // const totalPrice = number * Number(price)
    const checkoutId = checkout.id
    const lineItemsToAdd = [
      {
        variantId: id,
        quantity: number,
      }
    ];
    client?.checkout?.addLineItems(checkoutId, lineItemsToAdd).then((res: any) => {
      setCheckout(res);
    });
    setShowCart(true)
  }

  // console.log("CLIENT", client)
  // console.log("CHECKKK", checkout)
  return (
    <MainContainer>
      <FlexCol style={{ textAlign: 'center', alignItems: 'center' }}>
        <H2>{name}</H2>
        <ImageStark src={image} alt='starknode' />
        <SeparatorSM />
        <Col>
          <Flex>
            <ButtonOutline onClick={pressLess}>-</ButtonOutline>
            <ButtonPrimary>{number}</ButtonPrimary>
            <ButtonOutline onClick={pressPlus}>+</ButtonOutline>
          </Flex>
          <ButtonPrimary style={{ width: '100%' }} onClick={() => { checkoutOrder; setPage(2) }}>Add to cart</ButtonPrimary>
          <ButtonOutline style={{ width: '100%' }} onClick={() => setPage(0)}>Back</ButtonOutline>
        </Col>
      </FlexCol>
      {/* {showCart && <Cart />} */}
    </MainContainer>
  )
}

export default AddToCart