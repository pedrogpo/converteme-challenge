import { Container, Content, Navbar, Sidebar } from '~/components/organisms'
import HomeContent from './content'

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <Content>
        <Sidebar />
        <main>
          <Container>
            <HomeContent />
          </Container>
        </main>
      </Content>
    </>
  )
}
