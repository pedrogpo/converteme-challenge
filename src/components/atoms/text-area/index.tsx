import * as S from './styles'
import { forwardRef, ReactNode, TextareaHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import { FormGroup } from '../form-group'
import { Text } from '../text'

type TextAreaAppProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
  background?: ColorThemeType
  label?: ReactNode | string
}

// eslint-disable-next-line react/display-name
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaAppProps>(
  ({ className, background = 'white', label, ...props }, ref) => {
    return (
      <FormGroup>
        <Text size="xs" color="gray_600" weight="semibold">
          {label}
        </Text>
        <S.TextArea background={background} autoComplete="none" {...props} ref={ref} />
      </FormGroup>
    )
  }
)

export default TextArea
