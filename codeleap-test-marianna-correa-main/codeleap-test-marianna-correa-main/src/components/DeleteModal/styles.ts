import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(119, 119, 119, 0.8);
`

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1.375rem;
`

export const DialogContent = styled(Dialog.Content)`
  width: 50%;
  max-width: 660px;
  border-radius: 16px;
  padding: 24px;
  background: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  gap: 1rem;

  button {
    border-radius: 8px;
    padding: 0.4rem;
    width: 7.5rem;
    cursor: pointer;

    :nth-child(1) {
      background-color: ${(props) => props.theme.white};
      font-weight: 700;
      border: solid 1px ${(props) => props.theme.black};
    }
    :nth-child(2) {
      background-color: ${(props) => props.theme['base-delete']};
      color: ${(props) => props.theme.white};
      border: none;
    }
  }
`
