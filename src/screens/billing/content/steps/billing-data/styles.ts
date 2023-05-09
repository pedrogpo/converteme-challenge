import styled, { css } from 'styled-components'

export const BillingData = styled.div`
  margin-top: 3rem;
  display: flex;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

export const BillingLeftCol = styled.div`
  @media (min-width: 992px) {
    width: 66.6666666667%; // col-8
    flex: 0 0 auto;
    padding-right: 0.75rem;
  }
`

export const BillingRightCol = styled.div`
  @media (min-width: 992px) {
    width: 33.3333333333%; // col-4
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
