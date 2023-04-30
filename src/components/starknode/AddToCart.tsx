import React, { useContext, useEffect, useState } from 'react'
import { ButtonOutline, ButtonPrimary } from '../s-components/Button'
import { UserContext } from "../../context";
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Flex, FlexCol, FlexXL } from '../s-components/SFlex';
import { Dispatch, SetStateAction } from 'react';
import { SeparatorSM } from '../s-components/utils';
import { H2, Text } from '../s-components/Titles';
import { DeleteOutlined } from '@ant-design/icons';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${defaultTheme.spacing['4xs']};
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
`

interface ICart {
  setPage: Dispatch<SetStateAction<number>>;
}

function AddToCart({ setPage }: ICart) {
  const { client, id256, setCheckout, checkout, image, setClient, name, id512 } = useContext(UserContext);
  const [number, setNumber] = useState(1)
  const [memory, setMemory] = useState(1)

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

  const AddItem = () => {
    const typeMemory = memory === 1 ? id512 : id256
    const checkoutId = checkout.id
    const lineItemsToAdd = [
      {
        variantId: typeMemory,
        quantity: number,
      }
    ];
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((res: any) => {
      setCheckout(res);
    });
  }

  const deleteItem = (lineItemIdsToRemove: any) => {
    const checkoutId = checkout.id
    client.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then((res: any) => {
      setCheckout(res);
    });
  }

  const goToShopify = () => {
    window.open(checkout.webUrl)
  }

  // console.log("CHECKKK", checkout)
  return (
    <MainContainer>
      <FlexCol style={{ textAlign: 'center', alignItems: 'center', width: '50%' }}>
        <H2>Starknode</H2>
        <ImageStark src={image} alt='starknode' />
        <SeparatorSM />

        {checkout?.lineItems && checkout.lineItems.map((product: any) => {
          return (
            <Flex key={product.id}>
              <Text>{product.title}</Text>
              <Text>x{product.quantity}</Text>
              <DeleteOutlined onClick={() => deleteItem(product.id)} />
            </Flex>
          )
        })}
      </FlexCol>
      <SeparatorSM />
      <FlexCol style={{ textAlign: 'center', alignItems: 'center', width: '50%' }}>

        <Col>
          <Flex>
            <div onClick={() => setMemory(1)}>
              {memory === 1 ?
                <ButtonPrimary>512 Go</ButtonPrimary>
                :
                <ButtonOutline>512 Go</ButtonOutline>
              }
            </div>
            <div onClick={() => setMemory(0)}>
              {memory === 0 ?
                <ButtonPrimary>256 Go</ButtonPrimary>
                :
                <ButtonOutline>256 Go</ButtonOutline>
              }
            </div>
          </Flex>

          <Flex>
            <ButtonOutline onClick={pressLess}>-</ButtonOutline>
            <ButtonPrimary>{number}</ButtonPrimary>
            <ButtonOutline onClick={pressPlus}>+</ButtonOutline>
          </Flex>
          <ButtonPrimary style={{ width: '100%' }} onClick={AddItem}>Add to cart</ButtonPrimary>
          <ButtonPrimary disabled={checkout?.lineItems?.length === 0 ? true : false} style={{ width: '100%' }} onClick={goToShopify}>Proceed</ButtonPrimary>
          <ButtonOutline style={{ width: '100%' }} onClick={() => setPage(0)}>Back</ButtonOutline>
        </Col>
      </FlexCol>
    </MainContainer>
  )
}

export default AddToCart