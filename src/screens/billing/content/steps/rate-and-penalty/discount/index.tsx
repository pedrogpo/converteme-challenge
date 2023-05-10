import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputNumber, Select, Text } from '~/components/atoms'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { GroupBox, GroupMultiBox } from '../styles'
import { ChooseButton, ChooseContainer } from '../../../styles'

export default function Discount() {
  const [selected, setSelected] = useState(0)

  const discountMode = ['Percentual', 'Valor fixo']

  const { register } = useFormContext<BillingFormTypeInput>()

  return (
    <GroupBox>
      <Text size="sm" color="black" weight="bold" uppercase>
        Desconto
      </Text>
      <Text size="xs" color="gray_600" weight="regular">
        Conceda desconto para incentivar seu cliente a realizar o pagamento antes do
        vencimento. Você configurou o vencimento da cobrança para 30/04/2023
      </Text>

      <ChooseContainer>
        {discountMode.map((mode, index) => (
          <ChooseButton
            type="button"
            key={index}
            active={selected === index}
            onClick={() => {
              setSelected(index)
            }}
          >
            {mode}
          </ChooseButton>
        ))}
      </ChooseContainer>

      <GroupMultiBox>
        {selected == 0 && (
          <InputNumber
            {...register('steps.rateAndPenalty.discountPercentage')}
            placeholderTextBox="%"
            label="Percentual de desconto"
          />
        )}
        {selected == 1 && (
          <InputNumber
            {...register('steps.rateAndPenalty.discountValue')}
            placeholderTextBox="R$"
            label="Valor do desconto"
          />
        )}
      </GroupMultiBox>

      <Select
        label="Prazo máximo do desconto"
        placeholder="Status"
        sizeOf="l"
        defaultValue="none"
      >
        <option value="none">Até o dia do vencimento</option>
      </Select>
    </GroupBox>
  )
}
