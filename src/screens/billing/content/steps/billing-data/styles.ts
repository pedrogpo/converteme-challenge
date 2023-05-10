import styled, { css } from 'styled-components'

export const BillingData = styled.div`
  margin-top: 3rem;
`

export const BillingRow = styled.div`
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  gap: 1rem;
`

export const BillingLeftCol = styled.div`
  @media (min-width: 992px) {
    width: 58.3333333333%; // col-7
    flex: 0 0 auto;
    padding-right: 0.75rem;
  }
`

export const BillingRightCol = styled.div`
  @media (min-width: 992px) {
    width: 41.6666666667%; // col-5
    flex: 0 0 auto;
    padding-left: 0.75rem;
  }
`

export const FormData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  max-width: 380px;
`

////...

export const AdditionalOptionsCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
