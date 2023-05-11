import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { formatToTwoDecimals, translateFrequency } from '~/core/utils/billing'
import {
  CardContent,
  CardItem,
  CardItemContent,
  CardSeparator,
  EditText,
  ResumeCard,
  ResumeCardHead,
} from '../styles'
import { Text } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'
import { FaPen } from 'react-icons/fa'

function SubscriptionMode() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const billingValue = getValues('steps.billingData.billing_value')

  const billingValueFormmated = formatToTwoDecimals(billingValue)

  return (
    <>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Valor da cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            R$ {billingValueFormmated} /{' '}
            {translateFrequency(
              getValues('steps.billingData.billing_subscription_frequency_charge') ||
                'Não definido'
            )}
          </Text>
        </CardItemContent>
      </CardItem>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Descrição da cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            {getValues('steps.billingData.billing_description') || 'Não definido'}
          </Text>
        </CardItemContent>
      </CardItem>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Data de vencimento da 1° cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            {getValues('steps.billingData.billing_subscription_first_due_date')}
          </Text>
        </CardItemContent>
      </CardItem>
    </>
  )
}

function NotSubscriptionMode() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const billingValue = getValues('steps.billingData.billing_value')

  const billingValueFormmated = formatToTwoDecimals(billingValue)

  return (
    <>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Valor da cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            R$ {billingValueFormmated}
          </Text>
        </CardItemContent>
      </CardItem>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Descrição da cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            {getValues('steps.billingData.billing_description') || 'Não definido'}
          </Text>
        </CardItemContent>
      </CardItem>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Modo de pagamento
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            {getValues('steps.billingData.billing_installments') == '0'
              ? 'À vista'
              : `Parcelado em ${getValues('steps.billingData.billing_installments')}x`}
          </Text>
        </CardItemContent>
      </CardItem>
      <CardItem>
        <CardItemContent>
          <Text size="xs" color="gray_600" weight="regular">
            Data de vencimento da cobrança
          </Text>
          <Text size="sm" color="primary_500" weight="semibold">
            {getValues('steps.billingData.billing_due_date')}
          </Text>
        </CardItemContent>
      </CardItem>
    </>
  )
}

export function BillingInformation() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const billingType = getValues('steps.billingData.billing_payment_way')

  const billingValue = getValues('steps.billingData.billing_value')

  const billingValueFormmated = formatToTwoDecimals(billingValue)

  return (
    <ResumeCard>
      <ResumeCardHead>
        <Text size="sm" color="primary_500" weight="semibold">
          Informações da cobrança
        </Text>
        <EditText
          onClick={() => {
            billingSteps.setCurrentStep(0)
          }}
        >
          <FaPen size={10} />
          <Text size="xs" color="primary_500" weight="semibold">
            Editar
          </Text>
        </EditText>
      </ResumeCardHead>

      <CardContent>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Tipo da cobrança
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {billingType}
            </Text>
          </CardItemContent>
        </CardItem>
        {billingType == 'Assinatura' ? <SubscriptionMode /> : <NotSubscriptionMode />}
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Método de pagamento
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              Pergunte ao cliente
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Emitir NF
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {getValues('steps.billingData.issue_invoice')
                ? 'Sim'
                : 'Não' || 'Não definido'}
            </Text>
          </CardItemContent>
        </CardItem>
        <CardSeparator />
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Valor líquido a receber no
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              Cartão de crédito
            </Text>
          </CardItemContent>
          <Text size="md" color="primary_500" weight="bold">
            R$ {billingValueFormmated}
          </Text>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Valor líquido a receber no
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              Boleto Bancário
            </Text>
          </CardItemContent>
          <Text size="md" color="primary_500" weight="bold">
            R$ {billingValueFormmated}
          </Text>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Valor líquido a receber no
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              Cartão de crédito
            </Text>
          </CardItemContent>
          <Text size="md" color="primary_500" weight="bold">
            R$ {(Number(billingValue) - Number(billingValue) * 0.015).toFixed(2)}
          </Text>
        </CardItem>
      </CardContent>
    </ResumeCard>
  )
}
