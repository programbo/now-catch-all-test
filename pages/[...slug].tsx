import Head from 'next/head'
import React from 'react'

const Home = ({ slug }) => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">
        The slug is: <code>{slug}</code>!
      </h1>
      <p className="description">
        The rule in <code>now.json</code> rewrites <code>/</code> to <code>/home</code>.
      </p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

Home.getInitialProps = ({ query }) => {
  const slug = query.slug
  console.log({ slug })

  return {
    slug: Array.isArray(slug) ? slug.join('/') : slug,
  }
}

export default Home
