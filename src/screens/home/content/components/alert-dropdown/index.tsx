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

  useEffect(() => {
    if (contentRef.current) {
      const firstElementChildHeight = (
        contentRef.current.parentElement!.firstElementChild! as HTMLDivElement
      ).clientHeight

      const contentHeight = contentRef.current.clientHeight

      contentRef.current.parentElement!.style.height = collapsed
        ? `calc(${firstElementChildHeight}px + ${contentHeight}px)`
        : `${firstElementChildHeight}px`
    }
  }, [collapsed])

  useEffect(() => {
    if (contentRef.current) {
      const firstElementChildHeight = (
        contentRef.current.parentElement!.firstElementChild! as HTMLDivElement
      ).clientHeight

      contentRef.current.parentElement!.style.height = `${firstElementChildHeight}px`
    }
  }, [])

  return (
    <S.AlertDropdown collapsed={collapsed}>
      <S.AlertHead onClick={() => setCollapsed(!collapsed)}>
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
