import { Container, Content, Navbar, Sidebar } from '~/components/organisms'

interface ILayout {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      <Content>
        <Sidebar />
        <main>
          <Container>{children}</Container>
        </main>
      </Content>
    </>
  )
}
