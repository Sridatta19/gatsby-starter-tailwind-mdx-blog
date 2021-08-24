import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import { HomeIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { EmptyProps } from "@/definitions"

const resources = ["Dashboard", "Posts", "Projects", "About"]

const Header: React.FC<EmptyProps> = () => {
  return (
    <Popover className="sticky top-0 z-10 bg-skin-header backdrop-blur-md backdrop-saturate-150 bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="rounded-md text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
            >
              <span className="sr-only">Home</span>
              <HomeIcon className="h-8 w-auto" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-skin-header rounded-md p-2 inline-flex items-center justify-center text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-8">
            {resources.map(item => (
              <Link
                to="/"
                key={item}
                className="whitespace-nowrap text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-skin-focus"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-skin-header ring-opacity-5 bg-skin-header text-skin-header-fg border divide-y-2 divide-skin-header-muted">
            <div className="pt-5 pb-6 px-5">
              <div className="z-50 flex items-center justify-between">
                <Link
                  to="/"
                  className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                >
                  <span className="sr-only">Home</span>
                  <HomeIcon className="h-8 w-auto" />
                </Link>
                <div className="-mr-2">
                  <Popover.Button className="bg-skin-header rounded-md p-2 inline-flex items-center justify-center text-skin-header-fg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map(item => (
                  <Link
                    to="/"
                    key={item}
                    className="text-lg font-medium text-skin-header-fg rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-skin-focus"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
