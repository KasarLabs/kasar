import React, { useState } from 'react'
import styled from 'styled-components';
import logo from '../../assets/images/myOsirisLogo.png'
import { Button } from '../s-components/Button';
import { MenuOutlined, EllipsisOutlined, BulbOutlined } from '@ant-design/icons';
import { useMediaQuery } from "react-responsive";
import { defaultTheme } from '../../theme';
import { H1 } from '../s-components/Titles';
import { Flex, FlexSm } from '../s-components/SFlex';
import Image from 'next/image'
import { UserContext } from "../../context";
import { useContext } from "react";
import useDarkMode from 'use-dark-mode'
import { Text, TextClickable } from '../s-components/Titles';
import ButtonConnect from './ButtonConnect';

const SHeader = styled.div`
  position: fixed;
  top: 0;
  background-color:  ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  width: 100%;
  z-index: 100;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};

  h1 {
    margin: 0;
    font-family: 'DynaPuff';
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
  height: 30px;
  width: 30px;
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
          <LogoHeader src={logo} alt="MyOsiris Logo" />
          <MenuOutlined style={darkmode.value ? { color: 'white', fontSize: '30px' } : { fontSize: '30px', color: 'black' }} onClick={() => setShowNavMobile(!showNavMobile)} />
        </ContainerSm>
      ) : (
        <Container>
          <FlexSm>
            <LogoHeader src={logo} alt="MyOsiris Logo" />
            <H1>
              Starknode
            </H1>
          </FlexSm>
          <Flex>
            <>
              <ButtonConnect />
              <Links>
                <Button onClick={() => setLinks(!links)}>
                  <EllipsisOutlined />
                </Button>
                {links && (
                  <Dropdown>
                    <TextClickable>Hello</TextClickable>
                    <TextClickable>Hello</TextClickable>
                    <TextClickable>Hello</TextClickable>
                  </Dropdown>
                )}
              </Links>
              <Button onClick={darkmode.toggle}>
                <BulbOutlined />
              </Button>
            </>
          </Flex>
        </Container>
      )
      }
    </SHeader >
  )
}
