import { useEffect, useRef } from 'react'
import { Transition } from '@headlessui/react'
import styled from 'styled-components';

type ModalProps = {
  children: React.ReactNode
  id: string
  ariaLabel: string
  show: boolean
  handleClose: () => void
}

const MainContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
  z-index: 10;
`

export default function Modal({
  children,
  id,
  ariaLabel,
  show,
  handleClose
}: ModalProps) {

  const modalContent = useRef<HTMLDivElement>(null)

  // close the modal on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!show || modalContent.current?.contains(target as Node)) return
      handleClose()
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  }, [show, handleClose, modalContent])

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (keyCode !== 27) return
      handleClose()
    }
    document.addEventListener('keydown', keyHandler)

    return () => document.removeEventListener('keydown', keyHandler)
  }, [handleClose])

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        show={show}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-out duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-50 bg-white bg-opacity-75 transition-opacity backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        show={show}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ttransition ease-out duration-200"
        leaveFrom="oopacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
      >
        <MainContainer ref={modalContent}>
          {children}
        </MainContainer>
      </Transition>
    </>
  )
}
