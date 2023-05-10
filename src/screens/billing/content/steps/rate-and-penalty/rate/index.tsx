import { InputNumber, Text } from '~/components/atoms'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { GroupBox, GroupMultiBox } from '../styles'

export default function Rate() {
  const { register } = useFormContext<BillingFormTypeInput>()

  return (
    <GroupBox>
      <Text size="sm" color="black" weight="bold" uppercase>
        Juros
      </Text>
      <Text size="xs" color="gray_600" weight="regular">
        Aplique juros para quando o pagamento não ocorrer até a data de vencimento. Os
        juros acumulativos serão somados diariamente ao valor da parcela até o pagamento.
      </Text>
      <GroupMultiBox>
        <InputNumber
          {...register('steps.rateAndPenalty.interestPerMonth')}
          placeholderTextBox="%"
          label="Juros ao mês"
        />
        <InputNumber
          {...register('steps.rateAndPenalty.interestValue')}
          optional
          placeholderTextBox="R$"
          label="Valor de juros ao mês"
        />
      </GroupMultiBox>
    </GroupBox>
  )
}
