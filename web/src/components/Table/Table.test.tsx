/* eslint-disable jsx-a11y/anchor-is-valid */

import { render } from '@redwoodjs/testing/web'

import Table from './Table'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

describe('Table', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Table.table className="min-w-full divide-y divide-gray-300">
          <Table.thead>
            <Table.tr>
              <Table.th>Name</Table.th>
              <Table.th>Title</Table.th>
              <Table.th>Email</Table.th>
              <Table.th>Role</Table.th>
              <Table.th>
                <span className="sr-only">Edit</span>
              </Table.th>
            </Table.tr>
          </Table.thead>
          <Table.tbody>
            {people.map((person) => (
              <Table.tr key={person.email}>
                <Table.td>{person.name}</Table.td>
                <Table.td>{person.title}</Table.td>
                <Table.td>{person.email}</Table.td>
                <Table.td>{person.role}</Table.td>
                <Table.td>
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </Table.td>
              </Table.tr>
            ))}
          </Table.tbody>
        </Table.table>
      )
    }).not.toThrow()
  })
})
