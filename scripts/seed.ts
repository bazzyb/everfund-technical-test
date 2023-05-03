import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

function generateRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default async () => {
  try {
    const nonprofits: Prisma.NonprofitCreateArgs['data'][] = [
      {
        id: 0,
        name: 'Planting Trees for Tomorrow',
        numEmployees: 10,
      },
      {
        id: 1,
        name: 'Paws for a Cause',
        numEmployees: 2,
      },
      {
        id: 2,
        name: 'Sports for All',
        numEmployees: 60,
      },
    ]

    const payments: Prisma.PaymentCreateArgs['data'][] = []

    for (let id = 0; id < 200; id++) {
      const status = generateRandomInt(1, 10)
      const nonprofitRandomNum = generateRandomInt(1, 10)

      payments.push({
        id,
        date: new Date(
          2022,
          generateRandomInt(0, 11),
          generateRandomInt(1, 28), // February-safe
          generateRandomInt(8, 22), // 8am - 10pm
          generateRandomInt(0, 59),
          generateRandomInt(0, 59)
        ),
        amountPaid: generateRandomInt(2, 100) * 50, // 50p increments from £1 to £50
        status:
          status === 1 // 10% failed
            ? 'failed'
            : status > 1 && status < 4 // 20% incomplete
            ? 'incomplete'
            : status === 4 // 10% pending
            ? 'pending'
            : 'succeeded', // 60% succeeded
        giftAided: generateRandomInt(1, 10) > 2, // 80% Gift Aid
        nonprofitId:
          nonprofitRandomNum === 1 // 10% Paws for a Cause
            ? 1
            : nonprofitRandomNum > 1 && nonprofitRandomNum < 5 // 30% Planting Trees for Tomorrow
            ? 0
            : 2, // 60% Sports for All
      })
    }

    await Promise.all(
      nonprofits.map(async (data: Prisma.NonprofitCreateArgs['data']) => {
        await db.nonprofit.create({ data })
      })
    )

    await Promise.all(
      payments.map(async (data: Prisma.PaymentCreateArgs['data']) => {
        await db.payment.create({ data })
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
