import styled from 'styled-components'

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
`

export const FormMultiData = styled.div`
  display: flex;
  gap: 1rem;

  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    & > * {
      flex-grow: 1;
      flex-basis: calc(50% - 0.5rem);
      max-width: calc(
        50% - 0.5rem
      ); /* add max-width to prevent items from growing beyond 50% */
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
