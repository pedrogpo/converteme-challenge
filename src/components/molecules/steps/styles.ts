import styled, { css } from 'styled-components'

export const StepsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between; /* Adiciona espaçamento entre os Steps */
  margin-bottom: 1.15rem;
  /* @media screen and (max-width: 768px) {
    justify-content: center;
  } */
`

interface IStep {
  active?: boolean
}

export const StepProgressCount = styled.div`
  position: absolute;
  top: 0.05rem;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_600};
  color: ${({ theme }) => theme.colors.gray_600};
  text-align: center;
`

export const StepProgress = styled.div`
  position: relative;
  width: 100%;
  height: 0.15rem;
  color: #fff;
  /* background-color: ${({ theme }) => theme.colors.gray_600}; */
`

export const StepLabel = styled.div`
  position: relative;
  top: 1.25rem;
`

export const Step = styled.div<IStep>`
  cursor: pointer;
  flex-basis: auto; /* Define a largura base do Step com base no conteúdo */
  flex-grow: 0; /* Impede que o Step cresça além do seu tamanho */
  text-align: center;
  position: relative;
  z-index: 1;

  ${({ active }) =>
    active &&
    css`
      ${StepProgressCount} {
        border-color: ${({ theme }) => theme.colors.primary_500};
        p {
          color: ${({ theme }) => theme.colors.primary_500};
        }
      }
    `}

  ${({ active }) =>
    !active &&
    css`
      ${StepProgressCount} {
        border-color: ${({ theme }) => theme.colors.gray_600};
        p {
          color: ${({ theme }) => theme.colors.gray_600};
        }
      }
    `}

  @media screen and (max-width: 768px) {
    transform: scale(0.75);

    ${StepProgressCount} {
      top: -0.25rem;
    }
  }
`

export const StepLine = styled.div`
  position: absolute;
  width: 100%;
  height: 0.1rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.gray_500};
`
