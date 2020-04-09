/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import './index.scss'
import WorkPageLayout from '../../components/work-page-layout'

export default class WorkPage extends Component {
  static title = 'STYLY'
  static image = '/works/styly_eyecatch.png'
  static description = 'VR Creative tools for fashion brand'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/styly_eyecatch.png"
      >
        <div>
          <img
            src="/works/styly_01.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>

        <div>
          <img
            src="/works/styly_02.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>

        <div>
          <img
            src="/works/styly_03.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>

        <h3>STYLY (2017, Psychic VR Lab)</h3>
        <div className="work-description">
          <div>ファッションブランドのためのVRツール</div>
          <div>VR Creative tools for fashion brand</div>
        </div>
        <div>
          <ul>
            <li>
              <a href="http://suite.styly.cc/">Website</a>
            </li>
          </ul>
        </div>
        <div className="work-long-description">
          <p>主にユーザ認証・アセット選択などのUIと、バックエンドを担当。</p>
          <p>
            This is a VR tool for building virtual space towards extending
            fashion brand&apos;s expression ability of their concept. I
            developed its web UIs and backend.
          </p>
        </div>
      </WorkPageLayout>
    )
  }
}
