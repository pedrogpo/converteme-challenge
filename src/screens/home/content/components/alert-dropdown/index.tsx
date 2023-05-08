import * as S from './styles'
import { FiAlertCircle } from 'react-icons/fi'
import { Text } from '~/components/atoms'
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

export interface IAlertDropdown {
  label: string
  content: string
}

export default function AlertDropdown({ label, content }: IAlertDropdown) {
  const [collapsed, setCollapsed] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // here's a workarround
  useEffect(() => {
    if (contentRef.current) {
      if (collapsed) {
        const contentHeight = contentRef.current.clientHeight
        contentRef.current.parentElement!.style.height = `calc(68px + ${contentHeight}px)`
      } else {
        contentRef.current.parentElement!.style.height = '68px'
      }
    }
  }, [collapsed])

  return (
    <S.AlertDropdown collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
      <S.AlertHead>
        <S.AlertLabel>
          <FiAlertCircle size={20} />
          <Text size="xs" weight="bold" color="black">
            {label}
          </Text>
        </S.AlertLabel>
        <FaChevronDown size={12} color="black" />
      </S.AlertHead>
      <S.AlertContent ref={contentRef}>
        <Text size="xs" weight="regular" color="gray_900">
          {content}
        </Text>
      </S.AlertContent>
    </S.AlertDropdown>
  )
}
