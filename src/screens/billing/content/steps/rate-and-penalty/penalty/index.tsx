import * as S from './styles'
import { useState } from 'react'
import { InputNumber, Text } from '~/components/atoms'
import { GroupBox } from '../styles'
import { GroupMultiBox } from '../styles'
import { ChooseButton, ChooseContainer } from '../../../styles'

export default function Penalty() {
  const [selected, setSelected] = useState(0)

  const penaltiesMode = ['Percentual', 'Valor fixo']

  return (
    <GroupBox>
      <Text size="sm" color="black" weight="bold" uppercase>
        Multa
      </Text>
      <Text size="xs" color="gray_600" weight="regular">
        A multa será somada ao valor da parcela caso o pagamento seja feito após a data do
        vencimento.
      </Text>

      <ChooseContainer>
        {penaltiesMode.map((penalty, index) => (
          <ChooseButton
            type="button"
            key={index}
            active={selected === index}
            onClick={() => {
              setSelected(index)
            }}
          >
            {penalty}
          </ChooseButton>
        ))}
      </ChooseContainer>

      <GroupMultiBox>
        {selected == 0 && (
          <InputNumber placeholderTextBox="%" label="Valor percentual da multa" />
        )}
        {selected == 1 && <InputNumber placeholderTextBox="R$" label="Valor da multa" />}
      </GroupMultiBox>
    </GroupBox>
  )
}
