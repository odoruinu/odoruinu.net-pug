/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './work-page-layout.scss'

export default class WorkPageLayout extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    eyecatch: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }
  render() {
    return (
      <div className="work-detail">
        <div>
          <img
            src={this.props.eyecatch}
            className="image-eyecatch"
            alt="cover image"
          />
        </div>
        {this.props.children}
      </div>
    )
  }
}
