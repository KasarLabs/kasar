import Head from 'next/head'
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";
import Header from '../components/Header';
import { BlockSize, Separator, SeparatorSM } from '@/components/s-components/utils';
import Footer from '@/components/Footer';
import { defaultTheme } from '@/theme';
import { TextGrey, Text, TextBold } from '@/components/s-components/Titles';
import { Card } from '@/components/s-components/Card';
import { Flex, FlexCol } from '@/components/s-components/SFlex';
import Pathfinder from "../assets/images/pathfinder.png"
import Image from 'next/image';


const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`

const SImage = styled(Image)`
  width: 40px;
  height: 40px;
`



export default function Stats() {

  const isMobile = useMediaQuery({ maxWidth: 900 })


  return (
    <>
      <Head>
        <title>KasarLabs</title>
        <meta name="description" content="KasarLabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainContainer>
        <Flex>
          <BlockSize size='250px'>
            <Card height='100px'>
              <TextBold>Benchmark measure</TextBold>
            </Card>
          </BlockSize>
          <BlockSize size='250px'>
            <Card height='100px'>
              <SImage src={Pathfinder} alt='pathfinder' />
              <TextBold>Pathfinder</TextBold>
            </Card>
          </BlockSize>
          <BlockSize size='250px'>
            <Card height='100px'>
              <SImage src={Pathfinder} alt='pathfinder' />
              <TextBold>Juno</TextBold>
            </Card>
          </BlockSize>
        </Flex>
        <SeparatorSM />
        <Flex>
          <BlockSize size='250px'>
            <Card>
              <FlexCol style={{ gap: 20 }}>
                <Text>Sync time 90k blocks</Text>
                <Text>DB Size</Text>
                <Text>AVG CPU</Text>
                <Text>AVG RAM</Text>
                <Text>AVG Swap RAM</Text>
                <Text>P95 RPC response time</Text>
                <Text>AVR RPC response time</Text>
              </FlexCol>
            </Card>
          </BlockSize>
          <BlockSize size='250px'>
            <Card>
              <FlexCol style={{ gap: 20 }}>

                <Text>73h 36m</Text>
                <Text>239GB</Text>
                <Text>18.6%</Text>
                <Text>9%</Text>
                <Text>100%</Text>
                <Text>50ms</Text>
                <Text>31ms</Text>
              </FlexCol>
            </Card>
          </BlockSize>
          <BlockSize size='250px'>
            <Card>
              <FlexCol style={{ gap: 20 }}>

                <Text>73h 36m</Text>
                <Text>239GB</Text>
                <Text>18.6%</Text>
                <Text>9%</Text>
                <Text>100%</Text>
                <Text>50ms</Text>
                <Text>31ms</Text>
              </FlexCol>
            </Card>
          </BlockSize>
        </Flex>
      </MainContainer>
      <Footer />
    </>
  )
}
