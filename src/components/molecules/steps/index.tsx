import * as S from './styles'

import { Text } from '~/components/atoms'

interface IStep {
  component: React.ReactNode
  label: string
  enabled: boolean
}

export interface ISteps {
  steps: IStep[]
  action: (index: number) => void
  currentStep: number
}

export default function Steps({ steps, action, currentStep }: ISteps) {
  return (
    <S.StepsContainer>
      {steps
        .filter((step) => step.enabled)
        .map((step, index) => (
          <S.Step
            filled={
              index < currentStep ||
              (index === currentStep && currentStep === steps.length - 1)
            }
            active={index === currentStep}
            key={index}
            onClick={() => {
              action(index)
            }}
          >
            <S.StepProgress>
              <S.StepProgressCount>
                <Text size="md" color="gray_900" weight="bold">
                  {index + 1}
                </Text>
              </S.StepProgressCount>
            </S.StepProgress>
            <S.StepLabel>
              <Text size="xs" color="gray_700" weight="regular">
                {step.label}
              </Text>
            </S.StepLabel>
          </S.Step>
        ))}
      <S.StepLine />
    </S.StepsContainer>
  )
}
