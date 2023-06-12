'use client'
import { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/images/logo/sunflower-v4.jpg'
import { Dialog, Popover, Transition } from '@headlessui/react'

import { AMPLITUDE_API_KEY } from '@/utils/const'
import { userCookie } from '@/utils/cookie-manager'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { ChevronDownIcon } from '@heroicons/react/20/solid'

import * as amplitude from '@amplitude/analytics-browser'
import { track } from '@amplitude/analytics-browser'

const postpartumDoulas = [
  { name: 'Jen Laird', href: '/postpartum-doulas/jen-laird' },
]

export function Header({ birthDoulas }) {
  useEffect(() => {
    const user = userCookie()

    amplitude.init(AMPLITUDE_API_KEY, user, {
      defaultTracking: {
        pageViews: true,
        sessions: true,
        formInteractions: true,
        fileDownloads: true,
      },
    })
  }, [])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex -translate-x-10 lg:flex-1">
          <Link
            href="/"
            aria-label="Home"
            className="-m-1.5 flex w-[16rem] items-center p-1.5 leading-3 lg:w-[20rem]"
            onClick={() => {
              amplitude.track('Logo Click', { name: 'Seattle Birth Doulas' })
            }}
          >
            <div className="aspect-1 -translate-y-2 translate-x-6 scale-75 ">
              <Image
                src={LogoImage}
                alt="Logo"
                width={120}
                height={120}
                className="aspect-1"
              />
            </div>

            <div className="-mt-6 ml-4">
              <p className="translate-y-2 text-xl font-semibold tracking-tighter text-amber-700 sm:text-xl">
                Seattle
              </p>
              <p className="font-display text-2xl font-bold text-slate-700 sm:text-3xl">
                Birth&nbsp;Doulas
              </p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex -translate-x-5 -translate-y-4 items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="-mt-2 h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-4">
          <Link
            href="/birth-doulas"
            className="text-base font-semibold leading-6 text-slate-700 hover:text-slate-900"
          >
            Meet the Doulas
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-base font-semibold leading-6 text-slate-700 hover:text-slate-900">
              <span onClick={() => track('Birth Doula Dropdown Clicked')}>
                Birth Doulas
              </span>
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {birthDoulas.map(({ params }) => (
                  <a
                    key={params.name}
                    href={`/${params.slug}`}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                  >
                    {params.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            href="/postpartum-doula"
            className="text-base font-semibold leading-6 text-slate-700 hover:text-slate-900"
            onClick={() => track('Postpartum Doula Clicked')}
          >
            Postpartum Doulas
          </Link>

          <Link
            href="/services"
            className="text-base font-semibold leading-6 text-slate-700 hover:text-slate-900"
          >
            Doulas Services
          </Link>

          <Link
            href="/resources"
            className="text-base font-semibold leading-6 text-slate-700 hover:text-slate-900"
          >
            Resources
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-amber-700 hover:text-amber-800"
          >
            About Us
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 flex items-center gap-2 p-1.5">
              <span className="sr-only">Seattle Birth Doula</span>
              <Image
                className="h-12 w-auto"
                src={LogoImage}
                width={100}
                height={100}
                alt="Seattle Birth Doulas"
              />
              <span className="-mt-1">
                <p className="translate-y-2 text-xl font-semibold tracking-tighter text-amber-700 sm:text-xl">
                  Seattle
                </p>
                <p className="font-display text-2xl font-bold text-slate-700 sm:text-3xl">
                  Birth&nbsp;Doulas
                </p>
              </span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-6">
                <Link
                  href="/birth-doulas"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                >
                  Meet the Doulas
                </Link>
                <Link
                  href="/postpartum-doula"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                >
                  Postpartum Doulas
                </Link>

                <div className="-mx-3">
                  <Link
                    href="/birth-doulas"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Birth Doulas
                  </Link>

                  {birthDoulas.map(({ params }) => {
                    return (
                      <Link
                        key={params.id}
                        href={`/${params.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="ml-3 block rounded-lg py-2 pr-3 text-sm font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                      >
                        {params.name}
                      </Link>
                    )
                  })}
                </div>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                >
                  Doula Services
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                >
                  About us
                </Link>
                <Link
                  href="/resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-gray-50 hover:text-slate-900"
                >
                  Resources
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
