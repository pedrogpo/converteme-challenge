import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import {
  calcInterests,
  formatToTwoDecimals,
  translateFrequency,
} from '~/core/utils/billing'
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

export function RateAndPenalty() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const billingValue = getValues('steps.billingData.billing_value')
  const discountPercentage = getValues('steps.rateAndPenalty.discountPercentage')
  const discountValue = getValues('steps.rateAndPenalty.discountValue')

  const billingValueAfterDiscount =
    (Number(billingValue) * (100 - Number(discountPercentage))) / 100 -
      Number(discountValue) || 0

  return (
    <ResumeCard>
      <ResumeCardHead>
        <Text size="sm" color="primary_500" weight="semibold">
          Juros, multas e descontos
        </Text>
        <EditText
          onClick={() => {
            billingSteps.setCurrentStep(1)
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
              Juros ao mês
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {formatToTwoDecimals(getValues('steps.rateAndPenalty.interestPerMonth'))}%
              (R${' '}
              {calcInterests(
                Number(billingValue || 0),
                Number(getValues('steps.rateAndPenalty.interestPerMonth') || 0)
              )
                .toFixed(2)
                .replaceAll('.', ',')}
              )
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Juros fixos ao mês
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              R$ {formatToTwoDecimals(getValues('steps.rateAndPenalty.interestValue'))}
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Multa por atraso
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {formatToTwoDecimals(getValues('steps.rateAndPenalty.penaltyPercentage'))}%
              (R${' '}
              {calcInterests(
                Number(billingValue || 0),
                Number(getValues('steps.rateAndPenalty.penaltyPercentage') || 0)
              )
                .toFixed(2)
                .replaceAll('.', ',')}
              )
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Multa por atraso (Valor fixo)
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              R$ {formatToTwoDecimals(getValues('steps.rateAndPenalty.penaltyValue'))}
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Valor da cobrança após descontos
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              R$ {billingValueAfterDiscount.toFixed(2).replaceAll('.', ',')}
            </Text>
          </CardItemContent>
        </CardItem>
      </CardContent>
    </ResumeCard>
  )
}
