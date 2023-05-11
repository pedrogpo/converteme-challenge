import styled from 'styled-components'

export const Resume = styled.div`
  margin-top: 3rem;
`

export const ResumeRow = styled.div`
  display: flex;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`

export const ResumeCol = styled.div`
  flex: 0 0 auto;

  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    width: 50%; // col-7
    flex: 0 0 auto;
    padding-right: 0.375rem;
    padding-left: 0.375rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
`

export const ResumeCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 1rem;
`

export const ResumeCardHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-bottom: 1.25rem;
`

export const EditText = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    color: ${({ theme }) => theme.colors.primary_500};
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
`

export const CardItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CardSeparator = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray_600};
  margin: 0.625rem 0;
`
