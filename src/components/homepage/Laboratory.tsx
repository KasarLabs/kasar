import React from 'react'
import styled from 'styled-components';
import { H2, H4, TextBold, TextGrey, Text } from '../s-components/Titles';
import { defaultTheme } from '@/theme';
import { GradientText, Separator, SeparatorSM, VerticalLine } from '../s-components/utils';
import Image from 'next/image';
import alchemyLogo from '../../assets/images/alchemy.png';
import infuraLogo from '../../assets/images/infura.png';
import chainstackLogo from '../../assets/images/chainstack.png';
import quicknodeLogo from '../../assets/images/quicknode.png';
import lavanetLogo from '../../assets/images/lavanet.png';
import kasarLogo from '../../assets/images/kasarLogo.png';
import blastLogo from '../../assets/images/blast.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${defaultTheme.spacing.xs};
`

export const FlexXL = styled.div`
  display: flex;
  gap: ${defaultTheme.spacing.xs};
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
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
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 350px;
  text-align: center;
  z-index: 10;
  p {
    font-size: 16px;
  }
  transition: 0.15s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 900px) {
    width: 33.33%; // Make each card take up one third of the width of the container for screens wider than 768px
  }
`;


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
  background-color: ${({ theme }) => theme.colors.white};

  p {
    font-size: 16px;
  }
  transition: 0.15s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const Box = styled.div`
  width: 70%;
  text-align: center;
  @media (max-width: 800px) {
		width: 90%;
  }
`

const BgDark = styled.div`
  position: absolute;
  background-color: black;
  z-index: -1;
  height: 400px;
  left: 0;
  right: 0;
  @media (max-width: 800px) {

  height: 780px;

  }
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
    quicknode: 'Loading...',
    chainstack: 'Loading...',
    alchemy: 'Loading...',
    blast: 'Loading...',
  });

  useEffect(() => {
    (async () => {
      const infuraLatency = await getLatency('https://mainnet.infura.io/v3/45130e2077524a3698769595f1c91761');
      const quicknodeLatency = await getLatency('https://empty-morning-aura.discover.quiknode.pro/8f95d4037f8becf8903d7abe08382a0111d73fac/');
      const chainstackLatency = await getLatency('https://nd-639-644-088.p2pify.com/fafe3963ceb82fb9124b1254c55ff3');
      const alchemyLatency = await getLatency('https://starknet-mainnet.g.alchemy.com/v2/Xj-rCxxzGcBnS3HwqOnBqO8TMa8NRGky');
      const blastLatency = await getLatency('https://starknet-mainnet.blastapi.io/088665f8-43b6-4afa-b23e-a918ce689f4f');
      setLatencies({
        infura: infuraLatency.toString(),
        quicknode: quicknodeLatency.toString(),
        chainstack: chainstackLatency.toString(),
        alchemy: alchemyLatency.toString(),
        blast: blastLatency.toString(),
      });
    })();
  }, []);

  return (
    <MainContainer>
      <H2>Choose the <GradientText>fast</GradientText> track</H2>
      <Box data-aos="zoom-y-out">
        <TextGrey>
          When selecting an RPC provider, it's crucial to prioritize speed. We've provided a dashboard below that compares latency between various providers for <GradientText>Starknet</GradientText>.<br></br> A home node can drastically reduce execution time by several milliseconds.        </TextGrey>
      </Box>
      <FlexXL data-aos="zoom-y-out">
        <CardWrapper>
          <Image src={infuraLogo} alt="Infura" width="60" height="60" />
          <H4>Infura</H4>
          <TextGrey>Latency: {latencies.infura} ms</TextGrey>
        </CardWrapper>
        <CardWrapper>
          <Image src={blastLogo} alt="Blast" width="60" height="60" />
          <H4>Alchemy</H4>
          <TextGrey>Latency: {latencies.blast} ms</TextGrey>
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
          <Image src={alchemyLogo} alt="Chainstack" width="60" height="60" />
          <H4>Alchemy</H4>
          <TextGrey>Latency: {latencies.alchemy} ms</TextGrey>
        </CardWrapper>
      </FlexXL>
      <FlexXL data-aos="zoom-y-out">
        <LargeCardWrapper>
          <Image src={kasarLogo} alt="Chainstack" width="70" height="70" />
          <H4>Kasar</H4>
          <TextGrey>Starknode latency: <GradientText>35 ms</GradientText></TextGrey>
        </LargeCardWrapper>
      </FlexXL>
      <VerticalLine />
      <BgDark />
      <Separator />
    </MainContainer>
  )
}

export default Laboratory