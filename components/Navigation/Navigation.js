/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import PropTypes from 'prop-types'
import './Navigation.scss'
import Link from '../Link'

function NavigationLink({ to, path, children }) {
  const isActive = to === path ? ' active' : ''
  return (
    <Link className={'Navigation-link' + isActive} to={to} role="menuitem">
      {children}
    </Link>
  )
}
NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

function Navigation(props) {
  const { path } = props
  return (
    <div>
      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <NavigationLink path={path} to="/about">
            About
          </NavigationLink>
        </li>
        <li className="Navigation-item">
          <NavigationLink path={path} to="/works/">
            Works
          </NavigationLink>
        </li>
        <li className="Navigation-item">
          <NavigationLink path={path} to="/blogs">
            Blogs
          </NavigationLink>
        </li>
        <li className="Navigation-item">
          <NavigationLink path={path} to="/art">
            Art
          </NavigationLink>
        </li>
      </ul>
      <div className="Navigation-icon-group">
        <a
          className="Navigation-link Navigation-icon"
          href="https://www.instagram.com/craftzdog/"
          title="Instagram"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="Navigation-link Navigation-icon"
          href="https://github.com/craftzdog"
          title="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="Navigation-link Navigation-icon"
          href="https://twitter.com/craftzdog"
          title="Twitter"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          className="Navigation-link Navigation-icon"
          href="https://www.youtube.com/c/devaslife"
          title="YouTube channel"
        >
          <i className="fab fa-youtube" />
        </a>
      </div>
    </div>
  )
}
Navigation.propTypes = {
  path: PropTypes.string
}

export default Navigation
