/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss';
import React, { Component } from 'react';
// import { Grid, Col, Row } from 'react-bootstrap';

export default class extends Component {
  componentDidMount() {
    if (location.host === 'www.odoruinu.net') {
      location.href = 'https://www.craftz.dog/';
    }
  }

  render() {
    return (
      <div className="top-page">
        <div>
          <img className="top-image" src="/cover.jpg" width="100%" />
        </div>
        <div className="top-page--footer">
          The source code of this website is available&nbsp;
          <a href="https://github.com/odoruinu/odoruinu.net-pug" target="_blank">
            here on GitHub
          </a>.
        </div>
      </div>
    );
  }

}
