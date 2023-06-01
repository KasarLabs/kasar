import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import styled from 'styled-components';
import { TextBold } from '@/components/s-components/Titles';
import { Input } from '@/components/s-components/Input';
import { ButtonPrimary } from '@/components/s-components/Button';
import Header from '@/components/Header';

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const Flex = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Index() {
  const router = useRouter();
  const token = router.query.id;
  const [newPassword, setNewPassword] = useState('');
  const [sent, setSent] = useState(false);

  const sendData = async () => {
    if (token) {
      try {
        console.log('clicked')
        const { data } = await axios.post(`http://localhost:8000/api/reset-password`,
          {
            resetPasswordLink: token,
            newPassword: newPassword,
          });
        setSent(true)
      } catch (err) {
        console.log('error data', err)
      }
    }
  }
  return (
    <>
      <Header />
      <Main>
        {sent ?
          <>
            <TextBold>
              Password is now reset. Go back to the app to login with your new password.
            </TextBold>
          </>
          :
          <>
            <TextBold>
              Reset your password
            </TextBold>
            <Flex>
              <Input type='password' value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder='Enter your new password' />
              <ButtonPrimary style={{ height: '100%' }} onClick={sendData}>Reset</ButtonPrimary>
            </Flex>
          </>
        }
      </Main>
    </>
  )
}

export default Index