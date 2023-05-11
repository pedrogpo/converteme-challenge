import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'
import InputMask from 'react-input-mask'

interface InputProps {
  background: ColorThemeType
}

const baseProps = css<InputProps>`
  border-radius: 7px;
  width: 100%;
  outline: none;
  border: 1px solid transparent;

  padding: 0 0.75rem;

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border: 1px solid transparent;
    color: ${theme.colors.gray_900};
    font-size: ${theme.typography.text.xs};
    font-weight: ${theme.typography.weight.medium};
    border: 1px solid ${theme.colors.gray_400};
  `}

  &:disabled {
    cursor: text;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
  }

  transition: 0.3s ease all;

  height: 2.25rem;
`

export const Input = styled.input<InputProps>`
  ${baseProps}
`

export const InputWithMask = styled(InputMask)<InputProps>`
  ${baseProps}
`

interface InputBoxInterface {
  hasError: boolean
}

export const InputBox = styled.div<InputBoxInterface>`
  position: relative;
  width: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1.5rem !important;
    `}
`

export const InputError = styled.div`
  position: absolute;
  margin-top: 0.25rem;

  color: red;
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`
