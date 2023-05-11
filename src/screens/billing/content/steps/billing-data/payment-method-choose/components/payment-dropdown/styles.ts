import styled, { css } from 'styled-components'

interface IPaymentDropdown {
  collapsed: boolean
}

export const PaymentDropdown = styled.div<IPaymentDropdown>`
  width: 100%;
  height: 46px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};

  overflow: hidden;

  transition: 0.3s ease all;
`

export const PaymentHead = styled.div`
  cursor: pointer;

  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 0.5rem;
`

export const PaymentLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  & > p {
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

export const PaymentCircle = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  min-width: 0.75rem;
  min-height: 0.75rem;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.primary_500};
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
`

export const PaymentContent = styled.div`
  padding: 0.5rem 1rem;
  padding-bottom: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 0.5rem 0.5rem;
`
