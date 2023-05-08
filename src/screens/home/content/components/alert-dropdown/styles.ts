import styled, { css } from 'styled-components'

interface IAlertDropdown {
  collapsed: boolean
}

export const AlertDropdown = styled.div<IAlertDropdown>`
  width: 100%;
  height: 68px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_200};

  overflow: hidden;

  transition: 0.3s ease all;
`

export const AlertHead = styled.div`
  cursor: pointer;

  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AlertLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  & > svg {
    color: ${({ theme }) => theme.colors.secondary_500};
  }
`

export const AlertContent = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 0 0 0.5rem 0.5rem;
`
