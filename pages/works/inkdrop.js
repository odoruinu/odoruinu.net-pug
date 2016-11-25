/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Link from '../../components/Link';
import { Col, Row } from 'react-bootstrap';
import './index.scss';

export default class extends Component {
  static title = 'Inkdrop';

  render() {
    return (
      <div className="work-detail">
        <h2>
        <a href="/works/" onClick={Link.handleClick}>Works</a>
        <span className="breadcrumb-chevron">&gt;</span>
        Inkdrop
        </h2>
        <Row>
          <Col sm={6}>
            <img src="/works/inkdrop_eyecatch.png" className="image-eyecatch" />
          </Col>
          <Col sm={6}>
            <h3>Inkdrop (2016-)</h3>
            <div className="work-description">
              <div>
                Markdown愛好者のためのノートアプリ
              </div>
              <div>
                The Notebook App for Markdown Lovers
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <a href="https://www.inkdrop.info/">
                  公式サイト
                  </a>
                </li>
                <li>対応OS: Windows/macOS/Linux</li>
              </ul>
            </div>
            <div className="work-long-description">
              <ul>
              <li>
                ブログ記事: <a href='http://blog.odoruinu.net/2016/10/04/inkdrop/'>ハッカー向けノートアプリ「Inkdrop」をリリースしました</a>
              </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h4>スクリーンショット</h4>
            <a href="/works/inkdrop_01.png" target="_blank">
              <img src="/works/inkdrop_01.png" className="image-screenshot" />
            </a>
          </Col>
        </Row>
      </div>
    );
  }

}


