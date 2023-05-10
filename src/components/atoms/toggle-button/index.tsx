import * as S from './styles'
import { TextFontSize } from '~/core/constants/theme'
import { Text } from '../text'

interface SwitchProps {
  label: string
  size?: TextFontSize
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
}

export default function ToggleButton({
  label,
  size = 'xs',
  onCheckedChange,
  checked,
}: SwitchProps) {
  return (
    <S.Container>
      {label.length > 0 && (
        <Text size={size} weight="medium" color="gray_700">
          {label}
        </Text>
      )}
      <S.SwitchRoot checked={checked} onCheckedChange={onCheckedChange}>
        <S.SwitchThumb />
      </S.SwitchRoot>
    </S.Container>
  )
}
