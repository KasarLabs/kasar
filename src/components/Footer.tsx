import React from 'react';
import styled from 'styled-components';
import { BsTelegram, BsTwitter, BsGithub } from 'react-icons/bs';
import { Flex } from './s-components/SFlex';
import { TextGrey, TextBold } from './s-components/Titles';
import { HorizontalLineBig, Separator, SeparatorSM } from './s-components/utils';
import logo from '../assets/images/KasarBlackLogo.png'
import Image from 'next/image';
import { defaultTheme } from '../theme';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 900 })

  return (
    <Main>
      <Separator />
      <HorizontalLineBig />
      <Separator />
      <FlexDiv>
        <FlexCol>
          <Image src={logo} width={125} alt='kasarlabs' />
          <TextGrey>
            <Span onClick={() => window.open('https://pay.kasar.io/pages/terms-and-conditions')}>Terms</Span>
            . <Span onClick={() => window.open('https://pay.kasar.io/pages/general-conditions-of-sale')}>Conditions</Span>
            . <Span onClick={() => window.open('https://pay.kasar.io/pages/legal-information')}>Legal</Span>
          </TextGrey>
          <TextGrey>&copy; 2023 KasarLabs. All Rights Reserved.</TextGrey>
        </FlexCol>
        <FlexCol>
          {isMobile && <SeparatorSM />}
          <TextBold>
            Products
          </TextBold>
          <TextGrey style={{ cursor: 'pointer' }} onClick={() => window.open('https://starkcet.com/')}>
            Starkcet
          </TextGrey>
          <Link style={{ textDecoration: 'none' }} href="/starknode">
            <TextGrey >
              Starknode
            </TextGrey>
          </Link>
          <TextGrey style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/KasarLabs/myOsiris')}>
            myOsiris
          </TextGrey>
          <TextGrey style={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/kasarlabs/deoxys')}>
            Deoxys
          </TextGrey>
        </FlexCol>
        <FlexCol>
          {isMobile && <SeparatorSM />}
          <TextBold>
            Contact us
          </TextBold>
          <Flex>
            <Link href="https://twitter.com/kasarlabs" target="_blank" style={{ color: '#666' }}><BsTwitter size={30} /></Link>
            <Link href="https://t.me/+jZZuOamlUM5lNWNk" target="_blank" style={{ color: '#666' }}><BsTelegram size={30} /></Link>
            <Link href="https://github.com/kasarlabs" target="_blank" style={{ color: '#666' }}><BsGithub size={30} /></Link>
          </Flex>
        </FlexCol>
        <FlexCol>
        </FlexCol>
      </FlexDiv>
      <Separator />
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  cursor: pointer;
`;

const FlexDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: top;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: ${defaultTheme.spacing['4xs']};
    padding:${defaultTheme.spacing['2xs']};
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};
  @media (max-width: 900px) {
    width: 33%;
    align-items: flex-end;
  }
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};
  @media (max-width: 900px) {
    width: 100%;
  }
`

export default Footer;
