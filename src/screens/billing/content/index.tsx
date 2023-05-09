import { Steps } from '~/components/molecules'
import * as S from './styles'
import { BackArrow, Card, Text } from '~/components/atoms'
import { billingSteps } from '~/store/billing/steps'

export default function BillingContent() {
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
            console.log(index)
          }}
          steps={[
            { label: 'Dados da cobrança' },
            { label: 'Juros e multa' },
            { label: 'Dados do cliente' },
            { label: 'Resumo' },
          ]}
        />
      </Card>
    </S.BillingContent>
  )
}
