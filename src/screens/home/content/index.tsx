import AlertDropdown, { IAlertDropdown } from './components/alert-dropdown'
import * as S from './styles'
import { Text } from '~/components/atoms'

const guideItems: IAlertDropdown[] = [
  {
    label: 'Finalize seu cadastro',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Convertepay',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Outros gateways de pagamento',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

const stepOneItems: IAlertDropdown[] = [
  {
    label: 'Afiliação Gateway de Pagamento',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Integrações Shopify',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Frete',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Domínio',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Pixel',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Personalização de Checkout',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Tipos de Pagamento',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    label: 'Marketing (Upsell, Order Bump, Cupons)',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

const stepTwoItems: IAlertDropdown[] = [
  {
    label: 'Criar um produto Dígital ou Físico',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]

export default function HomeContent() {
  return (
    <S.HomeContent>
      <S.HomeGuide>
        <Text size="md" color="black">
          Seu guia de início rápido!
        </Text>
        <S.HomeGuideDropdowns>
          {guideItems.map((item) => (
            <AlertDropdown key={item.label} label={item.label} content={item.content} />
          ))}
        </S.HomeGuideDropdowns>
      </S.HomeGuide>
      <S.HomeSteps>
        <Text size="md" color="black">
          Etapas para configurar seu gateway e checkout em seu{' '}
          <Text as="span" color="gray_900" weight="black">
            E-commerce
          </Text>
          !
        </Text>
        <S.HomeStepsDropdowns>
          <Text size="sm" color="black" weight="bold">
            E-commerce
          </Text>
          {stepOneItems.map((item) => (
            <AlertDropdown key={item.label} label={item.label} content={item.content} />
          ))}
        </S.HomeStepsDropdowns>
      </S.HomeSteps>
      <S.HomeSteps>
        <Text size="md" color="black">
          Etapas para configurar seu gateway e checkout em seu{' '}
          <Text as="span" color="gray_900" weight="black">
            infoproduto ou produto físico
          </Text>
          !
        </Text>
        <S.HomeStepsDropdowns>
          <Text size="sm" color="black" weight="bold">
            Infoproduto/Produto Físico
          </Text>
          {stepTwoItems.map((item) => (
            <AlertDropdown key={item.label} label={item.label} content={item.content} />
          ))}
        </S.HomeStepsDropdowns>
      </S.HomeSteps>
    </S.HomeContent>
  )
}
