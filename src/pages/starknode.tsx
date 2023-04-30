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
import Checkout from '../components/starknode/ShippingForm';
import Pay from '../components/starknode/Pay';
import { defaultTheme } from '../theme';
import StripePage from '@/components/starknode/StripePage';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};
`

export default function Home() {
  const {
    setName,
    setId256,
    setId512,
    setDescription,
    setPrice512,
    setImage,
    setDate,
    setPrice,
    setClient
  } = useContext(UserContext);
  const [page, setPage] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 900 })

  useEffect(() => {
    const shopifyClient = Client.buildClient({
      storefrontAccessToken: process.env.PUBLIC_STOREFRONT_API_TOKEN as string,
      domain: '3c463b.myshopify.com/',
      apiVersion: '2023-04'
    })
    setClient(shopifyClient)
    console.log(shopifyClient)

    // const productId = 'gid://shopify/Product/8389143003465';
    // shopifyClient.product.fetch(productId).then((product) => {
    //   console.log(product)
    //   setName(product.title)
    //   setDescription(product.description)
    //   setImage(product.images[0].src)
    //   setDate(product.createdAt)
    //   setId256(product.variants[0].id)
    //   setPrice(product.variants[0].price.amount)
    // });

    shopifyClient.product.fetchAll().then((product) => {
      console.log(product)
      setName(product[0].title)
      setDescription(product[0].description)
      setImage(product[0].images[0].src)
      setDate(product[0].createdAt)
      setId256(product[0].variants[0].id)
      setId512(product[1].variants[0].id)
      setPrice(product[0].variants[0].price.amount)
      setPrice512(product[1].variants[0].price.amount)

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
        {page === 0 && <CardProduct setPage={setPage} />}
        {page === 1 && <AddToCart setPage={setPage} />}
        {page === 2 && <Checkout setPage={setPage} />}
        {page === 3 && <Pay setPage={setPage} page={page} />}
        {page === 5 && <StripePage />}

      </MainContainer>
    </>
  )
}
