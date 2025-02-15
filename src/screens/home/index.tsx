import DefaultLayout from '~/components/templates/default'
import HomeContent from './content'
import { NextPageWithLayout } from '~/pages/_app'
import { ReactElement } from 'react'

const HomeScreen: NextPageWithLayout = () => {
  return <HomeContent />
}

HomeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomeScreen
