import * as S from './styles'
import { Steps } from '~/components/molecules'
import { BackArrow, Card, Text } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'
import BillingData from './steps/billing-data'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { observer } from 'mobx-react'
import { BillingFormTypeInput, billingFormSchema } from '~/core/schemas/billingForm'
import RateAndPenalty from './steps/rate-and-penalty'
import { billingForm } from '~/store/billing/form'
import Documents from './steps/documents'

function BillingContent() {
  const methods = useForm<BillingFormTypeInput>({
    resolver: zodResolver(billingFormSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: BillingFormTypeInput) => {
    console.log({ data })
  }

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
      enabled: billingForm.sendDocuments,
    },
    {
      component: <div>Dados do cliente</div>,
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
            billingSteps.setCurrentStep(index)
          }}
          steps={steps}
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {steps.map(
              (step, index) =>
                billingSteps.getCurrentStep() === index &&
                step.enabled && <div key={index}>{step.component}</div>
            )}
          </form>
        </FormProvider>
      </Card>
    </S.BillingContent>
  )
}

export default observer(BillingContent)
