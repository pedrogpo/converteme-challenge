import styled from 'styled-components'

export const BackArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary_500};
`
