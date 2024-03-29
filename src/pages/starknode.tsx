import Head from 'next/head';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Header from '../components/Header';
import { UserContext } from '../context';
import { useContext, useEffect, useState } from 'react';
import DropdownSm from '../components/DropdownSm';
import Client from 'shopify-buy';
import CardProduct from '../components/starknode/CardProduct';
import AddToCart from '../components/starknode/AddToCart';
import Checkout from '../components/starknode/ShippingForm';
import Pay from '../components/starknode/Pay';
import { defaultTheme } from '../theme';
import { Separator, VerticalLine } from '@/components/s-components/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/components/Footer';
import Countdown from '@/components/homepage/CountDown';

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};
  overflow: hidden;
`;

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
    setClient,
  } = useContext(UserContext);
  const [page, setPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });

    const shopifyClient = Client.buildClient({
      storefrontAccessToken: process.env.PUBLIC_STOREFRONT_API_TOKEN as string,
      domain: '3c463b.myshopify.com/',
      apiVersion: '2023-04',
    });
    setClient(shopifyClient);
    shopifyClient.product.fetchAll().then((product) => {
      setName(product[0].title);
      setDescription(product[0].description);
      setImage(product[0].images[0].src);
      setDate(product[0].createdAt);
      setId256(product[0].variants[0].id);
      setId512(product[1].variants[0].id);
      setPrice(product[0].variants[0].price.amount);
      setPrice512(product[1].variants[0].price.amount);
    });
  }, []);
  return (
    <>
      <Head>
        <title>KasarLabs</title>
        <meta name="description" content="Welcome to KasarLabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* {isMobile && <DropdownSm />} */}
      <MainContainer>
        {page === 0 && (<CardProduct setPage={setPage} />)}
        {page === 1 && (<AddToCart setPage={setPage} />)}
        <Footer />
      </MainContainer>
    </>
  );
}

