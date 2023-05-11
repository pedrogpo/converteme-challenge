import styled from 'styled-components'

export const ChooseCustomerType = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SearchCustomerContainer = styled.div`
  overflow-x: auto;

  .__input {
    max-width: 380px;
    margin-bottom: 0.5rem;
  }
`

export const RegisterCustomerContainer = styled(SearchCustomerContainer)`
  .__input {
    margin-bottom: 1rem;
  }
  overflow: hidden;
`

export const CustomerListContainer = styled.table`
  margin-top: 1rem;
  border-spacing: 0;
  width: 100%;
`

export const CustomerListHead = styled.thead``

export const CustomerListTRHead = styled.tr``

export const CustomerListTRBody = styled.tr`
  &:nth-of-type(odd) {
    background-color: rgba(105, 105, 105, 0.05);
    color: var(--bs-table-striped-color);
  }
`

export const CustomerListItemHead = styled.th`
  padding: 0.3rem;

  padding-bottom: 0.5rem;
  font-weight: 300;
  padding-right: 2rem;
  text-align: left;

  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.gray_600};
`

export const CustomerListBody = styled.tbody`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`

export const CustomerListItemBody = styled.td`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  padding-right: 2rem;
  & > * {
    vertical-align: middle;
  }

  padding: 0.3rem;
`

export const CustomerListItemBodyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-wrap: wrap;
`

export const RegisterCustomerInputs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > * {
    flex: auto;
  }

  margin-bottom: 1rem;
`

interface IMoreInfo {
  active?: boolean
}

export const MoreInfo = styled.div<IMoreInfo>`
  user-select: none;

  margin-top: 1.5rem;

  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding-bottom: 0.3rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};

  cursor: pointer;

  & > svg {
    transition: transform 0.2s ease-in-out;

    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`
