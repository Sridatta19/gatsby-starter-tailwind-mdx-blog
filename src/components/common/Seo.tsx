/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import FontUrl1 from "../../fonts/exo-v12-latin-900.woff2"
import FontUrl2 from "../../fonts/yrsa-v7-latin-regular.woff2"
import { ISite } from "@/definitions"
import { getTheme } from "@/utils/fns"

type MetaProps = JSX.IntrinsicElements["meta"]

const Seo: React.FC<SEOProps> = ({ description, lang, meta, title }) => {
  const { site }: { site: ISite } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const metaProps: MetaProps[] = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata?.social?.twitter || ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  const className = getTheme()

  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: className,
        ...(className === "dark" && { class: className }),
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaProps.concat(meta || [])}
    >
      <link
        rel="preload"
        as="font"
        href={FontUrl1}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={FontUrl2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
  )
}

interface SEOProps {
  description?: string
  lang?: string
  title: string
  meta?: MetaProps[]
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default Seo
