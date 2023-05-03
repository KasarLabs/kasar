import React from 'react';
import styled from 'styled-components';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';

const breakpoints = {
  sm: '576px',
  lg: '992px',
};

const colors = {
  background: '#23272b',
  textLight: '#ffffff',
  primary: '#4cd964',
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
};

const spacing = {
  xs: '4px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '5xs': '8px',
};

function Footer() {
  return (
    <Main>
      <Logo>
        {/* Add your Logo component here */}
      </Logo>
      <LinksGrid>
        <LinksColumn>
          <LinksTitle>Products</LinksTitle>
          {/* Add product links here */}
        </LinksColumn>
        <LinksColumn>
          <LinksTitle>Resources</LinksTitle>
          {/* Add resource links here */}
        </LinksColumn>
        <LinksColumn>
          <LinksTitle>Company</LinksTitle>
          {/* Add company links here */}
        </LinksColumn>
        <LinksColumn>
          <LinksTitle>Subscribe</LinksTitle>
          {/* Add subscription form here */}
        </LinksColumn>
      </LinksGrid>
      <Bottom>
        <SocialLinks>
          <IconWrapper href="https://twitter.com/kasarlabs" target="_blank">
            <AiFillTwitterCircle />
          </IconWrapper>
          <IconWrapper href="https://github.com/kasarlabs" target="_blank">
            <AiFillGithub />
          </IconWrapper>
          {/* Add more social icons here */}
        </SocialLinks>
        <Copyrights>&copy; 2023 Your Company Name. All Rights Reserved.</Copyrights>
      </Bottom>
    </Main>
  );
}

const Main = styled.div`
  background-color: ${colors.background};
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing['3xl']} 0;
  color: ${colors.textLight};

  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: column;
    justify-content: space-between;
    padding: ${spacing['2xl']} ${spacing['3xl']};
  }
`;

const Logo = styled.div`
  margin-bottom: ${spacing.xl};
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: ${spacing.xl};
  margin-bottom: ${spacing.xl};
`;

const LinksColumn = styled.div``;

const LinksTitle = styled.h6`
  margin-bottom: ${spacing.lg};
  color: ${colors.textLight};
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-bottom: ${spacing.xl};

  @media screen and (min-width: ${breakpoints.lg}) {
    margin-right: ${spacing['3xl']};
    margin-bottom: 0;
  }
  `;
  
  const IconWrapper = styled.a`
  color: ${colors.textLight};
  font-size: 24px;
  margin-right: ${spacing.lg};
  
  &:hover {
  color: ${colors.primary};
  }
  `;
  
  const Copyrights = styled.span`
  text-align: center;
  
  @media screen and (min-width: ${breakpoints.lg}) {
  text-align: left;
  }
  `;
  
  export default Footer;
