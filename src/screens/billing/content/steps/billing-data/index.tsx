import * as S from './styles'
import { PaymentWayChoose } from './components/payment-way-choose'
import { InputNumber, Text, TextArea } from '~/components/atoms'
import PaymentMethodChoose from './components/payment-method-choose'
import { billingSteps } from '~/store/billing/steps'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

export default function BillingData() {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useFormContext<BillingFormTypeInput>()

  return (
    <S.BillingData>
      <S.BillingLeftCol>
        <S.FormData>
          <Text uppercase size="sm" color="black" weight="bold">
            O que cobrar?
          </Text>

          <InputNumber
            error={errors.billing_value?.message}
            {...register('billing_value')}
            label="Valor da cobrança?"
          />

          <TextArea
            label={
              <>
                Descrição da cobrança{' '}
                <Text as="span" color="gray_500" weight="regular">
                  (Opcional)
                </Text>{' '}
              </>
            }
            placeholder="A descrição informada será impressa na fatura."
            {...register('billing_description')}
          />

          <PaymentWayChoose />

          <PaymentMethodChoose />

          <button
            onClick={() => {
              console.log(errors)
              console.log(getValues())
              if (isValid) {
                billingSteps.nextStep()
              }
            }}
          >
            oii
          </button>
        </S.FormData>
      </S.BillingLeftCol>
      <S.BillingRightCol>oiiooi</S.BillingRightCol>
    </S.BillingData>
  )
}
