/* eslint-disable */
import React from "react"
import { Location } from "@reach/router"
import { MDXProvider } from "@mdx-js/react"
import components from "@/components/mdx"

const App = ({ element, location }) => {
  return <MDXProvider {...{ components }}>{element}</MDXProvider>
}

const wrapRootElement = ({ element }) => (
  <Location>{location => <App {...{ element }} {...location} />}</Location>
)

export { wrapRootElement }
