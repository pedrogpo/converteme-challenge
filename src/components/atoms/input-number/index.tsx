import * as S from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode, useMemo } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import { Text } from '../text'
import { FormGroup } from '../form-group'

type InputNumberAppProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholderTextBox?: string
  className?: string
  background?: ColorThemeType
  error?: string
  label?: ReactNode | string
  optional?: boolean
}

// eslint-disable-next-line react/display-name
const InputNumber = forwardRef<HTMLInputElement, InputNumberAppProps>(
  (
    {
      className,
      background = 'gray_100',
      error,
      label,
      placeholderTextBox = 'R$',
      optional = false,
      ...props
    },
    ref
  ) => {
    return (
      <FormGroup>
        <Text size="xs" color="gray_600" weight="semibold">
          {label}
        </Text>
        <S.InputContainer hasError={!!error}>
          <S.InputBox className={className}>
            <S.InputPlaceholderBox optional={optional}>
              <Text size="sm" weight="bold" color="white">
                {placeholderTextBox}
              </Text>
            </S.InputPlaceholderBox>
            <S.Input
              optional={optional}
              placeholder="0,00"
              type="number"
              {...props}
              autoComplete="none"
              ref={ref}
            />
          </S.InputBox>
          {error && <S.InputError>{error}</S.InputError>}
        </S.InputContainer>
      </FormGroup>
    )
  }
)

export default InputNumber
