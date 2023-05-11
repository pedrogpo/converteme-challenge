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

export function CustomerData() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const shippingMethods = getValues('steps.customerData.billing_shipping_method')
  const customerSelected = getValues('steps.customerData.selected_customer')

  return (
    <ResumeCard>
      <ResumeCardHead>
        <Text size="sm" color="primary_500" weight="semibold">
          Informações do cliente
        </Text>
        <EditText
          onClick={() => {
            billingSteps.setCurrentStep(
              getValues('steps.billingData.send_documents') === true ? 3 : 2
            )
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
              Método de envio
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {shippingMethods
                ? shippingMethods.map((item, index) => {
                    return item + (index < shippingMethods.length - 1 ? ', ' : '')
                  })
                : 'Não definido'}
            </Text>
          </CardItemContent>
        </CardItem>
        <CardItem>
          <CardItemContent>
            <Text size="xs" color="gray_600" weight="regular">
              Nome do cliente
            </Text>
            <Text size="sm" color="primary_500" weight="semibold">
              {customerSelected.name}
            </Text>
          </CardItemContent>
        </CardItem>
      </CardContent>
    </ResumeCard>
  )
}
