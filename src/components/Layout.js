import React from "react"
import { StaticQuery, graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ children }) => (
  <div>
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div>
            <h4> The head layout - {data.site.siteMetadata.title} </h4>
            <div>{children}</div>
          </div>
        )
      }}
    />
  </div>
)
