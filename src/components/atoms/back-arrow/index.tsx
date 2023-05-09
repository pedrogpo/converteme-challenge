import { FaArrowLeft } from 'react-icons/fa'
import * as S from './styles'
import { Text } from '../text'
import Link from 'next/link'

export default function BackArrow() {
  return (
    <Link href="/">
      <S.BackArrow>
        <FaArrowLeft />
        <Text size="md" color="primary_500" weight="regular">
          Voltar
        </Text>
      </S.BackArrow>
    </Link>
  )
}
