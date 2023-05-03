import { NonprofitPayment } from 'src/services/useGetPayments'

function calculateGiftAidPercentage(
  totalDonations: number,
  giftAidDonations: number
) {
  if (!totalDonations) return 0
  return Math.floor((giftAidDonations / totalDonations) * 100)
}

export function buildPaymentSummary(payments: Array<NonprofitPayment>) {
  const { count, total, withGiftAid } = payments.reduce(
    (acc, payment) => {
      if (payment.status !== 'succeeded') return acc

      acc.count += 1
      acc.total += payment.amountPaid
      if (payment.giftAided) {
        acc.withGiftAid += 1
      }
      return acc
    },
    {
      count: 0,
      total: 0,
      withGiftAid: 0,
    }
  )
  return {
    count,
    total: (total / 100).toFixed(2),
    giftAidPercentage: calculateGiftAidPercentage(count, withGiftAid),
  }
}
