import * as S from './styles'

interface IContent {
  children: React.ReactNode
}

export default function Content({ children }: IContent) {
  return <S.Content>{children}</S.Content>
}
