import React from 'react'
import styled from 'styled-components';
import { H2, H4, TextBold, TextGrey, Text } from '../s-components/Titles';
import { defaultTheme } from '@/theme';
import { Flex, FlexXL } from '../s-components/SFlex';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { GradientText, Separator, SeparatorSM, VerticalLine } from '../s-components/utils';
import Image from 'next/image';
import TestimonialImage from '../../assets/images/testimonial.jpg'
import alchemyLogo from '../../assets/images/alchemy.png';
import infuraLogo from '../../assets/images/infura.png';
import chainstackLogo from '../../assets/images/chainstack.png';
import quicknodeLogo from '../../assets/images/quicknode.png';
import lavanetLogo from '../../assets/images/lavanet.png';
import kasarLogo from '../../assets/images/kasarLogo.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
  align-items: center;
  justify-content: center;
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

const LargeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${defaultTheme.radius.s};
  padding:${defaultTheme.spacing['2xs']};
  gap: ${defaultTheme.spacing['4xs']};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  max-width: 100%;
  width: 300px;
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

const getLatency = async (url: string) => {
  const startTime = new Date().getTime();
  try {
    await axios.post(url, {
      jsonrpc: '2.0',
      id: 1,
      method: 'starknet_blockNumber',
      params: []
    });
    const endTime = new Date().getTime();
    return endTime - startTime;
  } catch (error) {
    return 'Error';
  }
};


function Laboratory() {
  const [latencies, setLatencies] = useState({
    infura: 'Loading...',
    alchemy: 'Loading...',
    quicknode: 'Loading...',
    chainstack: 'Loading...',
  });

  useEffect(() => {
    (async () => {
      const infuraLatency = await getLatency('https://mainnet.infura.io/v3/45130e2077524a3698769595f1c91761');
      const alchemyLatency = await getLatency('https://eth-mainnet.g.alchemy.com/v2/CDPivBjTjgi1b1Qov1IrL6bBPxGwnAgg');
      const quicknodeLatency = await getLatency('https://empty-morning-aura.discover.quiknode.pro/8f95d4037f8becf8903d7abe08382a0111d73fac/');
      const chainstackLatency = await getLatency('https://nd-639-644-088.p2pify.com/fafe3963ceb82fb9124b1254c55ff733');
      const lavanetLatency = await getLatency('https://nd-639-644-088.p2pify.com/fafe3963ceb82fb9124b1254c55ff733');
      setLatencies({
        infura: infuraLatency,
        alchemy: alchemyLatency,
        quicknode: quicknodeLatency,
        chainstack: chainstackLatency,
        lavanet: lavanetLatency,
      });
    })();
  }, []);

  return (
    <MainContainer>
      <H2>Choose the <GradientText>fast</GradientText> track</H2>
      <Box data-aos="zoom-y-out">
        <TextGrey>
        Why should RPC providers have a monopoly on blockchain data access when you can communicate with Starknet from home like with your wifi router
        </TextGrey>
      </Box>
      <FlexXL data-aos="zoom-y-out">
      <CardWrapper>
        <Image src={infuraLogo} alt="Infura" width="60" height="60" />
        <H4>Infura</H4>
        <TextGrey>Latency: {latencies.infura} ms</TextGrey>
      </CardWrapper>
      <CardWrapper>
        <Image src={alchemyLogo} alt="Alchemy" width="60" height="60" />
        <H4>Alchemy</H4>
        <TextGrey>Latency: {latencies.alchemy} ms</TextGrey>
      </CardWrapper>
      <CardWrapper>
        <Image src={quicknodeLogo} alt="QuickNode" width="60" height="60" />
        <H4>QuickNode</H4>
        <TextGrey>Latency: {latencies.quicknode} ms</TextGrey>
      </CardWrapper>
      <CardWrapper>
        <Image src={chainstackLogo} alt="Chainstack" width="60" height="60" />
        <H4>Chainstack</H4>
        <TextGrey>Latency: {latencies.chainstack} ms</TextGrey>
      </CardWrapper>
      <CardWrapper>
        <Image src={lavanetLogo} alt="Chainstack" width="60" height="60" />
        <H4>Lavanet</H4>
        <TextGrey>Latency: {latencies.lavanet} ms</TextGrey>
      </CardWrapper>
      </FlexXL>
      <FlexXL data-aos="zoom-y-out">
        <LargeCardWrapper>
          <Image src={kasarLogo} alt="Chainstack" width="70" height="70" />
          <H4>Kasar</H4>
          <TextGrey>Plug'n'play avg. latency</TextGrey>
        </LargeCardWrapper>
      </FlexXL>

      <Separator />
      <VerticalLine />
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