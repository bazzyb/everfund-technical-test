import { payments, payment } from './payments'
import type { StandardScenario } from './payments.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('payments', () => {
  scenario('returns all payments', async (scenario: StandardScenario) => {
    const result = await payments()

    expect(result.length).toEqual(Object.keys(scenario.payment).length)
  })

  scenario('returns a single payment', async (scenario: StandardScenario) => {
    const result = await payment({ id: scenario.payment.one.id })

    expect(result).toEqual(scenario.payment.one)
  })
})
