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

function BillingContent() {
  const methods = useForm<BillingFormTypeInput>({
    resolver: zodResolver(billingFormSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: BillingFormTypeInput) => {
    console.log(data)
  }

  const steps = [<BillingData />, <RateAndPenalty />, <div>3</div>]

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
          steps={[
            { label: 'Dados da cobrança' },
            { label: 'Juros e multa' },
            { label: 'Dados do cliente' },
            { label: 'Resumo' },
          ]}
        />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {steps.map(
              (step, index) =>
                billingSteps.getCurrentStep() === index && <div key={index}>{step}</div>
            )}
          </form>
        </FormProvider>
      </Card>
    </S.BillingContent>
  )
}

export default observer(BillingContent)
