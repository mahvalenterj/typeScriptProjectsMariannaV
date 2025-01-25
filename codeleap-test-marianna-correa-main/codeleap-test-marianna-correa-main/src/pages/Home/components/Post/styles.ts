import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const PostContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.blue};
  padding: 1.5rem;
  border-radius: 16px 16px 0 0;
`

export const PostContent = styled.section`
  border: solid 1px ${(props) => props.theme['border-sections']};
  border-radius: 0 0 16px 16px;
  padding: 24px;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-span']};
    :nth-child(2) {
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 0.875rem;
        text-align: right;
      }
    }
  }

  p {
    margin-top: 16px;
    font-size: 1.125rem;
    overflow-wrap: break-word;
  }
`

export const PostTitle = styled.h3`
  font-weight: 700;
  font-size: 1.375rem;
  color: ${(props) => props.theme.white};
  inline-size: 70%;
  overflow-wrap: break-word;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const DialogTrigger = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme.white};
  }
`

export const PostAuthor = styled.span`
  text-transform: capitalize;
  inline-size: 70%;
  overflow-wrap: break-word;
`

export const PostDate = styled.span``
