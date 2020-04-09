/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from '../GoogleAnalytics'
import config from '../../config'

function Html({ title, description, image, body }) {
  const coverUrl = `${config.baseUrl}/cover.jpg`
  const imageUrl = image ? `${config.baseUrl}${image}` : coverUrl
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:title" content={title || config.title} />
        <meta
          name="twitter:description"
          content={description || config.description}
        />
        <meta name="twitter:image" content={imageUrl} />

        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:title" content={title || config.title} />
        <meta
          property="og:description"
          content={description || config.description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Merriweather:300,400,700|Lato:300,400"
        />
        <link
          rel="stylesheet"
          href="//fonts.googleapis.com/earlyaccess/notosansjapanese.css"
        />
        <script src={'/app.js?' + new Date().getTime()} />
      </head>
      <body>
        <div
          id="app"
          className="container"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  )
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
  image: PropTypes.string
}

export default Html
