import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const payments: QueryResolvers['payments'] = ({ nonprofitId }) => {
  return db.payment.findMany({
    where: { nonprofitId: nonprofitId ?? undefined },
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
