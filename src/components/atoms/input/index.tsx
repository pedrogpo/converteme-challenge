import { ForwardedRef, forwardRef, InputHTMLAttributes, ReactNode, Ref } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'
import { Text } from '../text'
import { FormGroup } from '../form-group'
import ReactInputMask from 'react-input-mask'

type InputRef = Ref<ReactInputMask>

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

type InputAppProps = Props & {
  className?: string
  background?: ColorThemeType
  error?: string
  mask?: string
  label?: ReactNode | string
  crossOrigin?: 'anonymous' | 'use-credentials' | '' | undefined // reactmask is using crossOrigin prop and typescript is not recognizing it
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<ReactInputMask, InputAppProps>(
  ({ className, background = 'white', error, label, mask = '', ...rest }, ref) => {
    return (
      <FormGroup>
        <Text size="xs" color="gray_600" weight="semibold">
          {label}
        </Text>
        <S.InputBox hasError={!!error} className={className}>
          <S.Input
            background={background}
            type="text"
            autoComplete="none"
            mask={mask}
            {...rest}
            ref={ref}
          />
          {error && <S.InputError>{error}</S.InputError>}
        </S.InputBox>
      </FormGroup>
    )
  }
)

export default Input
