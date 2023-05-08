import { Content, Navbar, Sidebar } from '~/components/organisms'

export default function HomeScreen() {
  return (
    <main>
      <Navbar />
      <Content>
        <Sidebar />
        <div>
          <h1></h1>
        </div>
      </Content>
    </main>
  )
}
