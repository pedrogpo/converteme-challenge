import DefaultLayout from '~/components/templates/default'
import { NextPageWithLayout } from '~/pages/_app'
import { ReactElement } from 'react'
import BillingContent from './content'

const BillingScreen: NextPageWithLayout = () => {
  return <BillingContent />
}

BillingScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default BillingScreen
