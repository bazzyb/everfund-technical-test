import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const payments: QueryResolvers['payments'] = ({
  nonprofitId,
  limit,
  orderBy,
}) => {
  return db.payment.findMany({
    where: {
      nonprofitId: nonprofitId ?? undefined,
    },
    take: limit || undefined,
    orderBy: {
      [orderBy?.field ?? 'date']: orderBy?.direction ?? 'desc',
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
