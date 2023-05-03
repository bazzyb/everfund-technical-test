// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Stats> = (args) => {
//   return <Stats {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Stats from './Stats'

export const generated = () => {
  return <Stats name="Donation Total" statistic="£20.50" />
}

export default {
  title: 'Components/Stats',
  component: Stats,
} as ComponentMeta<typeof Stats>
