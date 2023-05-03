import { useQuery } from '@redwoodjs/web'

export type NonprofitPayment = {
  amountPaid: number
  date: string
  giftAided: boolean
  id: number
  nonprofitId: number
  status: string
}

export function useGetPayments(nonprofitId: number) {
  const { data, ...queryProps } = useQuery<{
    payments: Array<NonprofitPayment>
  }>(
    gql`
      query PaymentsQuery($nonprofitId: Int!) {
        payments(nonprofitId: $nonprofitId) {
          id
          date
          amountPaid
          status
          giftAided
          nonprofitId
        }
      }
    `,
    {
      variables: { nonprofitId },
    }
  )
  return {
    data: data?.payments || [],
    ...queryProps,
  }
}
