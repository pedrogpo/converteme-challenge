import { useState } from 'react'
import * as S from './styles'
import {
  FaBars,
  FaBuffer,
  FaCashRegister,
  FaChevronRight,
  FaPen,
  FaShoppingBag,
  FaShoppingCart,
} from 'react-icons/fa'
import { Text } from '~/components/atoms'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <S.Sidebar collapsed={collapsed}>
      <S.SidebarItems>
        <S.CollapseIcon onClick={() => setCollapsed(!collapsed)}>
          <FaBars size={18} />
        </S.CollapseIcon>
        {/* Dashboard */}
        <S.SidebarItem>
          <FaBuffer size={18} />
          <Text as="span" size="sm" color="gray_600" weight="bold">
            Dashboard
          </Text>
        </S.SidebarItem>
        {/* Minhas vendas */}
        <S.SidebarItem>
          <FaShoppingCart size={18} />
          <Text as="span" size="sm" color="gray_600" weight="bold">
            Minhas vendas
            <FaChevronRight size={12} />
          </Text>
        </S.SidebarItem>
        {/* Meus Produtos */}
        <S.SidebarItem>
          <FaShoppingBag size={18} />
          <Text as="span" size="sm" color="gray_600" weight="bold">
            Meus Produtos
            <FaChevronRight size={12} />
          </Text>
        </S.SidebarItem>
        {/* Assinaturas */}
        <S.SidebarItem>
          <FaPen size={18} />
          <Text as="span" size="sm" color="gray_600" weight="bold">
            Assinaturas
          </Text>
        </S.SidebarItem>
        {/* Cobrança */}
        <S.SidebarItem active collapsed={collapsed}>
          <FaCashRegister size={18} />
          <Text as="span" size="sm" color="gray_600" weight="bold">
            Cobrança
          </Text>
        </S.SidebarItem>
      </S.SidebarItems>
    </S.Sidebar>
  )
}
