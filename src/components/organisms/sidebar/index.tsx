import { useRouter } from 'next/router'
import * as S from './styles'
import { useState } from 'react'
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
import Link from 'next/link'

const sidebarItems = [
  {
    icon: FaBuffer,
    label: 'Dashboard',
    path: '/',
  },
  {
    icon: FaShoppingCart,
    label: 'Minhas vendas',
    hasChevron: true,
    path: '/my-sales',
  },
  {
    icon: FaShoppingBag,
    label: 'Meus Produtos',
    hasChevron: true,
    path: '/my-products',
  },
  {
    icon: FaPen,
    label: 'Assinaturas',
    path: '/subscriptions',
  },
  {
    icon: FaCashRegister,
    label: 'Cobrança',
    path: '/billing',
  },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { asPath } = useRouter()
  return (
    <S.Sidebar collapsed={collapsed}>
      <S.SidebarItems>
        <S.CollapseIcon onClick={() => setCollapsed(!collapsed)}>
          <FaBars size={18} />
        </S.CollapseIcon>
        {sidebarItems.map((item, index) => {
          const active = item.path === asPath

          return (
            <Link href={item.path} key={index}>
              <S.SidebarItem active={active} collapsed={collapsed}>
                <item.icon size={18} />
                <Text as="span" size="sm" color="gray_600" weight="bold">
                  {item.label}
                  {item.hasChevron && <FaChevronRight size={12} />}
                </Text>
              </S.SidebarItem>
            </Link>
          )
        })}
      </S.SidebarItems>
    </S.Sidebar>
  )
}
