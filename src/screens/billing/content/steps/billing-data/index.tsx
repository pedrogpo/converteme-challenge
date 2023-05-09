import * as S from './styles'
import { PaymentWayChoose } from './components/payment-way-choose'
import { Button, InputNumber, Text, TextArea } from '~/components/atoms'
import PaymentMethodChoose from './components/payment-method-choose'
import { billingSteps } from '~/store/billing/steps'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { NextButtonContainer } from '../../styles'

export default function BillingData() {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<BillingFormTypeInput>()

  return (
    <S.BillingData>
      <S.BillingRow>
        <S.BillingLeftCol>
          <S.FormData>
            <Text uppercase size="sm" color="black" weight="bold">
              O que cobrar?
            </Text>

            <InputNumber
              error={errors.steps?.billingData?.billing_value?.message}
              {...register('steps.billingData.billing_value')}
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
              {...register('steps.billingData.billing_description')}
            />

            <PaymentWayChoose />

            <PaymentMethodChoose />
          </S.FormData>
        </S.BillingLeftCol>
        <S.BillingRightCol>
          <S.AdditionalOptionsCard>
            <Text size="sm" color="gray_600" weight="semibold">
              Opções adicionais
            </Text>
          </S.AdditionalOptionsCard>
        </S.BillingRightCol>
      </S.BillingRow>
      <NextButtonContainer>
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
    </S.BillingData>
  )
}
