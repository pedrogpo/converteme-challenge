import * as S from './styles'
import { BillingInformation } from './billing-information'
import { RateAndPenalty } from './rate-and-penalty'
import { CustomerData } from './customer-data'
import { NextButtonContainer } from '../../styles'
import { Button } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'

export default function Resume() {
  const { getValues } = useFormContext<BillingFormTypeInput>()

  const isAllStepsValid =
    !!getValues('steps.customerData') &&
    !!getValues('steps.billingData') &&
    !!getValues('steps.rateAndPenalty')

  if (!isAllStepsValid) {
    billingSteps.setCurrentStep(0)
    return <></>
  }

  return (
    <S.Resume>
      <S.ResumeRow>
        <S.ResumeCol>
          <BillingInformation />
        </S.ResumeCol>
        <S.ResumeCol>
          <RateAndPenalty />
          <CustomerData />
        </S.ResumeCol>
      </S.ResumeRow>
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
        <Button hug={false} type="submit">
          FINALIZAR
        </Button>
      </NextButtonContainer>
    </S.Resume>
  )
}
