import styled, { css } from 'styled-components'

export const PaymentWayChoose = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PaymentWayChooseContainer = styled.div`
  display: flex;
  width: 100%;
  /* max-width: 380px; */

  height: 2rem;

  border: 1px solid ${({ theme }) => theme.colors.gray_600};

  border-radius: 0.5rem;
`

interface IPaymentChooseButton {
  active?: boolean
}

export const PaymentChooseButton = styled.button<IPaymentChooseButton>`
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
