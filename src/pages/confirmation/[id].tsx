import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { TextBold } from '@/components/s-components/Titles';
import Header from '@/components/Header';

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Index() {
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const sendData = async () => {
      if (id) {
        try {
          const { data } = await axios.get(`http://89.117.37.65:8000/api/confirmation/${id}`);
          console.log(data)
        } catch (err) {
          console.log('error data', err)
        }
      }
    }
    sendData()
  }, [id])

  useEffect(() => {
    const getWallet = async () => {
      if (id) {
        try {

          const { data } = await axios.post(`http://89.117.37.65:8000/api/getUserFromToken/`, {
            token: id,
          });
          console.log(data)
          await axios.post(`http://179.61.246.59:8080/provider/create`, {
            ID: data.token.token,
            Address: data.wallet.wallet,
          })
        } catch (err) {
          console.log('error data', err)
        }
      }
    }
    getWallet()
  }, [id])
  return (
    <>
      <Header />
      <Main>
        <TextBold>
          You are now verified. You can exit this page
        </TextBold>
      </Main>
    </>
  )
}

export default Index