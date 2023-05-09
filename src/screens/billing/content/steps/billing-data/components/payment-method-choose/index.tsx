import * as S from './styles'
import { Text } from '~/components/atoms'
import PaymentDropdown from './components/payment-dropdown'

export default function PaymentMethodChoose() {
  return (
    <>
      <Text uppercase size="sm" weight="bold" color="black">
        Como seu cliente poderá pagar?
      </Text>

      <S.Dropdowns>
        <PaymentDropdown
          label="Boleto Bancário"
          afterLabel="Valor líquido por parcela: R$148,01"
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />

        <PaymentDropdown
          label="Pix"
          afterLabel="Valor líquido por parcela: R$148,01"
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />

        <PaymentDropdown
          label="Cartão de crédito"
          afterLabel="Valor líquido por parcela: R$145,03"
          content="Taxa de R$ 1,99 por cobrança recebida. Receba em 1 dia útil após o pagamento. Taxa de R$ 1,99 por pix recebido. Rebeca em poucos segundos após o pagamento."
        />
      </S.Dropdowns>
    </>
  )
}
