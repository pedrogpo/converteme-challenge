import Image from 'next/image'
import * as S from './styles'

interface ILogo {
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ size = 'md' }: ILogo) {
  return (
    <S.Logo size={size}>
      <Image src="/logo.svg" alt="Logo Converte.me" width={193} height={27} />
    </S.Logo>
  )
}
