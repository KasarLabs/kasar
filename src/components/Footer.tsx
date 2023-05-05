import React from 'react';
import styled from 'styled-components';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import { Flex } from './s-components/SFlex';
import { TextGrey, TextBold } from './s-components/Titles';
import { HorizontalLineBig, Separator } from './s-components/utils';
import logo from '../assets/images/kasarLogo.png'
import Image from 'next/image';
import { defaultTheme } from '../theme';

function Footer() {
  return (
    <Main>
      <Separator />
      <HorizontalLineBig />
      <Separator />
      <FlexDiv>
        <FlexCol>
          <Image src={logo} width={30} alt='kasarlabs' />
          <TextGrey>
            Terms . Privacy Policy
          </TextGrey>
        </FlexCol>
        <FlexCol>
          <TextBold>
            Products
          </TextBold>
          <TextGrey>
            Dynamic
          </TextGrey>
          <TextGrey>
            Programming
          </TextGrey>
        </FlexCol>
        <FlexCol>
          <TextBold>
            Products
          </TextBold>
          <TextGrey>
            Dynamic
          </TextGrey>
          <TextGrey>
            Programming
          </TextGrey>
        </FlexCol>
        <FlexCol>
          <TextBold>
            Products
          </TextBold>
          <TextGrey>
            Dynamic
          </TextGrey>
          <TextGrey>
            Programming
          </TextGrey>
        </FlexCol>
        <FlexCol>
          <TextBold>
            Products
          </TextBold>
          <TextGrey>
            Dynamic
          </TextGrey>
          <TextGrey>
            Programming
          </TextGrey>
        </FlexCol>
      </FlexDiv>
      <Separator />
      <HorizontalLineBig />
      <Separator />
      <FlexDiv>
        <TextGrey>&copy; 2023 Your Company Name. All Rights Reserved.</TextGrey>
        <Flex>
          <AiFillTwitterCircle size={30} />
          <AiFillGithub size={30} />
        </Flex>
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

const FlexDiv = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: ${defaultTheme.spacing['4xs']};
    padding:${defaultTheme.spacing['2xs']};
  }
`;

const Bottom = styled.div`
  
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${defaultTheme.spacing['4xs']};
  @media (max-width: 900px) {
    width: 33%;
  }
`

export default Footer;
