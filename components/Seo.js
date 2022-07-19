import React from 'react'
import Head from 'next/head'

export default function SEO({
  description = 'Discover new coins before they become popular: Find new coins! NewCoinsHunter is the best place to find cryptocoins. Discover and compare thousands of projects.',
  meta,
  title = 'NewCoinsHunter - Find coins before they are listed'
}) {
  const metaData = [
    {
      name: `description`,
      content: description
    },
    {
      property: `og:title`,
      content: title
    },
    {
      property: `og:description`,
      content: description
    },
    {
      property: `og:type`,
      content: `website`
    },
    {
      name: `twitter:card`,
      content: `summary`
    },
    {
      name: `twitter:creator`,
      content: 'NewCoinsHunter'
    },
    {
      name: `twitter:title`,
      content: title
    },
    {
      name: `twitter:description`,
      content: description
    }
  ].concat(meta)

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: []
}
