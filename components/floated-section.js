/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './floated-section.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class FloatedSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    delay: PropTypes.number
  }

  static defaultProps = {
    delay: 300
  }

  render() {
    const { delay, children, ...props } = this.props
    return (
      <ReactCSSTransitionGroup
        transitionName="float-transition"
        transitionAppear={true}
        transitionAppearTimeout={700 + delay}
        transitionEnter={false}
        transitionLeave={false}
      >
        {[
          <section
            key="floated-section"
            className="floated-section"
            style={{ transitionDelay: delay + 'ms' }}
            {...props}
          >
            {children}
          </section>
        ]}
      </ReactCSSTransitionGroup>
    )
  }
}
