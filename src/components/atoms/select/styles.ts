import { SelectHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, SelectIconProps {
  background: ColorThemeType
}

interface SelectIconProps {
  sizeOf: 'm' | 'l'
}

export const Select = styled.select<SelectProps>`
  width: 100%;
  outline: none;
  border: 1px solid transparent;

  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.regular};

  ${({ sizeOf }) =>
    sizeOf == 'l' &&
    css`
      padding: 0 0.75rem;
      height: 2.25rem;
      border-radius: 7px;
    `}

  ${({ sizeOf }) =>
    sizeOf == 'm' &&
    css`
      padding: 0 0.35rem;
      height: 1.35rem;
      border-radius: 4px;
    `}

  ${({ theme, background }) => css`
    background: url('/icons/arrow-down.png') no-repeat right ${theme.colors[background]};
    background-position-x: 95%;
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.gray_700};
    background-blend-mode: exclusion;
  `}

  border: 1px solid ${({ theme }) => theme.colors.gray_400};
  background-size: 8px;

  appearance: none;

  &:disabled {
    cursor: text;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
  }

  transition: 0.3s ease all;
`

interface SelectBoxInterface {
  hasError: boolean
}

export const SelectBox = styled.div<SelectBoxInterface>`
  position: relative;
  width: 100%;
  max-width: 380px;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1rem;
    `}
`

export const SelectError = styled.div`
  position: absolute;
  margin-top: 0.5rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`
