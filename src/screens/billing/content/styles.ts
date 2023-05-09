import styled, { css } from 'styled-components'

export const BillingContent = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NextButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
  margin-top: 2rem;
`

export const ChooseContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 380px;

  height: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray_600};

  border-radius: 0.5rem;
`

interface IChooseButton {
  active?: boolean
}

export const ChooseButton = styled.button<IChooseButton>`
  color: ${({ theme }) => theme.colors.gray_400};

  flex: 1;

  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary_500 : 'transparent'};

  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.primary_500};

  font-weight: ${({ theme }) => theme.typography.weight.bold};

  border-radius: 0.35rem;

  border: ${({ active, theme }) =>
    active ? `1px solid ${theme.colors.primary_500}` : 'none'};

  &:hover {
    ${({ active }) =>
      !active &&
      css`
        opacity: 0.65;
        cursor: pointer;
      `}
  }

  transition: 0.3s ease all;
`
