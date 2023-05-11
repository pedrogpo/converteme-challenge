import * as S from './styles'
import { Text } from '~/components/atoms'
import { FaChevronDown } from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

export interface IPaymentDropdown {
  label: string
  afterLabel: string
  content: string
}

export default function PaymentDropdown({
  label,
  afterLabel,
  content,
}: IPaymentDropdown) {
  const [collapsed, setCollapsed] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // here's a workarround
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
    <S.PaymentDropdown collapsed={collapsed}>
      <S.PaymentHead onClick={() => setCollapsed(!collapsed)}>
        <S.PaymentLabel>
          <S.PaymentCircle />
          <Text size="xs" weight="bold" color="black">
            {label}
          </Text>
        </S.PaymentLabel>
        <S.PaymentLabel>
          <Text size="xs" weight="regular" color="gray_600">
            {afterLabel}
          </Text>
          <FaChevronDown size={12} color="black" />
        </S.PaymentLabel>
      </S.PaymentHead>
      <S.PaymentContent ref={contentRef}>
        <Text size="xs" weight="regular" color="gray_700">
          {content}
        </Text>
      </S.PaymentContent>
    </S.PaymentDropdown>
  )
}
