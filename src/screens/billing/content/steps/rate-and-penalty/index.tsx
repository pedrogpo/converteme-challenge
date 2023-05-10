import * as S from './styles'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { Button } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'
import Penalty from './penalty'
import Discount from './discount'
import Rate from './rate'
import { NextButtonContainer } from '../../styles'

export default function RateAndPenalty() {
  const { trigger } = useFormContext<BillingFormTypeInput>()

  return (
    <S.RateAndPenalty>
      <Rate />
      <Penalty />
      <Discount />
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
            trigger('steps.rateAndPenalty').then((isValid) => {
              if (isValid) {
                billingSteps.nextStep()
              }
            })
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.RateAndPenalty>
  )
}
