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
  static title = '麺利き'
  static image = '/works/menkiki_eyecatch.png'
  static description =
    'The app which can show ramen shops based on a photo of ramen you want to eat'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/menkiki_eyecatch.png"
      >
        <Row>
          <Col sm={6}>
            <div>
              <img
                src="/works/menkiki_01.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <img
                src="/works/menkiki_02.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </div>
          </Col>
        </Row>

        <h3>麺利き (Ramelier) (2015)</h3>
        <div className="work-description">
          <div>らーめん写真に基づいてお店を提示する、らーめん屋推薦アプリ</div>
          <div>
            The app which can show ramen shops based on picture of ramens you
            want to eat
          </div>
          <div>
            <a
              className="link-appstore"
              href="https://itunes.apple.com/app/麺利き/id1035645520?mt=8"
            >
              <img
                src="/works/appstore.png"
                className="image-appstore"
                alt="appstore"
              />
            </a>
          </div>
        </div>
        <div className="work-long-description">
          <p>
            Ramelier suggests ramen(Chinese noodle) shops based on a photo of
            ramen you want to eat. You don&apos;t need to know Japanese keywords
            to search shops, just choose a picture of it and the app will find
            appropriate shops for you. It supports 900+ famous ramen shops in
            Japan!
          </p>
          <p>
            So you can check a shop info as soon as you found a good ramen shop
            in a food magazine.
          </p>
          <p>Let&apos;s go out and eat delicious ramen!</p>
          <p>
            <ul>
              <li>Ramen shop recommendation based on photo</li>
              <li>Show shops near your current location</li>
              <li>Open in Tabelog/Foursquare</li>
            </ul>
          </p>
          <h4>写真で「こんな感じ！」が伝えられる新しい探し方</h4>
          <p>
            食べておいしかったらーめん、ありますよね。
            その写真をアプリに入力してください。
            すると、アプリが似た雰囲気のらーめんを出すラーメン屋を探します。
          </p>
          <h4>開発には30万枚のらーめん画像を使用</h4>
          <p>
            開発には、最近何かと話題のディープラーニングという機械学習アルゴリズムの一つを使用しました。
            推薦アルゴリズムのために、30万枚のらーめん画像を集めて学習させました。
            つまり、このアプリは「らーめんとは何か」を理解しているのです！（どーん）
          </p>
        </div>
        <div>
          <a
            href="http://sssslide.com/speakerdeck.com/noradaiko/caffedeoshou-qing-ben-ge-deipuraninguiosapuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            技術的な解説
          </a>
        </div>
      </WorkPageLayout>
    )
  }
}
