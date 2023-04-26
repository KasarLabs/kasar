import React from 'react'
import styled from 'styled-components';
import { TwitterOutlined, GithubOutlined } from '@ant-design/icons';
import { defaultTheme } from '../theme';
import { Text } from './s-components/Titles';

function Footer() {
  return (
    <Main>
      <Text>Powered by Starknet and KasarLabs</Text>
      <LogoRaw>
        <TwitterOutlined onClick={() => window.open("https://twitter.com/kasarlabs")} />
        <GithubOutlined onClick={() => window.open("https://github.com/kasarlabs")} />
      </LogoRaw>
    </Main>
  )
}

const Main = styled.div`
  background-color:  ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const LogoRaw = styled.div`
  display: flex;
  gap: ${defaultTheme.spacing['5xs']};
  justify-content: center;
`

export default Footer