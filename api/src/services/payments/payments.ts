import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const payments: QueryResolvers['payments'] = ({
  nonprofitId,
  limit,
  orderBy,
  orderDirection,
}) => {
  console.log('payments', nonprofitId, limit, orderBy, orderDirection)
  return db.payment.findMany({
    where: {
      nonprofitId,
    },
    take: limit || undefined,
    orderBy: {
      [orderBy ?? 'date']: orderDirection ?? 'desc',
    },
  })
}

export const payment: QueryResolvers['payment'] = ({ id }) => {
  return db.payment.findUnique({
    where: { id },
    include: {
      nonprofit: true,
    },
  })
}
