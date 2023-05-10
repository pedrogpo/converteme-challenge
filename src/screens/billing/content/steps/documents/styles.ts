import styled from 'styled-components'

export const Documents = styled.div`
  margin-top: 3rem;
`

export const DocumentHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const DropArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  margin-top: 1.25rem;

  border: 1px dashed rgba(0, 75, 255, 1);

  padding: 1.75rem;

  border-radius: 0.4rem;

  svg {
    color: ${({ theme }) => theme.colors.primary_500};
  }
`

export const FileListContainer = styled.table`
  border-spacing: 0;
`

export const FileListHead = styled.thead``

export const FileListTRHead = styled.tr``

export const FileListTRBody = styled.tr`
  &:nth-of-type(odd) {
    background-color: rgba(105, 105, 105, 0.05);
    color: var(--bs-table-striped-color);
  }
`

export const FileListItemHead = styled.th`
  padding: 0.3rem;

  padding-bottom: 0.5rem;
  font-weight: 300;
  padding-right: 2rem;
  text-align: left;

  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors.gray_600};
`

export const FileListBody = styled.tbody`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
`

export const FileListItemBody = styled.td`
  border-color: inherit;
  border-style: solid;
  border-width: 0;
  padding-right: 2rem;
  & > * {
    vertical-align: middle;
  }

  padding: 0.3rem;
`

export const FileListItemBodyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-wrap: wrap;
`
