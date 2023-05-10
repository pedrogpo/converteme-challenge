import { makeAutoObservable } from 'mobx'
import localForage from 'localforage'

import { enableStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

export class BillingForm {
  sendDocuments: boolean = false
  uploadedFiles: File[] = []

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
  //

  addFile(file: File) {
    this.uploadedFiles.push(file)
  }

  removeFile(file: File) {
    this.uploadedFiles = this.uploadedFiles.filter((f) => f !== file)
  }

  clearFiles() {
    this.uploadedFiles = []
  }
}

export const billingForm = new BillingForm()
