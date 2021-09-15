import * as React from "react"
import { Link, graphql } from "gatsby"

import { Bio, Seo } from "@/components/common"
import Layout from "@/components/Layout"
import { INode, PageProps } from "@/definitions"

const BlogIndex: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.edges

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol className="divide-y divide-skin-fg-muted max-w-2xl">
        {posts.map(({ node }: { node: INode }, index: number) => {
          const title = node.frontmatter.title || node.fields.slug
          const classes = index === 0 ? "pb-12" : "py-12"
          return (
            <li key={node.fields.slug} className={classes}>
              <article itemScope itemType="http://schema.org/Article">
                <header>
                  <small className="font-yrsa text-skin-fg-muted text-lg">
                    {node.frontmatter.date}
                  </small>
                  <h2 className="text-2xl font-exo font-black text-skin-fg mt-3">
                    <Link
                      to={node.fields.slug}
                      itemProp="url"
                      className="rounded-md focus:outline-none focus:ring-4 focus:ring-skin-focus"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt || node.frontmatter.description,
                  }}
                  itemProp="description"
                  className="text-lg font-yrsa text-skin-fg mt-3"
                />
                <section className="font-yrsa text-skin-fg-muted uppercase md:text-sm space-x-2 mt-3">
                  {(node.frontmatter.tags || "")
                    .split(",")
                    .map((s: string) => s.trim())
                    .map((s: string) => (
                      <span key={s}>{`#${s}`}</span>
                    ))}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
