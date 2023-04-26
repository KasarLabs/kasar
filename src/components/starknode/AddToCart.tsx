import React, { useContext, useEffect, useState } from 'react'
import { ButtonOutline, ButtonPrimary } from '../s-components/Button'
import { UserContext } from "../../context";
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Flex } from '../s-components/SFlex';
import Cart from './Cart';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${defaultTheme.spacing['4xs']};
  flex-direction: column;
`


function AddToCart() {
  const { client, id, setCheckout, checkout, price, setClient } = useContext(UserContext);
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
      <Flex>
        <ButtonOutline onClick={pressLess}>-</ButtonOutline>
        <ButtonPrimary>{number}</ButtonPrimary>
        <ButtonOutline onClick={pressPlus}>+</ButtonOutline>
      </Flex>
      <ButtonPrimary onClick={checkoutOrder}>Add to cart</ButtonPrimary>
      {showCart && <Cart />}
    </MainContainer>
  )
}

export default AddToCart