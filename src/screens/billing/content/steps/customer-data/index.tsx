import * as S from './styles'
import { Button, Input, InputMask, Text } from '~/components/atoms'
import { useFormContext, useWatch } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

import { billingSteps } from '~/store/billing/steps'
import Toast from '~/core/toast'
import { ChooseShippingMethod } from './choose-shipping-method'
import { ChooseCustomerType } from './choose-customer-type'
import { NextButtonContainer } from '../../styles'

export default function CustomerData() {
  const { trigger } = useFormContext<BillingFormTypeInput>()

  return (
    <S.CustomerData>
      <S.CustomerDataHead>
        <Text size="sm" weight="bold" color="black" uppercase>
          Como essa cobrança será enviada?
        </Text>
        <Text size="xs" weight="regular" color="gray_600">
          Selecione como essa cobrança será enviada ao seu cliente.
        </Text>

        <ChooseShippingMethod />
      </S.CustomerDataHead>
      <ChooseCustomerType />

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
            trigger('steps.customerData').then((isValid) => {
              if (isValid) {
                billingSteps.nextStep()
              } else {
                Toast({
                  message: 'Você precisa selecionar ou registrar um cliente',
                  type: 'error',
                })
              }
            })
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.CustomerData>
  )
}
