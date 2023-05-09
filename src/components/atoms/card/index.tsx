import * as S from './styles'

interface ICard {
  children: React.ReactNode
}

export default function Card({ children }: ICard) {
  return <S.Card>{children}</S.Card>
}
