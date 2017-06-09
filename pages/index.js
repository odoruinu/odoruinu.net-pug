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
      <div>
        <img className="top-image" src="/cover.jpg" width="100%" />
      </div>
    );
  }

}
