import * as S from './styles'

import { Text } from '~/components/atoms'

interface IStep {
  label: string
}

export interface ISteps {
  steps: IStep[]
  action: (index: number) => void
  currentStep: number
}

export default function Steps({ steps, action, currentStep }: ISteps) {
  return (
    <S.StepsContainer>
      {steps.map((step, index) => (
        <S.Step
          active={index + 1 === currentStep}
          key={index}
          onClick={() => {
            action(index + 1)
          }}
        >
          <S.StepProgress>
            <S.StepProgressCount>
              <Text size="xl" color="gray_900" weight="bold">
                {index + 1}
              </Text>
            </S.StepProgressCount>
          </S.StepProgress>
          <S.StepLabel>
            <Text size="sm" color="gray_700" weight="regular">
              {step.label}
            </Text>
          </S.StepLabel>
        </S.Step>
      ))}
      <S.StepLine />
    </S.StepsContainer>
  )
}
