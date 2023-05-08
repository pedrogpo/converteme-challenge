import Image from 'next/image'
import * as S from './styles'

interface IAvatar {
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  url: string
  username: string
}

export default function Avatar({ size = 'md', url, rounded = false, username }: IAvatar) {
  return (
    <S.Avatar size={size} rounded={rounded}>
      <Image src={url} alt={`${username} Avatar`} width={45} height={45} />
    </S.Avatar>
  )
}
