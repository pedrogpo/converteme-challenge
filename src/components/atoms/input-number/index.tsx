import * as S from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import InputMask from 'react-input-mask'
import { useForm, useController, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { Text } from '../text'
import { FormGroup } from '../form-group'

const schema = z.object({
  amount: z
    .number()
    .min(0.01, 'Must be at least 0.01')
    .max(999999.99, 'Must be at most 999999.99'),
})

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
    // const { control } = useFormContext()

    // const amountController = useController({
    //   name: 'amount',
    //   control,
    //   defaultValue: 0,
    //   rules: {
    //     required: { value: true, message: 'Amount is required' },
    //   },
    // })

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
              step="0.01"
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
