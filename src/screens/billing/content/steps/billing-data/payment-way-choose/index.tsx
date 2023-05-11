import * as S from './styles'
import { Input, InputMask, Select, Text } from '~/components/atoms'
import { useEffect, useState } from 'react'
import { FormMultiData } from '~/components/atoms/form-group'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

export function PaymentWayChoose() {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useFormContext<BillingFormTypeInput>()

  const ways = ['À vista ou parcelado', 'Assinatura']

  const [selected, setSelected] = useState(
    getValues('steps.billingData.billing_payment_way') === 'Assinatura' ? 1 : 0
  )

  useEffect(() => {
    setValue(
      'steps.billingData.billing_payment_way',
      getValues('steps.billingData.billing_payment_way') || ways[0]
    )
  }, [])

  return (
    <S.PaymentWayChoose>
      <Text uppercase size="sm" weight="bold" color="black">
        Qual será a forma de pagamento?
      </Text>

      <S.PaymentWayChooseContainer>
        {ways.map((way, index) => (
          <S.PaymentChooseButton
            type="button"
            key={index}
            active={selected === index}
            onClick={() => {
              setSelected(index)
              setValue('steps.billingData.billing_payment_way', way)
            }}
          >
            {way}
          </S.PaymentChooseButton>
        ))}
      </S.PaymentWayChooseContainer>

      <Text size="sm" weight="regular" color="gray_600">
        O valor será cobrado apenas uma vez, podendo ser parcelado conforme definido
        abaixo.
      </Text>
      <FormMultiData>
        {selected === 0 && (
          <>
            <Select
              label="Parcelamento"
              color="black"
              placeholder="Status"
              sizeOf="l"
              defaultValue="0"
              error={errors.steps?.billingData?.billing_installments?.message}
              {...register('steps.billingData.billing_installments')}
            >
              <option value="0" disabled>
                À vista
              </option>
              {Array.from(Array(12).keys()).map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}x Sem juros
                </option>
              ))}
            </Select>

            <InputMask
              {...register('steps.billingData.billing_due_date')}
              error={errors.steps?.billingData?.billing_due_date?.message}
              label="Vencimento da cobrança"
              placeholder="__/__/____"
              mask="99/99/9999"
              defaultValue={''}
            />
          </>
        )}
        {selected === 1 && (
          <>
            <Select
              label="Frequência da cobrança"
              color="black"
              placeholder="Status"
              sizeOf="l"
              error={
                errors.steps?.billingData?.billing_subscription_frequency_charge?.message
              }
              {...register('steps.billingData.billing_subscription_frequency_charge')}
              defaultValue="monthly"
            >
              <option value="monthly">Mensal</option>
              <option value="quarterly">Trimestral</option>
              <option value="yearly">Anual</option>
            </Select>

            <InputMask
              label="Vencimento da 1° cobrança"
              placeholder="__/__/____"
              mask="99/99/9999"
              {...register('steps.billingData.billing_subscription_first_due_date')}
              error={
                errors.steps?.billingData?.billing_subscription_first_due_date?.message
              }
              defaultValue={''}
            />

            <Select
              label={
                <>
                  Fim de assinatura{' '}
                  <Text as="span" color="gray_500" weight="regular">
                    (Opcional)
                  </Text>{' '}
                </>
              }
              color="black"
              placeholder="Status"
              sizeOf="l"
              // error={errors.status?.message}
              defaultValue="none"
            >
              <option value="none">Sem data definida</option>
            </Select>
          </>
        )}
      </FormMultiData>
    </S.PaymentWayChoose>
  )
}
