import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(119, 119, 119, 0.8);
`

export const DialogContent = styled(Dialog.Content)`
  width: 50%;
  max-width: 660px;
  min-width: 256px;
  border-radius: 6px;
  padding: 24px;
  background: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  input,
  textarea {
    border: solid 1px ${(props) => props.theme['border-fields']};
    border-radius: 8px;
    padding: 8px;
    margin-top: 8px;
  }

  textarea {
    height: 4.6rem;
    resize: none;
  }
`

export const FieldsWrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 1.5rem;
  }

  span {
    margin-top: 6px;
    color: ${(props) => props.theme['base-delete']};
  }
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
      background-color: ${(props) => props.theme['base-success']};
      color: ${(props) => props.theme.white};
      border: none;
    }
  }
`
