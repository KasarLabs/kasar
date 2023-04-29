import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { UserContext } from "../../context";
import { ButtonPrimary } from '../s-components/Button';
import ShippingForm from './ShippingForm'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Cart() {
  const {
    name,
    id,
    description,
    image,
    checkout,
    client
  } = useContext(UserContext);

  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <MainContainer>
      <p>Recap</p>
      <p>product name: {name}</p>
      <p>nombre d'achat: {checkout?.lineItems[0]?.quantity}</p>
      <p>total: {checkout?.lineItemsSubtotalPrice?.amount}</p>
      <ButtonPrimary onClick={() => setShowCheckout(true)}>Checkout</ButtonPrimary>
      {/* {showCheckout && <ShippingForm />} */}
    </MainContainer>
  )
}

export default Cart