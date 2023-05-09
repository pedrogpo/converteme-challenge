import * as z from 'zod'

export const billingFormSchema = z.object({
  billing_value: z
    .string()
    .transform((val) => Number(val.replaceAll(',', '.')))
    .refine((val) => val >= 0.01, {
      message: 'O valor precisa ser no min. 0.01',
    }),
  billing_description: z.string(),
  billing_due_date: z
    .string()
    // check if it's really a date in format __/__/____
    .transform((val) => {
      const parts = val.split('/')
      const newDateString = `${parts[1]}/${parts[0]}/${parts[2]}`
      return newDateString
    })
    .refine(
      (val) => {
        const date = new Date(val)
        const today = new Date()
        return date > today
      },
      {
        message: 'A data de vencimento precisa ser válida',
      }
    ),
  billing_payment_way: z.string(),
  billing_installments: z.string().transform((val) => Number(val)),
  billing_frequency_charge: z.string(),
})

export type BillingFormTypeInput = z.input<typeof billingFormSchema>
export type BillingFormTypeOutput = z.output<typeof billingFormSchema>
