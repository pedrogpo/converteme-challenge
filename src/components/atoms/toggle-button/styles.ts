import styled from 'styled-components'
import * as Switch from '@radix-ui/react-switch'

export const SwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 2.25rem;
  min-width: 2.25rem;
  height: 1rem;
  min-height: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.danger_500};
  border-radius: 9999px;
  position: relative;
  &[data-state='checked'] {
    border: 1px solid ${({ theme }) => theme.colors.success_500};
  }
  transition: 0.3s ease all;
  position: relative;
  cursor: pointer;
`

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 9999px;
  transition: all 0.2s ease;
  transform: translateX(4px);
  background: ${({ theme }) => theme.colors.danger_500};
  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors.success_500};
    transform: translateX(21px);
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`
