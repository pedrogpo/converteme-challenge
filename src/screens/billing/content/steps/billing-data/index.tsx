import * as S from './styles'
import { PaymentWayChoose } from './payment-way-choose'
import { Button, InputNumber, Text, TextArea, ToggleButton } from '~/components/atoms'
import PaymentMethodChoose from './payment-method-choose'
import { billingSteps } from '~/store/billing/steps'
import { useFormContext } from 'react-hook-form'
import { BillingFormTypeInput } from '~/core/schemas/billingForm'
import { NextButtonContainer } from '../../styles'

export default function BillingData() {
  const {
    register,
    trigger,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useFormContext<BillingFormTypeInput>()

  return (
    <S.BillingData>
      <S.BillingRow>
        <S.BillingLeftCol>
          <S.FormData>
            <Text uppercase size="sm" color="black" weight="bold">
              O que cobrar?
            </Text>

            <InputNumber
              error={errors.steps?.billingData?.billing_value?.message}
              {...register('steps.billingData.billing_value')}
              label="Valor da cobrança?"
            />

            <TextArea
              label={
                <>
                  Descrição da cobrança{' '}
                  <Text as="span" color="gray_500" weight="regular">
                    (Opcional)
                  </Text>{' '}
                </>
              }
              placeholder="A descrição informada será impressa na fatura."
              {...register('steps.billingData.billing_description')}
            />

            <PaymentWayChoose />
            <PaymentMethodChoose />
          </S.FormData>
        </S.BillingLeftCol>
        <S.BillingRightCol>
          <S.AdditionalOptionsCard>
            <Text size="sm" color="gray_600" weight="semibold">
              Opções adicionais
            </Text>
            <S.AdditionalOptionsButtonsBox>
              <ToggleButton
                size="sm"
                onCheckedChange={(state) => {
                  setValue('steps.billingData.send_documents', state)
                }}
                checked={getValues('steps.billingData.send_documents')!}
                label="Inserir documentos e arquivos"
              />
              <Text size="xs" color="gray_600" weight="regular">
                Deseja adicionar documentos para o seu cliente visualizar e baixar quando
                receber esta cobrança
              </Text>
            </S.AdditionalOptionsButtonsBox>
            <S.AdditionalOptionsButtonsBox>
              <ToggleButton
                onCheckedChange={(state) => {
                  setValue('steps.billingData.issue_invoice', state)
                }}
                checked={getValues('steps.billingData.issue_invoice')!}
                size="sm"
                label="Emitir nota fiscal de serviço"
              />
              <Text size="xs" color="gray_600" weight="regular">
                Você deseja emitir uma nota fiscal de serviço vinculado a esta cobrança?
              </Text>
            </S.AdditionalOptionsButtonsBox>
          </S.AdditionalOptionsCard>
        </S.BillingRightCol>
      </S.BillingRow>
      <NextButtonContainer>
        <Button
          hug={false}
          type="button"
          onClick={() => {
            trigger('steps.billingData').then((isValid) => {
              if (isValid) {
                billingSteps.nextStep()
              }
            })
          }}
        >
          AVANÇAR
        </Button>
      </NextButtonContainer>
    </S.BillingData>
  )
}
