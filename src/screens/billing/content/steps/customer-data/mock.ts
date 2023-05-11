import { ICustomer } from '~/interfaces/billing/customer'

export const customersMock: ICustomer[] = [
  {
    name: 'Rodrigo',
    cpfOrCnpj: '999.999.999-99',
    cellphone: '',
    email: '',
    address: {
      cep: '',
      city: '',
      neighborhood: '',
      number: '',
      reference: '',
      street: '',
    },
  },
  {
    name: 'Joao',
    cpfOrCnpj: '992.999.999-99',
    cellphone: '22 99999-9999',
    email: 'joao@gmail.com',
    address: {
      cep: '',
      city: '',
      neighborhood: '',
      number: '',
      reference: '',
      street: '',
    },
  },
]
