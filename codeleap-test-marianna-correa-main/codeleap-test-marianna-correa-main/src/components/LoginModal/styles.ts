import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: ${(props) => props.theme['base-background']};
`
export const DialogContent = styled(Dialog.Content)`
  max-width: 32rem;
  width: 100%;
  border-radius: 6px;
  padding: 24px;
  background: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    input {
      padding: 8px;
      border: solid 1px ${(props) => props.theme['border-fields']};
      border-radius: 8px;
    }
    div {
      :nth-child(1) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
      }
    }
    span {
      margin-top: 6px;
      color: ${(props) => props.theme['base-delete']};
    }
  }
`
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    margin-top: 1rem;

    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};

    width: 7.5rem;
    padding: 0.4rem;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;
    transition: 0.4s;

    :disabled {
      background-color: ${(props) => props.theme['base-placeholder']};
    }
  }
`
