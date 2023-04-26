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
    setCheckout,
    checkout,
    client
  } = useContext(UserContext);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //set mail to checkout
    const mail = e.target.email.value;
    if (!mail) {
      window.alert('no email')
      return;
    }
    client.checkout.updateEmail(checkout.id, mail).then((res: any) => {
      setCheckout(res)
    });

    //set shipping address to checkout
    const shippingAddress = {
      address1: e.target.address1.value,
      address2: e.target.address2.value,
      city: e.target.city.value,
      company: e.target.company.value,
      country: e.target.country.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      phone: e.target.phone.value,
      province: e.target.province.value,
      zip: e.target.zip.value,
    };

    if (
      !shippingAddress.address1
      || !shippingAddress.phone
      || !shippingAddress.city
      || !shippingAddress.country
      || !shippingAddress.firstName
      || !shippingAddress.lastName
      || !shippingAddress.zip
    ) {
      window.alert('Please fill in the form')
      return;
    }
    client.checkout.updateShippingAddress(checkout.id, shippingAddress).then((res: any) => {
      setCheckout(res);
    });
    setPage(3);
  }
  console.log('update', checkout)
  console.log('update', checkout.id)

  return (
    <MainContainer>
      <H2>Shipping address</H2>
      <SeparatorSM />
      <form onSubmit={handleSubmit}>
        <FlexCol style={{ gap: '10px' }} >
          <Flex><Input name="email" placeholder='email*' type='text' /></Flex>
          <Flex><Input name="phone" placeholder='phone*' type='text' /><Input name="address1" placeholder='address1*' type='text' /></Flex>
          <Flex><Input name="address2" placeholder='address2' type='text' /><Input name="city" placeholder='city*' type='text' /></Flex>
          <Flex><Input name="company" placeholder='company' type='text' /><Input name="country" placeholder='country*' type='text' /></Flex>
          <Flex><Input name="firstName" placeholder='firstName*' type='text' /><Input name="lastName" placeholder='lastName*' type='text' /></Flex>
          <Flex><Input name="zip" placeholder='zip*' type='text' /><Input name="province" placeholder='province' type='text' /></Flex>
          <ButtonPrimary type='submit'>Pay</ButtonPrimary>
          <ButtonOutline onClick={() => setPage(1)}>Back</ButtonOutline>
        </FlexCol>
      </form>
    </MainContainer>
  )
}

export default Checkout