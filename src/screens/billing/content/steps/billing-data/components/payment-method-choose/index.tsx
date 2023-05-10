import * as S from './styles'
import { Text } from '~/components/atoms'
import PaymentDropdown from './components/payment-dropdown'
import { useFormContext, useWatch } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

export default function PaymentMethodChoose() {
  // prevent re-rendering using useWatch as we are using a form provider
  const billingValue = useWatch({
    name: 'steps.billingData.billing_value',
  })

  return (
    <>
      <Text uppercase size="sm" weight="bold" color="black">
        Como seu cliente poderá pagar?
      </Text>

      <S.Dropdowns>
        <PaymentDropdown
          label="Boleto Bancário"
          afterLabel={`Valor líquido por parcela: ${
            billingValue
              ? `R$${Number(billingValue).toFixed(2).replaceAll('.', ',')}`
              : 'R$0,00'
          }`}
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />

        <PaymentDropdown
          label="Pix"
          afterLabel={`Valor líquido por parcela: ${
            billingValue ? `R$${Number(billingValue).toFixed(2)}` : 'R$0,00'
          }`}
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />

        <PaymentDropdown
          label="Cartão de crédito"
          afterLabel={`Valor líquido por parcela: ${
            billingValue
              ? `R$${(Number(billingValue) - Number(billingValue) * 0.015).toFixed(2)}`
              : 'R$0,00'
          }`}
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />
      </S.Dropdowns>
    </>
  )
}
