import styled from 'styled-components'

export const Navbar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary_500};
  padding: 1.25rem 1rem;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 396px) {
    flex-direction: column;
    gap: 1rem;
    height: auto;
  }
`

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
