import { useMemo } from 'react'

import { format, parseISO } from 'date-fns'

import { MetaTags } from '@redwoodjs/web'

import Stats from 'src/components/Stats/Stats'
import Table from 'src/components/Table/Table'
import { useNonProfitContext } from 'src/layouts/MainLayout/MainLayout.context'
import { useGetPayments } from 'src/services/useGetPayments'

import { buildPaymentSummary } from './utils'

const HomePage = () => {
  const { nonprofit } = useNonProfitContext()
  const { data: payments, loading } = useGetPayments(nonprofit.id, 20)
  const paymentSummary = useMemo(
    () => buildPaymentSummary(payments),
    [payments]
  )

  const homepageStats = [
    {
      name: 'Total Donations',
      statistic: paymentSummary.count.toString(),
    },
    {
      name: 'Total Donations Amount',
      statistic: `£${paymentSummary.total}`,
    },
    {
      name: 'Donations with Gift Aid (%)',
      statistic: `${paymentSummary.giftAidPercentage}%`,
    },
  ]

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="mx-auto mb-4 max-w-7xl pb-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Stats
        </h2>
      </div>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {homepageStats.map((item) => (
          <Stats key={item.name} loading={loading} {...item} />
        ))}
      </dl>

      <div className="relative my-4 pb-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>

      <div className="mx-auto mb-4 max-w-7xl pb-2">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Donations
        </h2>
      </div>

      <div className="relative h-96 overflow-y-auto rounded-xl border border-dashed border-gray-400 opacity-75">
        <Table.table>
          <Table.thead>
            <Table.tr>
              <Table.th>Amount</Table.th>
              <Table.th>Gift Aid</Table.th>
              <Table.th>Date</Table.th>
              <Table.th>Status</Table.th>
            </Table.tr>
          </Table.thead>
          <Table.tbody>
            {payments.map((payment) => (
              <Table.tr key={payment.id}>
                <Table.td>£{payment.amountPaid.toFixed(2)}</Table.td>
                <Table.td>{payment.giftAided ? 'Yes' : 'No'}</Table.td>
                <Table.td>
                  {format(parseISO(payment.date), 'io MMMM yyyy')}
                </Table.td>
                <Table.td>{payment.status}</Table.td>
              </Table.tr>
            ))}
          </Table.tbody>
        </Table.table>
      </div>
    </>
  )
}

export default HomePage
