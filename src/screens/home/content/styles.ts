import styled from 'styled-components'

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`

export const HomeGuide = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  & > p:nth-child(1) {
    text-align: center;
  }

  margin-bottom: 4rem;
`

export const HomeGuideDropdowns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const HomeSteps = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;

  & > p {
    text-align: center;
  }

  margin-bottom: 4rem;
`

export const HomeStepsDropdowns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`
