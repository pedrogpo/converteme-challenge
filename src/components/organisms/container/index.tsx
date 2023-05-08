import * as S from './styles'

interface IContainer {
  children: React.ReactNode
}

export default function Container({ children }: IContainer) {
  return <S.Container>{children}</S.Container>
}
