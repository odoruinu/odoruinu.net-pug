/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../../components/Link';
import './index.scss';

export default class extends Component {
  static title = 'Inkdrop';
  static image = '/works/inkdrop_eyecatch.png';

  render() {
    return (
      <div className="work-detail">
        <h2>
          <a href="/works/" onClick={Link.handleClick}>Works</a>
          <span className="breadcrumb-chevron">&gt;</span>
          Inkdrop
        </h2>

        <div>
          <img src="/works/inkdrop_eyecatch.png" className="image-eyecatch" />
        </div>
        <div>
          <img src="/works/inkdrop_02.jpg" className="image-screenshot" />
        </div>

        <h3>Inkdrop (2016-)</h3>
        <div className="work-description">
          <div>
            Markdown好きのためのノートアプリ
          </div>
          <div>
            The Notebook App for Markdown Lovers
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="https://www.inkdrop.info/">
              Website
              </a>
            </li>
            <li>Platforms: Windows/macOS/Linux/iOS/Android</li>
          </ul>
        </div>
        <div className="work-long-description">
          <ul>
          <li>
            ブログ記事: <a href="http://blog.odoruinu.net/2016/10/04/inkdrop/">ハッカー向けノートアプリ「Inkdrop」をリリースしました</a>
          </li>
          </ul>
        </div>
      </div>
    );
  }

}


