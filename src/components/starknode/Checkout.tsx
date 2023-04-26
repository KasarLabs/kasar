import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { UserContext } from "../../context";
import { ButtonPrimary, ButtonOutline } from '../s-components/Button';
import { Input } from '../s-components/Input';
import { Flex, FlexCol } from '../s-components/SFlex';
import { Dispatch, SetStateAction } from 'react';
import { H2 } from '../s-components/Titles';
import { SeparatorSM } from '../s-components/utils';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
`

interface ICart {
  setPage: Dispatch<SetStateAction<number>>;
}

function Checkout({ setPage }: ICart) {
  const {
    name,
    id,
    description,
    setCheckout,
    checkout,
    client
  } = useContext(UserContext);
  const [email, setEmail] = useState('');

  // const[shippingAddress, setShippingAddress]
  const shippingAddress = {
    address1: 'Chestnut Street 92',
    address2: 'Apartment 2',
    city: 'Louisville',
    company: null,
    country: 'United States',
    firstName: 'Bob',
    lastName: 'Norman',
    phone: '555-625-1199',
    province: 'Kentucky',
    zip: '40202'
  };

  const updateShippingAddress = () => {
    client.checkout.updateEmail(checkout.id, "email").then((res: any) => {
      setCheckout(res)
    });
    client.checkout.updateShippingAddress(checkout.id, shippingAddress).then((res: any) => {
      setCheckout(res)
    });
  }
  console.log('update', checkout)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    client.checkout.updateEmail(checkout.id, "email").then((res: any) => {
      setCheckout(res)
    });
  }
  return (
    <MainContainer>
      <H2>Shipping address</H2>
      <SeparatorSM />
      <form onSubmit={handleSubmit}>
        <FlexCol style={{ gap: '10px' }} >
          <Flex><Input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type='text' /></Flex>
          <Flex><Input placeholder='phone' type='text' /></Flex>
          <Flex><Input placeholder='address1' type='text' /><Input placeholder='city' type='text' /></Flex>
          <Flex><Input placeholder='company' type='text' /><Input placeholder='country' type='text' /></Flex>
          <Flex><Input placeholder='firstName' type='text' /><Input placeholder='lastName' type='text' /></Flex>
          <Flex><Input placeholder='zip' type='text' /><Input placeholder='province' type='text' /></Flex>
          <ButtonPrimary onClick={updateShippingAddress}>Pay</ButtonPrimary>
          <ButtonOutline onClick={() => setPage(1)}>Back</ButtonOutline>
        </FlexCol>
      </form>
    </MainContainer>
  )
}

export default Checkout