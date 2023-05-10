import { makeAutoObservable } from 'mobx'
import localForage from 'localforage'

import { enableStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

export class BillingForm {
  sendDocuments: boolean = false

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  toggleSendDocuments() {
    this.sendDocuments = !this.sendDocuments
  }

  enableSendDocuments() {
    this.sendDocuments = true
  }

  disableSendDocuments() {
    this.sendDocuments = false
  }

  setSendDocuments(state: boolean) {
    this.sendDocuments = state
  }
}

export const billingForm = new BillingForm()
