import styled from 'styled-components'

interface ILogo {
  size?: 'sm' | 'md' | 'lg'
}

export const Logo = styled.div<ILogo>`
  & > img {
    width: 100%;
    height: ${({ size }) => {
      switch (size) {
        case 'sm':
          return '23px'
        case 'md':
          return '27px'
        case 'lg':
          return '31px'
        default:
          return '16px'
      }
    }};
    object-fit: cover;
  }
`
