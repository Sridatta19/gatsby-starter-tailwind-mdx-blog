import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Linkedin, Medium, Twitter } from "./icons"
import { IconButton } from "./button"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            linkedin
            medium
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <>
      <div className="flex items-center space-x-3">
        <div className="relative">
          <StaticImage
            className="rounded-full overflow-hidden"
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/profile-pic.png"
            width={50}
            height={50}
            quality={95}
            alt="Profile picture"
          />
        </div>
        <div className="text-white">
          <h3 className="font-bold font-exo tracking-wide">{author.name}</h3>
          <div className="pt-2 flex justify-evenly">
            <IconButton href={social.medium}>
              <Medium className="w-5 h-5 fill-current" />
            </IconButton>
            <IconButton href={social.twitter}>
              <Twitter className="w-5 h-5 fill-current" />
            </IconButton>
            <IconButton href={social.linkedin}>
              <Linkedin className="w-5 h-5 fill-current" />
            </IconButton>
          </div>
        </div>
      </div>
      <p className="mt-9 font-yrsa text-lg text-gray-200">{author.summary}</p>
    </>
  )
}

export default Bio
