import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { format, parseISO } from 'date-fns'

import Table from 'src/components/Table/Table'
import { NonprofitPayment } from 'src/services/useGetPayments'

type TableBodyProps = {
  payments: Array<NonprofitPayment>
}

function TableBody({ payments }: TableBodyProps) {
  return (
    <Table.tbody>
      {payments.map((payment) => (
        <Table.tr key={payment.id}>
          <Table.td>£{payment.amountPaid.toFixed(2)}</Table.td>
          <Table.td>
            {payment.giftAided ? (
              <CheckCircleIcon className="h-6 w-6 text-green-700" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-red-700" />
            )}
          </Table.td>
          <Table.td>{format(parseISO(payment.date), 'io MMMM yyyy')}</Table.td>
        </Table.tr>
      ))}
    </Table.tbody>
  )
}

type PaymentsTableProps = {
  payments: Array<NonprofitPayment>
}

export function PaymentsTable({ payments }: PaymentsTableProps) {
  return (
    <Table.table>
      <Table.thead>
        <Table.tr>
          <Table.th>Amount</Table.th>
          <Table.th>Gift Aid</Table.th>
          <Table.th>Date</Table.th>
        </Table.tr>
      </Table.thead>
      <TableBody payments={payments} />
    </Table.table>
  )
}
