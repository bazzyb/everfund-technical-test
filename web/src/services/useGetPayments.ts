import { useQuery } from '@redwoodjs/web'

export type NonprofitPayment = {
  amountPaid: number
  date: string
  giftAided: boolean
  id: number
  nonprofitId: number
  status: string
}

export function useGetPayments(
  nonprofitId: number,
  limit?: number,
  orderBy?: 'date' | 'amountPaid' | 'giftAided',
  direction?: 'asc' | 'desc'
) {
  const { data, ...queryProps } = useQuery<{
    payments: Array<NonprofitPayment>
  }>(
    gql`
      query PaymentsQuery(
        $nonprofitId: Int!
        $limit: Int
        $orderBy: OrderByField!
        $direction: OrderDirection!
      ) {
        payments(
          nonprofitId: $nonprofitId
          limit: $limit
          orderBy: $orderBy
          orderDirection: $direction
        ) {
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
      variables: { nonprofitId, limit, orderBy, direction },
    }
  )
  return {
    data: data?.payments || [],
    ...queryProps,
  }
}
