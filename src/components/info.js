/**
 * Info component
 *
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Info = () => {
   const data = useStaticQuery(graphql`
     query InfoQuery {
       site {
         siteMetadata {
           author {
             email
             github
             website
             cv
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
 
   return (
     <div className="info">
       {author?.email && (
          <p class="item">
            <a href={`mailto:${author.email}`}>[Email]</a>
          </p>
       )}

       {author?.github && (
          <p class="item">
            <a href={`https://github.com/${author.github}`}>[GitHub]</a>
          </p>
       )}

       {author?.website && (
          <p class="item">
            <a href={author.website}>[Research Profile]</a>
          </p>
       )}

       {author?.cv && (
          <p class="item">
            / <a href={author.cv}>[CV]</a>
          </p>
       )}
     </div>
   )
 }
 
 export default Info
 