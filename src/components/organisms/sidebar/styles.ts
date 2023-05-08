import styled, { css } from 'styled-components'

interface ISidebar {
  collapsed: boolean
}

export const Sidebar = styled.div<ISidebar>`
  width: ${({ collapsed }) => {
    if (collapsed) {
      return '56px'
    }
    return '210px'
  }};
  height: calc(100vh - 65px); // Screen size - Navbar size
  background-color: ${({ theme }) => theme.colors.white};

  transition: 0.3s ease all;

  padding: 1rem 0;

  overflow: hidden;
`

export const SidebarItems = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`

interface ISidebarItem {
  active?: boolean
  collapsed?: boolean
}

export const SidebarItem = styled.div<ISidebarItem>`
  height: 24px;
  width: 100%;
  position: relative;

  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;

  & > svg:nth-child(1) {
    min-width: 1.25rem;
    min-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray_700};
  }

  & > span {
    display: flex;
    align-items: center;
    gap: 0.325rem;
    left: 3.5rem;
    width: max-content;

    position: absolute;
    transition-delay: 0;
  }

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        & > svg:nth-child(1) {
          color: ${({ theme }) => theme.colors.gray_900};
        }

        & > span {
          color: ${({ theme }) => theme.colors.gray_900};
        }
      }
    `}

  cursor: pointer;

  padding: 1.5rem 1rem;
  width: 95%;

  ${({ active, theme, collapsed }) =>
    active &&
    css`
      background-color: ${theme.colors.primary_500};
      & > svg:nth-child(1) {
        color: ${({ theme }) => theme.colors.gray_700};
        color: ${theme.colors.white};
      }

      & > span {
        color: ${theme.colors.white};
      }

      ${
        collapsed
          ? css`
              margin: 0 5%;
              width: 50px;
              border-radius: 100px;
              & > span {
                transition-delay: 0.3s;
              }
            `
          : css`
              border-radius: 0 100px 100px 0;
            `
      }}
      
    `}

  transition: 0.3s ease all;
`

export const CollapseIcon = styled.div`
  padding: 0 1rem;

  cursor: pointer;

  width: fit-content;

  color: ${({ theme }) => theme.colors.gray_600};

  &:hover {
    color: ${({ theme }) => theme.colors.gray_900};
  }

  user-select: none;

  transition: 0.3s ease all;
`
