import styled from 'styled-components'

export const Navbar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary_500};
  padding: 1.25rem 1rem;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
