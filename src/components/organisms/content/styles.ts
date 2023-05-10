import styled from 'styled-components'

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-height: calc(100vh - 65px); // Screen size - Navbar size

  & > *:nth-child(2) {
    flex: 1;
    padding: 0 1rem;
    overflow-y: auto;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    left: 56px;
    width: calc(100vw - 56px); // Screen size - Sidebar size
  }
`
