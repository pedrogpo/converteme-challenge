import styled from 'styled-components'
import { ButtonContainer } from '~/components/atoms/button/styles'

export const CustomerData = styled.div`
  margin-top: 3rem;
`

export const CustomerDataHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-bottom: 2.5rem;
`

export const ButtonList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const MethodButton = styled(ButtonContainer)`
  padding: 0.45rem 1.5rem;
  font-size: ${({ theme }) => theme.typography.text.xs};
  border-radius: 0.5rem;
`
