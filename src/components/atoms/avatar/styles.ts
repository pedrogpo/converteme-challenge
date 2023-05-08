import styled from 'styled-components'

interface IAvatar {
  size: 'sm' | 'md' | 'lg'
  rounded?: boolean
}

const avatarSize = (size: IAvatar['size']) => {
  switch (size) {
    case 'sm':
      return '2.25rem'
    case 'lg':
      return '3.25rem'
    default:
      return '2.75rem'
  }
}

export const Avatar = styled.div<IAvatar>`
  width: ${({ size = 'md' }) => avatarSize(size)};
  height: ${({ size = 'md' }) => avatarSize(size)};
  border: 1px solid white;
  border-radius: ${({ rounded }) => (rounded ? '50%' : '0')};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ rounded }) => (rounded ? '50%' : '0')};
  }
`
