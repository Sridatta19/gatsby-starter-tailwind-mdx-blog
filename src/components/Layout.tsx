import React, { ReactNode } from "react"
import { Location } from "history"

import { Header, Bio, ThemeSwitch } from "./common"

interface LayoutProps {
  location: Location
  title: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="w-full md:w-1/3 relative">
        <div className="md:h-full p-8 flex flex-col justify-center bg-skin-base transition-colors">
          <Bio />
        </div>
      </div>
    )
  } else {
    header = <Header />
  }

  return (
    <div
      className={`relative antialiased flex flex-col ${
        isRootPath ? "md:h-screen md:flex-row overflow-hidden" : ""
      } selection:bg-yellow-200 selection:text-black`}
    >
      <div
        className={`${isRootPath ? "" : "hidden"} absolute top-0 right-0 m-5`}
      >
        <ThemeSwitch />
      </div>
      {header}
      <main className="flex-1 bg-gradient-to-br from-skin-primary to-skin-secondary transition-colors px-8 lg:px-24 py-8 md:py-16 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default Layout
