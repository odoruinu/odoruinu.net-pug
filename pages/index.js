/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './index.scss';
import React, { Component } from 'react';
// import { Grid, Col, Row } from 'react-bootstrap';

export default class extends Component {

  render() {
    return (
      <div>
        <img className="top-image" src="/cover.jpg" width="100%" />
      </div>
    );
  }

}
