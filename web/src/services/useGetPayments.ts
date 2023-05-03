import { useQuery } from '@redwoodjs/web'

export type NonprofitPayment = {
  amountPaid: number
  date: string
  giftAided: boolean
  id: number
  nonprofitId: number
  status: string
}

export function useGetPayments(nonprofitId: number, limit?: number) {
  const { data, ...queryProps } = useQuery<{
    payments: Array<NonprofitPayment>
  }>(
    gql`
      query PaymentsQuery($nonprofitId: Int!, $limit: Int) {
        payments(nonprofitId: $nonprofitId, limit: $limit) {
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
      variables: { nonprofitId, limit },
    }
  )
  return {
    data: data?.payments || [],
    ...queryProps,
  }
}
