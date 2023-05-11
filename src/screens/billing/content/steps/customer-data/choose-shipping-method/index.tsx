import { useFormContext, useWatch } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { ButtonList, MethodButton } from '../styles'

export function ChooseShippingMethod() {
  const { setValue } = useFormContext<BillingFormTypeInput>()

  const billingMethod: string[] = useWatch({
    name: 'steps.customerData.billing_shipping_method',
  })

  const shippingMethods = [
    { label: 'Whatsapp', icon: <></> },
    { label: 'SMS', icon: <></> },
    {
      label: 'E-mail',
      icon: <></>,
    },
    {
      label: 'Impresso',
      icon: <></>,
    },
    {
      label: 'Correios',
      icon: <></>,
    },
  ]

  const addMethod = (label: string) => {
    const currentFiles = billingMethod || []

    setValue('steps.customerData.billing_shipping_method', [...currentFiles, label])
  }

  const removeMethod = (label: string) => {
    const currentFiles = billingMethod || []

    setValue(
      'steps.customerData.billing_shipping_method',
      currentFiles.filter((method) => method !== label)
    )
  }

  return (
    <ButtonList>
      {shippingMethods.map((method) => (
        <MethodButton
          onClick={() => {
            if (billingMethod?.includes(method.label)) {
              removeMethod(method.label)
            } else {
              addMethod(method.label)
            }
          }}
          boxShadow={false}
          fill="contained"
          hug={false}
          size="m"
          color={billingMethod?.includes(method.label) ? 'primary_500' : 'gray_600'}
        >
          {method.label}
        </MethodButton>
      ))}
    </ButtonList>
  )
}
