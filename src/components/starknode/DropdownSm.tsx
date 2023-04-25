import React, { useState } from 'react'
import styled from 'styled-components';
import { Button } from '../s-components/Button';
import { EllipsisOutlined } from '@ant-design/icons';
import { defaultTheme } from '../../theme';
import { TextSm } from '../s-components/Titles';
import ButtonConnect from './ButtonConnect';

const Links = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap: ${defaultTheme.spacing['4xs']};
  z-index: 100;
`

const Dropdown = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  color: ${({ theme }) => theme.colors.black};
  padding: ${defaultTheme.spacing['4xs']} ${defaultTheme.spacing.xs};
  border-radius: ${defaultTheme.radius.xl};
  position: absolute;
  top: -60px;
  right: 0px;
  p {
    margin: 0;
  }
`

function DropdownSm() {
  const [links, setLinks] = useState(false)
  return (
    <Links>
      <ButtonConnect />
      <Button onClick={() => setLinks(!links)}>
        <EllipsisOutlined />
      </Button>
      {links && (
        <Dropdown>
          <TextSm>Hello</TextSm>
          <TextSm>Hello</TextSm>
          <TextSm>Hello</TextSm>
        </Dropdown>
      )}
    </Links>
  )
}

export default DropdownSm