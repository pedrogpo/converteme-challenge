import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'
import { Text } from '../text'
import { FormGroup } from '../form-group'

type SelectAppProps = SelectHTMLAttributes<HTMLSelectElement> & {
  sizeOf?: 'm' | 'l'
  className?: string
  background?: ColorThemeType
  error?: string
  label?: ReactNode | string
}

// eslint-disable-next-line react/display-name
const Select = forwardRef<HTMLSelectElement, SelectAppProps>(
  ({ sizeOf = 'l', className, background = 'white', error, label, ...props }, ref) => {
    return (
      <FormGroup>
        {label && (
          <Text size="xs" color="gray_600" weight="semibold">
            {label}
          </Text>
        )}
        <S.SelectBox hasError={!!error} className={className}>
          <S.Select
            background={background}
            sizeOf={sizeOf}
            autoComplete="none"
            {...props}
            ref={ref}
          >
            {props.children}
          </S.Select>
          {error && <S.SelectError>{error}</S.SelectError>}
        </S.SelectBox>
      </FormGroup>
    )
  }
)

export default Select
