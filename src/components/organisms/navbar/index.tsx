import * as S from './styles'
import { Avatar, Logo } from '~/components/atoms'
import { FaBell, FaQuestionCircle } from 'react-icons/fa'

export default function Navbar() {
  return (
    <S.Navbar>
      <Logo size="md" />
      <S.NavbarItems>
        <FaBell color="white" size={24} />
        <FaQuestionCircle color="white" size={24} />
        <Avatar url="/avatars/1.jpeg" username="Person 1" rounded={true} size="md" />
      </S.NavbarItems>
    </S.Navbar>
  )
}
