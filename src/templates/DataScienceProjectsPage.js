import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import SVGIcon from '../components/SVGIcon'

// Export Template for use in CMS preview
export const DataScienceProjectsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
}) => (
  <main className="DataScienceProjectsPageTemplate">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
        <SVGIcon src="/images/calendar.svg" />
      </div>
    </section>
  </main>
)

const DataScienceProjects = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <DataScienceProjectsPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default DataScienceProjects

export const pageQuery = graphql`
  query DataScienceProjectsPageTemplate($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
