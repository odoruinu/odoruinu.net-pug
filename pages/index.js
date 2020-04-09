/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss'
import React, { Component } from 'react'
// import { Grid, Col, Row } from 'react-bootstrap';

export default class IndexPage extends Component {
  render() {
    return (
      <div className="top-page">
        <div>
          <img
            className="top-image"
            src="/cover2.jpg"
            width="100%"
            alt="cover image"
          />
        </div>
        <div className="top-page--footer">
          The source code of this website is available&nbsp;
          <a
            href="https://github.com/odoruinu/odoruinu.net-pug"
            target="_blank"
            rel="noopener noreferrer"
          >
            here on GitHub
          </a>
          .
        </div>
      </div>
    )
  }
}
