/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import './index.scss'
import WorkPageLayout from '../../components/work-page-layout'

export default class WorkPage extends Component {
  static title = 'mode.tokyo'
  static image = '/works/modetokyo_eyecatch.png'
  static description =
    'The mode magazine for understanding to personally enjoy Japan'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/modetokyo_eyecatch.png"
      >
        <Row>
          <Col sm={6}>
            <a href="/works/modetokyo_01.png" target="_blank">
              <img
                src="/works/modetokyo_01.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </a>
          </Col>
          <Col sm={6}>
            <a href="/works/modetokyo_02.png" target="_blank">
              <img
                src="/works/modetokyo_02.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </a>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <a href="/works/modetokyo_03.png" target="_blank">
              <img
                src="/works/modetokyo_03.jpg"
                className="image-screenshot"
                alt="image screenshot"
              />
            </a>
          </Col>
        </Row>

        <h3>mode.tokyo (2016)</h3>
        <div className="work-description">
          <div>日本のモードを世界に発信する雑誌</div>
          <div>
            The mode magazine for understanding to personally enjoy Japan
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="http://www.mode.tokyo/">ウェブサイト</a>
            </li>
          </ul>
        </div>
        <div className="work-long-description">
          <p>
            電子版としてiOSアプリを担当。日英仏対応。
            きゅんくんやラブリーサマーちゃんなどを誌面で取り上げている。
            本雑誌はISIDイノラボ様と角川アスキー総合研究所様の共同プロジェクトです。
          </p>
          <ul>
            <li>
              <a href="http://www.isid.co.jp/news/2015/0930.html">
                ISID、メディアコンテンツが外国人富裕層の訪日行動に与える影響を可視化する研究プロジェクトを始動（2015年09月30日）：プレスリリース|
                ISID
              </a>
            </li>
          </ul>
        </div>
      </WorkPageLayout>
    )
  }
}
