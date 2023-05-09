import styled from 'styled-components'
import { ColorThemeType, TextFontSize, WeightFont } from '~/core/constants/theme'

interface TextProps {
  size?: TextFontSize
  color?: ColorThemeType
  weight?: WeightFont
  uppercase?: boolean
}

export const Text = styled.p<TextProps>`
  ${({ theme, size, color, weight, uppercase }) => `
    color: ${color ? theme.colors[color] : 'inherit'};
    font-size: ${size ? theme.typography.text[size] : 'inherit'};
    font-weight: ${weight ? theme.typography.weight[weight] : 'inherit'};
    text-transform: ${uppercase ? 'uppercase' : 'inherit'};
  `}
  margin-bottom: 0;
  transition: 0.3s ease all;
`
