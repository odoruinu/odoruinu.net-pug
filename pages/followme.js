/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import './followme.scss'
import React, { Component } from 'react'

export default class ContactPage extends Component {
  static title = 'Contact to Takuya'
  static image = '/me.jpg'
  static description = 'Contact form'

  render() {
    return (
      <div className="content">
        <h2>Takuya Matsuyama</h2>
        <ul>
          <li>
            <i className="fab fa-youtube" />
            &nbsp; Channel :&nbsp;
            <a href="https://www.youtube.com/c/devaslife">devaslife</a>
          </li>
          <li>
            <i className="fab fa-twitter" />
            &nbsp; English :&nbsp;
            <a href="https://twitter.com/inkdrop_app">@inkdrop_app</a>
          </li>
          <li>
            <i className="fab fa-twitter" />
            &nbsp; Japanese :&nbsp;
            <a href="https://twitter.com/craftzdog">@craftzdog</a>
          </li>
          <li>
            <i className="fab fa-instagram" />
            &nbsp;:&nbsp;
            <a href="https://www.instagram.com/craftzdog">@craftzdog</a>
          </li>
          <li>
            <i className="fab fa-github" />
            &nbsp;:&nbsp;
            <a href="https://github.com/craftzdog">@craftzdog</a>
          </li>
          <li>
            <i className="fas fa-home" />
            &nbsp;:&nbsp;
            <a href="https://www.craftz.dog/">craftz.dog</a>
          </li>
        </ul>
      </div>
    )
  }
}
