import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header";
import DropdownSm from "@/components/DropdownSm";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import { defaultTheme } from "../theme";
import { GradientText, SeparatorXL } from "../components/s-components/utils";
import { H2, H3, TextSm, Text, H1 } from "../components/s-components/Titles";
import { Flex } from "../components/s-components/SFlex";
import {
  ButtonOutline,
  ButtonPrimary,
} from "../components/s-components/Button";
import CardComponent from "@/components/Card";

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: 600px;
  z-index: -10;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: ${defaultTheme.spacing["4xs"]};
  overflow: hidden;
  max-width: 1200px;
  padding: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  @media (max-width: 800px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${defaultTheme.spacing["4xs"]};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: ${defaultTheme.spacing.m};
  border-radius: ${defaultTheme.radius.xl};
  width: 250px;
  height: 250px;
  background-color: #fff;
  cursor: pointer;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: ${defaultTheme.spacing.xs};
  }
`;

export default function Deoxys() {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);

  const handleClick = () => {
    window.open("https://t.me/kasarlabs");
  };

  return (
    <>
      <Header />
      {isMobile && <DropdownSm />}
      <MainContainer>
        <SvgContainer>
          <svg
            width='1360'
            height='578'
            viewBox='0 0 1360 578'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient
                x1='50%'
                y1='0%'
                x2='50%'
                y2='100%'
                id='illustration-01'
              >
                <stop stopColor='#FFF' offset='0%' />
                <stop stopColor='#EAEAEA' offset='77.402%' />
                <stop stopColor='#DFDFDF' offset='100%' />
              </linearGradient>
            </defs>
            <g fill='url(#illustration-01)' fillRule='evenodd'>
              <circle cx='1232' cy='128' r='128' />
              <circle cx='155' cy='443' r='64' />
            </g>
          </svg>
        </SvgContainer>
        <HeroContainer>
          <SeparatorXL />
          <Box>
            <H1 style={{ width: "100%" }} data-aos='zoom-y-out'>
              Meet Deoxys, simply the most powerfull full node client on{" "}
              <GradientText>Starknet</GradientText>
            </H1>
            <Text
              style={
                isMobile
                  ? { width: "100%", textAlign: "center" }
                  : { width: "70%", textAlign: "center" }
              }
            >
              Deoxys is a powerfull Starknet full node client written in Rust
              and pewered by substrate.
            </Text>
          </Box>
          <Flex data-aos='zoom-y-out'>
            <Card>
              <Text>Docs</Text>
              <TextSm>
                Don't trust verify! Read the Deoxys documentation to understand
                how it works and how to use it.
              </TextSm>
            </Card>
            <Card>
              <Text>App</Text>
              <TextSm>
                Don't trust verify! Read the Deoxys documentation to understand
                how it works and how to use it.
              </TextSm>
            </Card>
            <Card>
              <Text>Telemetry</Text>
              <TextSm>
                Don't trust verify! Read the Deoxys documentation to understand
                how it works and how to use it.
              </TextSm>
            </Card>
            <Card>
              <Text>Newsletter</Text>
              <TextSm>
                Don't trust verify! Read the Deoxys documentation to understand
                how it works and how to use it.
              </TextSm>
            </Card>
          </Flex>
        </HeroContainer>
        <Footer />
      </MainContainer>
    </>
  );
}
