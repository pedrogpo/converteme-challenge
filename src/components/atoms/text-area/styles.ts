import styled, { css } from 'styled-components'
import { TextareaHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  background: ColorThemeType
}

export const TextArea = styled.textarea<TextAreaProps>`
  ${({ theme, background }) => css`
    background-color: ${background};
    color: ${theme.colors.gray_900};
    font-size: ${theme.typography.text.xs};
    font-weight: ${theme.typography.weight.medium};
    border: 1px solid ${theme.colors.gray_400};
  `}

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.gray_800};
  }

  border-radius: 0.5rem;

  padding: 0.5rem 0.75rem;

  outline: none;

  width: 100%;
  max-width: 380px;

  min-height: 50px;
  max-height: 200px;

  resize: vertical;

  transition: 0.3s ease all;
`
