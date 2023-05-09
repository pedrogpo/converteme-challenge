import styled from 'styled-components'

interface ILogo {
  size?: 'sm' | 'md' | 'lg'
}

export const Logo = styled.div<ILogo>`
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
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
