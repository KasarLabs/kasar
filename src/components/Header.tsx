import React, { useState } from 'react'
import styled from 'styled-components';
// import logo from '../assets/images/KasarlabsBanner.png'
import logo from '../assets/images/kasarLogo.png'
import logoDark from '../assets/images/KasarBlackLogo.png'
import { Button, ButtonPrimary } from './s-components/Button';
import { MenuOutlined, EllipsisOutlined, BulbOutlined } from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";
import { defaultTheme } from '../theme';
import { H3 } from './s-components/Titles';
import { Flex, FlexSm } from './s-components/SFlex';
import Image from 'next/image'
import { UserContext } from "../context";
import { useContext } from "react";
import useDarkMode from 'use-dark-mode'
import { Text, TextClickable } from './s-components/Titles';
import Link from 'next/link'

const SHeader = styled.div`
  position: fixed;
  left: 10px;
  right: 10px;
  background-color:  ${({ theme }) => theme.colors.background};
  width: 100%;
  z-index: 100;
  opacity: 97%;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${defaultTheme.spacing['2xs']} ${defaultTheme.spacing.xs};
  H3 {
    margin: 0;
    text-shadow: ${({ theme }) => theme.colors.boxShadow};
  }

`

const ContainerSm = styled.div`
  padding: ${defaultTheme.spacing.xs};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Links = styled.div`
  position: relative;
`

const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.black};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
  border-radius: ${defaultTheme.spacing.xs};
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  gap: ${defaultTheme.spacing['5xs']};
  p {
    margin: 0;
  }
`
const LogoHeader = styled(Image)`
  height: 47px;
  width: 100%;
  @media (max-width: 900px) {
    height: 30px;
    width: auto;
  }
`

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 900 })
  const { setShowNavMobile, showNavMobile } = useContext(UserContext);
  const darkmode = useDarkMode(false)
  const [links, setLinks] = useState(false)


  return (
    <SHeader>
      {isMobile ? (
        <ContainerSm>
          <Link href="/">
            {darkmode.value ? <LogoHeader src={logo} alt="Kasar Logo" /> : <LogoHeader src={logo} alt="Kasar Logo" />}
          </Link>
          <MenuOutlined style={darkmode.value ? { color: 'white', fontSize: '30px' } : { fontSize: '30px', color: 'black' }} onClick={() => setShowNavMobile(!showNavMobile)} />
        </ContainerSm>
      ) : (
        <Container>
          <Link href="/">
            {darkmode.value ? <LogoHeader src={logo} alt="Kasar Logo" /> : <LogoHeader src={logo} alt="Kasar Logo" />}
          </Link>
          <Flex>
            <>
              <Links>
                <Button onClick={() => setLinks(!links)}>
                  App
                </Button>
              </Links>
              <Link href="/starknode">
                <ButtonPrimary>Starknode</ButtonPrimary>
              </Link>
              {/* <Button onClick={darkmode.toggle}>
                <BulbOutlined />
              </Button> */}
            </>
          </Flex>
        </Container>
      )
      }
    </SHeader >
  )
}
