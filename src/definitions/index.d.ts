import { Location } from "history"

interface EmptyProps {}

interface PageProps {
  data: {
    mdx: INode
    previous: INode
    next: INode
    allMdx: {
      edges: IEdge[]
    }
    site: ISite
  }
  location: Location
}

interface ISite {
  siteMetadata: {
    title: string
    description: string
    author: {
      name: string
      summary: string
    }
    social: {
      twitter: string
      linkedin: string
      github: string
    }
  }
}

interface IEdge {
  node: INode
}

interface INode {
  excerpt: string
  body: string
  fields: {
    slug: string
  }
  frontmatter: {
    date: string
    title: string
    tags?: string
    description: string
  }
}
