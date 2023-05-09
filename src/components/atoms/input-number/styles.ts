import styled from 'styled-components'

export const InputBox = styled.div`
  position: relative;
  width: 100%;

  max-width: 200px;

  display: flex;
`

interface InputContainerInterface {
  hasError: boolean
}

export const InputContainer = styled.div<InputContainerInterface>`
  ${({ hasError }) =>
    hasError &&
    `
      margin-bottom: 1rem;
    `}
`

export const InputPlaceholderBox = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary_500};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.5rem;

  height: 2.25rem;

  border-radius: 0.5rem 0 0 0.5rem;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;

  border: 0;
  outline: none;
  height: 2.25rem;

  border: 1px solid ${({ theme }) => theme.colors.primary_500};
  border-radius: 0 0.5rem 0.5rem 0;

  padding-left: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_800};
  }
`

export const InputError = styled.div`
  position: absolute;
  margin-top: 0.25rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`
