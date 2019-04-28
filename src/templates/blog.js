import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default props => {
  const post = props.data.markdownRemark
  const { title } = post.frontmatter

  return (
    <Layout>
      <div>
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
