import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { UserContext } from "../../context";
import { ButtonPrimary } from '../s-components/Button';
import { Input } from '../s-components/Input';
import { Flex } from '../s-components/SFlex';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Checkout() {
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

    client.checkout.updateShippingAddress(checkout.id, shippingAddress).then((res: any) => {
      setCheckout(res)
    });
  }
  console.log('update', checkout)
  const handleSubmit = (e: any) => {
    e.preventDefault();
    client.checkout.updateEmail(checkout.id, email).then((res: any) => {
      setCheckout(res)
    });
  }
  return (
    <MainContainer>
      <form onSubmit={handleSubmit}>
        <Flex><Input value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type='text' /><Input placeholder='phone' type='text' /></Flex>
        <Flex><Input placeholder='address1' type='text' /><Input placeholder='city' type='text' /></Flex>
        <Flex><Input placeholder='company' type='text' /><Input placeholder='country' type='text' /></Flex>
        <Flex><Input placeholder='firstName' type='text' /><Input placeholder='lastName' type='text' /></Flex>
        <Flex><Input placeholder='zip' type='text' /><Input placeholder='province' type='text' /></Flex>
        <ButtonPrimary onClick={updateShippingAddress}>Pay</ButtonPrimary>
      </form>
    </MainContainer>
  )
}

export default Checkout