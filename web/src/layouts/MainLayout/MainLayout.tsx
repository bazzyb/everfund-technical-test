import { Fragment } from 'react'

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Head } from '@redwoodjs/web'

import { NonProfitProvider } from './MainLayout.context'
import NonProfitDropdown from './NonProfitDropdown'

const user = {
  name: 'Ben Evelant',
  email: 'ben@everfund.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Donations', href: '#', current: true },
  { name: 'Supporters', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <html className="h-full" lang="en" />
        <body className="h-full" />
      </Head>
      <NonProfitProvider>
        <div className="min-h-full">
          <Disclosure as="nav" className="border-b border-gray-200 bg-white">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 justify-between">
                    <div className="flex">
                      <div className="flex flex-shrink-0 items-center">
                        <svg
                          viewBox="0 0 750 641.62"
                          aria-labelledby="Everfund Logo"
                          className=" h-8 w-auto align-baseline text-ever-500"
                        >
                          <title>Everfund Logo</title>
                          <path
                            d="M375.92 641.62c-16.72 0-34.73-8.94-56.69-28.12A308.32 308.32 0 01297 591.86C165.19 467.77 84.29 380 42.45 315.74 3.13 255.34 0 219.91 0 179.88c0-40.54 19.79-85.67 52.94-120.74C88.44 21.6 135 0 180.55 0h.14C317 0 400.82 158.38 404.33 165.13a355 355 0 0049.11 68.15c37.76 40.83 76.41 61.53 114.87 61.53h1.07a116.19 116.19 0 0081.34-33.89 113 113 0 0033.5-80.62A114.68 114.68 0 00569.7 65.78c-30.21 0-65.93 5.58-101.93 46.84a32.89 32.89 0 11-49.57-43.25C472.39 7.21 530.58 0 569.65 0h.06C669.12 0 750 80.9 750 180.29a178.41 178.41 0 01-52.85 127.23A181.65 181.65 0 01570 360.58h-1.7c-134.93.02-218.07-156.87-222.3-165.1a355.8 355.8 0 00-49.09-67.73c-26.24-28.27-67.71-62-116.19-62h-.09c-27.61 0-56.71 14.08-79.85 38.56-21.57 22.81-35 51.75-35 75.54 0 27.43 0 51.13 31.8 100C136 338.94 216.31 425.6 343 544.78c.66.62 1.29 1.26 1.89 1.93 8.61 9.51 20 19.73 27.85 25.41 11.1-9.07 32.4-28.28 67.68-63.51 32.82-32.76 69.88-71.6 90.12-94.44a32.89 32.89 0 0149.23 43.64C560 480.05 519 523.35 478.89 563.08c-21.12 20.89-38.84 37.67-52.69 49.85-25.29 22.25-36.57 28.69-50.28 28.69z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <NonProfitDropdown />
                      </div>

                      <div className="hidden sm:-my-px sm:ml-10 sm:flex sm:space-x-8">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'border-ever-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                      <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ever-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ever-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ever-500 focus:ring-offset-2">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'border-ever-500 bg-ever-50 text-ever-700'
                            : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                          'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pb-3 pt-4">
                    <div className="flex items-center px-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-ever-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="py-10">
            <main>
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </NonProfitProvider>
    </>
  )
}

export default MainLayout
