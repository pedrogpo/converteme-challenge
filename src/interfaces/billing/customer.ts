import { z } from 'zod'

interface IAddress {
  cep: string | undefined
  city: string | undefined
  street: string | undefined
  neighborhood: string | undefined
  number: string | undefined
  reference: string | undefined
}

export interface ICustomer {
  name: string
  cpfOrCnpj: string
  email: string | undefined
  cellphone: string | undefined
  address: IAddress
}

export const addressSchema = z.object({
  cep: z.string().optional(),
  city: z.string().optional(),
  street: z.string().optional(),
  neighborhood: z.string().optional(),
  number: z.string().optional(),
  reference: z.string().optional(),
})

export const customerSchema = z.object({
  name: z.string().nonempty({ message: 'O nome precisa ser preenchido' }),
  cpfOrCnpj: z
    .string()
    .nonempty('O CPF/CNPJ precisa ser preenchido')
    .regex(
      /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
      {
        message: 'O CPF/CNPJ precisa ser válido',
      }
    ),
  email: z.string().optional(),
  cellphone: z.string().optional(),
  address: addressSchema,
})
