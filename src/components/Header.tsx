import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../assets/images/kasarLogo.png'
import { Button, ButtonPrimary } from './s-components/Button';
import { useMediaQuery } from "react-responsive";
import { defaultTheme } from '../theme';
import { H3 } from './s-components/Titles';
import { Flex, FlexSm } from './s-components/SFlex';
import Image from 'next/image'
import Link from 'next/link'

const SHeader = styled.div`
  position: fixed;
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

  width: 100%;

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
    height: 45px;
    width: auto;
  }
`

export default function Header() {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <SHeader>
      {isMobile ? (
        <ContainerSm>
          <Link href="/">
            <LogoHeader src={logo} alt="Kasar Logo" />
          </Link>
        </ContainerSm>
      ) : (
        <Container>
          <Link href="/">
            <LogoHeader src={logo} alt="Kasar Logo" />
          </Link>
          <Flex>
            <>
              <Links>
                <Button onClick={() => window.open("https://app.kasar.io")}>
                  App
                </Button>
              </Links>
              <Link href="/starknode">
                <ButtonPrimary>Buy</ButtonPrimary>
              </Link>
            </>
          </Flex>
        </Container>
      )
      }
    </SHeader >
  )
}
