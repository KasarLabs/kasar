import React from "react";
import styled, { css, keyframes } from "styled-components";

// Grid Container
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 240px);
  grid-gap: 32px;
  position: relative;
  z-index: 1;
`;

// Card Container
const Card = styled.div`
  background-color: #18181b;
  box-shadow: 0px rgba(0, 0, 0, 0.05) 6px rgba(0, 0, 0, 0.05),
    0px 8px 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 56px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.25s;
  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.04), 0px 15px 15px 25px,
      0 0 0 1px rgba (255, 255, 255, 0.2);
  }
`;

// Icon Container
const Icon = styled.span`
  z-index: 2;
  position: relative;
  display: table;
  padding: 8px;
`;

// SVG not included directly here due to its complexity, assume Icon renders SVG as needed

// Styled Text Components
const H4 = styled.h4`
  z-index: 2;
  position: relative;
  margin: 12px 0 4px;
  font-weight: 600;
  font-size: 14px;
  line-height: 2;
  color: #ffffff;
`;

const P = styled.p`
  z-index: 2;
  position: relative;
  font-size: 14px;
  line-height: 1.7;
  color: #a1a1aa;
`;

// Shine Effect
const Shine = styled.div`
  border-radius: inherit;
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  &:before {
    content: "";
    width: 150%;
    padding-bottom: 150%;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 55%;
    filter: blur(35px);
    opacity: 0.1;
    transform: translateX(-50%);
    background-image: conic-gradient(
      from 205deg at 50% 50%,
      rgba(16, 185, 129, 0) 0deg,
      #10b981 25deg,
      rgba(52, 211, 153, 0.18) 295deg,
      rgba(16, 185, 129, 0) 360deg
    );
  }
  &:hover {
    opacity: 1;
  }
`;

// Background Decorative Elements
const Background = styled.div`
  border-radius: inherit;
  position: absolute;
  inset: 0;
  overflow: hidden;
  -webkit-mask-image: radial-gradient(
    circle at 60% 5%,
    black 0%,
    black 15%,
    transparent 60%
  );
  mask-image: radial-gradient(
    circle at 60% 5%,
    black 0%,
    black 15%,
    transparent 60%
  );
`;

const Tiles = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.25s;
  &:hover {
    opacity: 1;
  }
`;

interface TileProps {
  top: string;
  left: string;
  width: string;
  height: string;
}

const Tile = styled.div<TileProps>`
  position: absolute;
  background-color: rgba(16, 185, 129, 0.05);
  animation-name: tileAnimation;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  opacity: 0;

  ${({ top, left, width, height }) => css`
    top: ${top};
    left: ${left};
    width: ${width};
    height: ${height};
  `}

  @keyframes tileAnimation {
    0%,
    12.5%,
    100% {
      opacity: 1;
    }
    25%,
    82.5% {
      opacity: 0;
    }
  }
`;

interface LineProps {
  orientation: "horizontal" | "vertical"; // Add other props as needed, e.g., length, position, etc.
  // Example positions
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width?: string;
  height?: string;
}

const Line = styled.div<LineProps>`
  position: absolute;
  background-color: var(--card-line-color);
  ${({ orientation, top, left, right, bottom, width, height }) => css`
    ${orientation === "horizontal" &&
    css`
      height: 1px; // Default to a thin line for horizontal
      width: ${width || "100%"};
      top: ${top};
      left: ${left || "0"};
    `}
    ${orientation === "vertical" &&
    css`
      width: 1px; // Default to a thin line for vertical
      height: ${height || "100%"};
      left: ${left};
      top: ${top || "0"};
    `}
    // Apply additional positioning as needed
    right: ${right};
    bottom: ${bottom};
  `}
`;
// Lines not explicitly defined due to complexity and similarity to Tiles in approach

// CardComponent Function
function CardComponent() {
  const tileStyles = [
    { id: 1, top: "0%", left: "0%", height: "10%", width: "22.5%" },
    { id: 2, top: "0%", left: "22.5%", height: "10%", width: "27.5%" },
    { id: 3, top: "0%", left: "50%", height: "10%", width: "27.5%" },
    { id: 4, top: "0%", left: "77.5%", height: "10%", width: "22.5%" },
    { id: 5, top: "10%", left: "0", height: "22.5%", width: "22.5%" },
    { id: 6, top: "10%", left: "22.5%", height: "22.5%", width: "27.5%" },
    { id: 7, top: "10%", left: "50%", height: "22.5%", width: "27.5%" },
    { id: 8, top: "10%", left: "77.5%", height: "22.5%", width: "22.5%" },
    { id: 9, top: "32.5%", left: "50%", height: "22.5%", width: "27.5%" },
    { id: 10, top: "32.5%", left: "77.5%", height: "22.5%", width: "22.5%" },
  ];

  const lineStyles: LineProps[] = [
    { orientation: "horizontal", top: "10%", width: "50%" }, // Example horizontal line
    { orientation: "vertical", left: "50%", height: "50%" }, // Example vertical line
    // Add more lines as needed
  ];
  return (
    <div className='grid'>
      <div className='card'>
        <span className='icon'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='1.2'
            stroke-linecap='round'
            stroke-linejoin='round'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z' />
          </svg>
        </span>
        <h4>Products</h4>
        <p>
          Standard chunk of Lorem Ipsum used since the 1500s is showed below for
          those interested.
        </p>
        <div className='shine'></div>
        <div className='background'>
          <div className='tiles'>
            <div className='tile tile-1'></div>
            <div className='tile tile-2'></div>
            <div className='tile tile-3'></div>
            <div className='tile tile-4'></div>

            <div className='tile tile-5'></div>
            <div className='tile tile-6'></div>
            <div className='tile tile-7'></div>
            <div className='tile tile-8'></div>

            <div className='tile tile-9'></div>
            <div className='tile tile-10'></div>
          </div>

          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
        </div>
      </div>
      <div className='card'>
        <span className='icon'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='1.2'
            stroke-linecap='round'
            stroke-linejoin='round'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z' />
            <path d='M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z' />
            <path d='M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z' />
            <path d='M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z' />
          </svg>
        </span>
        <h4>Categories</h4>
        <p>
          Standard chunk of Lorem Ipsum used since the 1500s is showed below for
          those interested.
        </p>
        <div className='shine'></div>
        <div className='background'>
          <div className='tiles'>
            <div className='tile tile-1'></div>
            <div className='tile tile-2'></div>
            <div className='tile tile-3'></div>
            <div className='tile tile-4'></div>

            <div className='tile tile-5'></div>
            <div className='tile tile-6'></div>
            <div className='tile tile-7'></div>
            <div className='tile tile-8'></div>

            <div className='tile tile-9'></div>
            <div className='tile tile-10'></div>
          </div>

          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
