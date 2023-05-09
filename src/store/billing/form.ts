import { makeAutoObservable } from 'mobx'
import localForage from 'localforage'

import { enableStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'
enableStaticRendering(isServer)

export class BillingForm {
  currentStep: number = 1

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setCurrentStep = (step: number) => {
    this.currentStep = step
  }

  getCurrentStep = () => {
    return this.currentStep
  }

  nextStep = () => {
    this.currentStep++
  }

  previousStep = () => {
    this.currentStep--
  }

  resetStep = () => {
    this.currentStep = 1
  }
}

export const billingForm = new BillingForm()
