import React from 'react'
import styled from 'styled-components';
import { H2, H4, TextBold, TextGrey, Text } from '../s-components/Titles';
import { defaultTheme } from '@/theme';
import { Flex, FlexXL } from '../s-components/SFlex';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { Separator, SeparatorSM } from '../s-components/utils';
import Image from 'next/image';
import TestimonialImage from '../../assets/images/testimonial.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing.xs};
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${defaultTheme.radius.s};
  padding:${defaultTheme.spacing['2xs']};
  gap: ${defaultTheme.spacing['4xs']};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  max-width: 350px;
  text-align: center;
  p {
    font-size: 16px;
  }
`

const Box = styled.div`
  width: 70%;
  text-align: center;
  @media (max-width: 800px) {
		width: 90%;
  }
`
const CardQuote = styled.div`
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  padding: ${defaultTheme.spacing.xs};
  gap: ${defaultTheme.spacing.m};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;
  @media (max-width: 800px) {
    margin: 0px 0px;
  }
`

const ImageTestimony = styled(Image)`
  position: absolute;
  border-radius: 50%;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`


function Laboratory() {
  return (
    <MainContainer>
      <H2>Laboratory</H2>
      <FlexXL data-aos="zoom-y-out">
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
      </FlexXL>
      <FlexXL data-aos="zoom-y-out">
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
        <CardWrapper>
          <ExclamationCircleTwoTone style={{ fontSize: '56px' }} />
          <H4>Headless CMS</H4>
          <TextGrey>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</TextGrey>
        </CardWrapper>
      </FlexXL>
      <Separator />
      <Box>
        <H2 data-aos="zoom-y-out">Trusted by over 20,000 companies all over the world</H2>
        <Separator />
        <TextGrey>
          Arcu cursus vitae congue mauris rhoncus viverra nibh
          cras pulvinar mattis blandit libero cursus mattis.
        </TextGrey>
        <Separator />
        <CardQuote data-aos="zoom-y-out">
          <ImageTestimony src={TestimonialImage} width={96} height={96} alt="Testimonial 01" />
          <SeparatorSM />
          <Text>
            “ I love this product and would recommend it to anyone.
            Could be not easier to use, and our multiple websites are wonderful.
            We get nice comments all the time. “
          </Text>
          <TextBold>Darya Finger</TextBold>
          <TextGrey>CEO & Co-Founder @Dropbox</TextGrey>
        </CardQuote>
      </Box>
      <Separator />
    </MainContainer>
  )
}

export default Laboratory