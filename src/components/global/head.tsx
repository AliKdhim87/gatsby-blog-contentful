import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

interface Props {
  title: string
  lang?: string
  description?: string
  meta?: { name: string; content: string; property?: undefined }[]
}

const Head: React.FC<Props> = ({
  title,
  lang = "en",
  description,
  meta = [],
}: Props) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
          defaultImage
        }
      }
    }
  `)
  const metaImage = `${site.siteMetadata.siteUrl}${site.siteMetadata.defaultImage}`
  const metaDescription = description || site.siteMetadata.description
  const currentUrl = `${site.siteMetadata.siteUrl}${pathname}`
  const metaAuthor = site.siteMetadata.author
  return (
    <Helmet
      title={`${title} | ${site.siteMetadata.title}`}
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: currentUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:alt`,
          content: metaDescription,
        },
        {
          property: `og:locale`,
          content: lang,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
      link={[
        {
          rel: "canonical",
          href: currentUrl,
        },
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          email: "mailto:alikadhim87nl@gmail.com",
          image: metaImage,
          jobTitle: "Full-stack web developer",
          name: site.siteMetadata.title,
          telephone: "+31642544830",
          url: site.siteMetadata.siteUrl,
        })}
      </script>
    </Helmet>
  )
}

export default Head
