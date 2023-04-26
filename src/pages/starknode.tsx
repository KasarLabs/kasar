import Head from 'next/head'
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import Header from '../components/Header'
import { UserContext } from "../context";
import { useContext, useEffect, useState } from "react";
import DropdownSm from '../components/starknode/DropdownSm';
import Client from "shopify-buy"
import CardProduct from '../components/starknode/CardProduct';
import AddToCart from '../components/starknode/AddToCart';

import { defaultTheme } from '../theme';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};

`

export default function Home() {
  const {
    name,
    setName,
    id,
    setId,
    description,
    setDescription,
    image,
    setImage,
    date,
    setDate,
    setPrice,
    setClient
  } = useContext(UserContext);

  const isMobile = useMediaQuery({ maxWidth: 900 })

  useEffect(() => {
    const shopifyClient = Client.buildClient({
      storefrontAccessToken: process.env.PUBLIC_STOREFRONT_API_TOKEN as string,
      domain: '3c463b.myshopify.com/',
      apiVersion: '2023-04'
    })
    setClient(shopifyClient)
    const productId = 'gid://shopify/Product/8389143003465';
    shopifyClient.product.fetch(productId).then((product) => {
      console.log(product)
      setName(product.title)
      setDescription(product.description)
      setImage(product.images[0].src)
      setDate(product.createdAt)
      setId(product.variants[0].id)
      setPrice(product.variants[0].price.amount)
    });
  }, [])

  return (
    <>
      <Head>
        <title>My Osiris</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer>
        {isMobile && <DropdownSm />}
        <CardProduct />
      </MainContainer>
    </>
  )
}
