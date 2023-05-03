/* eslint-disable jsx-a11y/anchor-is-valid */

// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Table> = (args) => {
//   return <Table {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Table from './Table'

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  // More people...
]

export const generated = () => {
  return (
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
}

export default {
  title: 'Components/Table',
  component: Table,
}
