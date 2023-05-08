import { useState, useEffect } from "react";
import styled from 'styled-components';
import { defaultTheme } from '@/theme';

type CountdownProps = {
  targetDate: Date;
};


// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: ${defaultTheme.spacing.l};
//   background: linear-gradient(to right, #338CF5, #4FD1C5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `


const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${defaultTheme.spacing.l};
  background: linear-gradient(to right, #338CF5, #4FD1C5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: ${defaultTheme.spacing.m};
  border-radius: ${defaultTheme.radius.m};
  @media (max-width: 800px) {
    padding: ${defaultTheme.spacing.xs};
    gap: ${defaultTheme.spacing.xs};
  }
`

const Letter = styled.span`
  font-weight: ${defaultTheme.fontWeight.bold};
  font-family: 'Inter';
  font-size: ${defaultTheme.fontSize.xl};
  @media (max-width: 800px) {
    font-size: ${defaultTheme.fontSize.l};
  }
`

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining(): number {
    return Math.floor((targetDate.getTime() - new Date().getTime()) / 1000);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (timeRemaining < 0) {
    return <span>Countdown over!</span>;
  }

  const days = Math.floor(timeRemaining / 86400);
  const hours = Math.floor((timeRemaining % 86400) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <MainContainer>
      <Card>
        <Letter>0{days.toString()}</Letter>
        <Letter>:</Letter>
        <Letter>0{hours.toString()}</Letter>
        <Letter>:</Letter>
        <Letter>{minutes.toString().padStart(2, "0")}</Letter>
        <Letter>:</Letter>
        <Letter>{seconds.toString().padStart(2, "0")}</Letter>
      </Card>
    </MainContainer>
  );
};

export default Countdown;
