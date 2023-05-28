import React, { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { TextBold } from '@/components/s-components/Titles';

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
          const { data } = await axios.get(`http://localhost:8000/api/confirmation/${id}`);
          console.log(data)
        } catch (err) {
          console.log('error data', err)
        }
      }
    }
    sendData()
  }, [id])
  return (
    <Main>
      <TextBold>
        You are now verified. You can exit this page
      </TextBold>

    </Main>
  )
}

export default Index