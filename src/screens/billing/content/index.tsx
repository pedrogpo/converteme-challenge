import * as S from './styles'
import { Steps } from '~/components/molecules'
import { BackArrow, Card, Text } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { observer } from 'mobx-react'
import { BillingFormTypeInput, billingFormSchema } from '~/core/schemas/billingForm'
import BillingData from './steps/billing-data'
import RateAndPenalty from './steps/rate-and-penalty'
import Documents from './steps/documents'
import CustomerData from './steps/customer-data'

function BillingContent() {
  const methods = useForm<BillingFormTypeInput>({
    resolver: zodResolver(billingFormSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: BillingFormTypeInput) => {
    console.log({ data })
  }

  const sendDocuments = methods.watch('steps.billingData.send_documents')

  const steps = [
    {
      component: <BillingData />,
      label: 'Dados da cobrança',
      enabled: true,
    },
    {
      component: <RateAndPenalty />,
      label: 'Juros e multa',
      enabled: true,
    },
    {
      component: <Documents />,
      label: 'Documentos',
      enabled: sendDocuments!,
    },
    {
      component: <CustomerData />,
      label: 'Dados do cliente',
      enabled: true,
    },
    {
      component: <div>Resumo</div>,
      label: 'Resumo',
      enabled: true,
    },
  ]

  return (
    <S.BillingContent>
      <BackArrow />
      <Text size="sm" color="gray_500" weight="bold">
        COBRANÇA
      </Text>
      <Card>
        <Steps
          currentStep={billingSteps.getCurrentStep()}
          action={(index) => {
            // billingSteps.setCurrentStep(index)
          }}
          steps={steps}
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {steps
              .filter((step) => step.enabled)
              .map(
                (step, index) =>
                  billingSteps.getCurrentStep() === index && (
                    <div key={index}>{step.component}</div>
                  )
              )}
          </form>
        </FormProvider>
      </Card>
    </S.BillingContent>
  )
}

export default observer(BillingContent)
