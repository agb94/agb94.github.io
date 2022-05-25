/**
 * Info component
 *
 */

 import * as React from "react"
 import { useStaticQuery, graphql } from "gatsby"
//  import { StaticImage } from "gatsby-plugin-image"
 
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
             cvdate
           }
         }
       }
     }
   `)
 
   // Set these values by editing "siteMetadata" in gatsby-config.js
   const author = data.site.siteMetadata?.author
 
   return (
     <div className="info">
       <p className="item">
         <i className="fa fa-envelope"></i> Email: <a href={`mailto:${author.email}`}>{author.email}</a>
       </p>

       {author?.github && (
          <p className="item">
            <i className="fa fa-github"></i> GitHub: <a href={`https://github.com/${author.github}`}>{author.github}</a>
          </p>
       )}

       {author?.cv && (
          <p className="item">
          <i className="fa fa-file-pdf"></i> CV: <a href={author.cv}>Download</a> (Last updated on {author.cvdate})
          </p>
       )}


       {author?.website && (
          <p className="item">
            <i className="fa fa-house-user"></i> Research Website: <a href={author.website}>{author.website}</a>
         </p>
       )}


     </div>
   )
 }
 
 export default Info
 