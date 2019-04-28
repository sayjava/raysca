import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default ({
  data: {
    allMarkdownRemark: { totalCount, edges },
  },
}) => {
  return (
    <Layout>
      <div>Raysca Dev Blog</div>
      <div>
        <h3>Total Posts - {totalCount}</h3>
        <ul>
          {edges.map(({ node }) => {
            return (
              <li key={node.id}>
                <a href={node.fields.slug}>
                  <h4>{node.frontmatter.title}</h4>
                  <h5>{node.frontmatter.date}</h5>
                </a>
                <p>{node.excerpt}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
