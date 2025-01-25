import styled from 'styled-components'

interface ButtonWrapperVariant {
  variant: 'flexEnd' | 'spaceBetween'
}

const buttonWrapperVariant = {
  space: {
    flexEnd: 'flex-end',
    spaceBetween: 'space-between',
  },
}

export const FormContainer = styled.form`
  width: 100%;
  padding: 1.5rem;
  border: solid 1px ${(props) => props.theme['border-sections']};
  border-radius: 8px;
`

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 1.375rem;
`

export const FieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.5rem;

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

  span {
    margin-top: 6px;
    color: ${(props) => props.theme['base-delete']};
  }
`

export const FormButtonWrapper = styled.div<ButtonWrapperVariant>`
  width: 100%;
  display: flex;
  justify-content: ${(props) => buttonWrapperVariant.space[props.variant]};
  align-items: center;

  span {
    color: ${(props) => props.theme['base-delete']};
    margin-top: 6px;
  }
`

export const FormButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};

  width: 7.5rem;
  padding: 0.4rem;
  cursor: pointer;
  transition: 0.4s;
  :disabled {
    background-color: ${(props) => props.theme['base-placeholder']};
  }
`
