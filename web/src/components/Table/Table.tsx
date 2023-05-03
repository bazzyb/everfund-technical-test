import { ReactElement, ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

const td = (props: {
  children?: ReactNode
  className?: string
}): ReactElement => {
  return (
    <td
      {...props}
      className={twMerge(
        'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
        props.className
      )}
    />
  )
}

const th = (props: {
  children?: ReactNode
  className?: string
}): ReactElement => {
  return (
    <th
      scope="col"
      {...props}
      className={twMerge(
        'sticky top-0 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900',
        props.className
      )}
    />
  )
}

const tbody = (props: {
  children: ReactNode
  className?: string
}): ReactElement => (
  <tbody
    {...props}
    className={twMerge('divide-y divide-gray-200', props.className)}
  />
)

const tr = (props: {
  children: ReactNode
  className?: string
}): ReactElement => {
  return (
    <tr
      {...props}
      className={twMerge(
        'border-b border-gray-200 last:border-0',
        props.className
      )}
    />
  )
}

const table = (props: {
  children: ReactNode
  className?: string
}): ReactElement => (
  <table
    {...props}
    className={twMerge('min-w-full divide-y divide-gray-300', props.className)}
  />
)

const thead = (props: {
  children: ReactNode
  className?: string
}): ReactElement => (
  <thead
    {...props}
    className={twMerge(
      'sticky top-0 bg-white [&_tr]:border-b [&_tr]:border-gray-400',
      props.className
    )}
  />
)

export default { td, tbody, tr, th, thead, table }
