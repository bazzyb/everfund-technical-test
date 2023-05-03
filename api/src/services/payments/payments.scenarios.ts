import type { Prisma, Payment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PaymentCreateArgs>({
  payment: {
    one: {
      data: {
        amountPaid: 5191345,
        status: 'String',
        giftAided: true,
        nonprofit: { create: { name: 'String', numEmployees: 7528463 } },
      },
    },
    two: {
      data: {
        amountPaid: 1932496,
        status: 'String',
        giftAided: true,
        nonprofit: { create: { name: 'String', numEmployees: 7502031 } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Payment, 'payment'>
