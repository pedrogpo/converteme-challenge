export function formatToTwoDecimals(value: string | undefined): string {
  if (!value) return '0,00'
  return Number(value).toFixed(2).replaceAll('.', ',')
}

export function translateFrequency(freq: string): string {
  if (freq === 'monthly') return 'Mensal'
  if (freq === 'quarterly') return 'Trimestral'
  if (freq === 'semiannual') return 'Semestral'
  if (freq === 'yearly') return 'Anual'
  return ''
}

export function calcInterests(billingValue: number, interestPerMonth: number) {
  return billingValue * (interestPerMonth / 100)
}
