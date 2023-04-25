import React from 'react'
import { useConnectors, useAccount } from "@starknet-react/core";
import { Button, ButtonPrimary } from '../s-components/Button';

function ButtonConnect() {
  const { connect, connectors, disconnect } = useConnectors()
  const { account, address, status } = useAccount()
  return (
    <>
      {status === 'disconnected' ? (
        <>
          {
            connectors.map((connector) => (
              <ButtonPrimary key={connector.id()} onClick={() => connect(connector)}>
                Connect Wallet
              </ButtonPrimary>
            ))
          }
        </>
      ) : (
        <>
          <ButtonPrimary onClick={() => disconnect()}>
            {address?.substring(0, 7)}{'...'}{address?.slice(-3)}
          </ButtonPrimary>
        </>
      )}
    </>
  )
}

export default ButtonConnect