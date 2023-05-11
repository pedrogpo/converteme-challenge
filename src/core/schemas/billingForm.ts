import * as z from 'zod'
import { ICustomer, customerSchema } from '~/interfaces/billing/customer'

export const billingFormSchema = z.object({
  steps: z.object({
    billingData: z.object({
      billing_value: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .refine((val) => val >= 0.01, {
          message: 'O valor precisa ser no min. 0.01',
        })
        .refine((val) => val <= 999999, {
          message: 'O valor precisa ser no max. 999999.0',
        }),
      billing_description: z.string().optional(),
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
      billing_first_due_date: z
        .string()
        // check if it's really a date in format __/__/____
        .transform((val) => {
          const parts = val.split('/')
          const newDateString = `${parts[1]}/${parts[0]}/${parts[2]}`
          return newDateString
        })
        .refine(
          (val) => {
            if (isNaN(Date.parse(val))) {
              return true
            }
            const date = new Date(val)
            const today = new Date()
            return date > today
          },
          {
            message: 'A data de vencimento precisa ser válida',
          }
        )
        .default('__/__/____'),
      billing_payment_way: z.string().default('À vista ou parcelado'),
      billing_installments: z
        .string()
        .transform((val) => Number(val))
        .default('0'),
      billing_frequency_charge: z.string().default('monthly'),
      send_documents: z.boolean().default(false),
      issue_invoice: z.boolean().default(false),
    }),
    rateAndPenalty: z.object({
      interestPerMonth: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
      interestValue: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
      penaltyPercentage: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
      penaltyValue: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
      discountPercentage: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
      discountValue: z
        .string()
        .transform((val) => Number(val.replaceAll(',', '.')))
        .default('0'),
    }),
    documents: z
      .object({
        uploaded_files: z
          .array(z.custom<File>())
          .refine(
            (files) => {
              // Check if all items in the array are instances of the File object
              return files.every((file) => file instanceof File)
            },
            {
              // If the refinement fails, throw an error with this message
              message: 'Expected a file',
            }
          )
          .default([]),
      })
      .default({
        uploaded_files: [],
      }),
    customerData: z.object({
      billing_shipping_method: z.array(z.string()).default([]),
      //selected_customer: customerSchema with custom message for required
      selected_customer: customerSchema,
      is_new_customer: z.boolean().default(false),
    }),
  }),
})

export type BillingFormTypeInput = z.input<typeof billingFormSchema>
export type BillingFormTypeOutput = z.output<typeof billingFormSchema>
