import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { Button, InputNumber, Select, Text } from '~/components/atoms'
import { ChooseButton, ChooseContainer, NextButtonContainer } from '../../styles'
import { billingSteps } from '~/store/billing/steps'
import Penalty from './penalty'
import { useState } from 'react'

function Rate() {
  return (
    <S.GroupBox>
      <Text size="sm" color="black" weight="bold" uppercase>
        Juros
      </Text>
      <Text size="xs" color="gray_600" weight="regular">
        Aplique juros para quando o pagamento não ocorrer até a data de vencimento. Os
        juros acumulativos serão somados diariamente ao valor da parcela até o pagamento.
      </Text>
      <S.GroupMultiBox>
        <InputNumber placeholderTextBox="%" label="Juros ao mês" />
        <InputNumber optional placeholderTextBox="R$" label="Valor de juros ao mês" />
      </S.GroupMultiBox>
    </S.GroupBox>
  )
}

function Discount() {
  const [selected, setSelected] = useState(0)

  const discountMode = ['Percentual', 'Valor fixo']

  return (
    <S.GroupBox>
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

      <S.GroupMultiBox>
        {selected == 0 && (
          <InputNumber placeholderTextBox="%" label="Percentual de desconto" />
        )}
        {selected == 1 && (
          <InputNumber placeholderTextBox="R$" label="Valor do desconto" />
        )}
      </S.GroupMultiBox>

      <Select
        label="Prazo máximo do desconto"
        placeholder="Status"
        sizeOf="m"
        defaultValue="none"
      >
        <option value="none">Até o dia do vencimento</option>
      </Select>
    </S.GroupBox>
  )
}

export default function RateAndPenalty() {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useFormContext<BillingFormTypeInput>()

  return (
    <S.RateAndPenalty>
      <Rate />
      <Penalty />
      <Discount />
      <NextButtonContainer>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            billingSteps.previousStep()
          }}
        >
          VOLTAR
        </Button>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            billingSteps.nextStep()
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.RateAndPenalty>
  )
}
