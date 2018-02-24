/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Layout.scss'
import Navigation from '../Navigation'
import Link from '../Link'
import { Grid, Col, Row } from 'react-bootstrap'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Layout extends Component {
  render() {
    return (
      <Grid className="Layout">
        <Row>
          <Col sm={3} className="header-left-side">
            <Link to="/">
              <img src="/dog-icon.png" width="120px" />
            </Link>
            <h1 className="title">CRAFTZDOG</h1>
            <Navigation />
          </Col>
          <Col sm={9}>
            <ReactCSSTransitionGroup
              transitionName="page-transition"
              transitionEnterTimeout={900}
              transitionLeaveTimeout={300}
            >
              {[
                <div key={this.props.path} className="page-container">
                  {this.props.children}
                </div>
              ]}
            </ReactCSSTransitionGroup>
          </Col>
        </Row>
      </Grid>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  path: PropTypes.string.isRequired
}

export default Layout
