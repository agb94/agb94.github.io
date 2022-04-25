/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
            instagram
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        width={100}
        height={100}
        quality={100}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          My name is <strong>{author.name}</strong>. {author?.summary || null}
          {` `}
          <br></br>
          Follow me on
          {` `}
          <a href={`https://instagram.com/${social?.instagram || ``}`}>
            Instagram! 
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
