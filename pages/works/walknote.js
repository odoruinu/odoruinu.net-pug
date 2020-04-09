/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import WorkPageLayout from '../../components/work-page-layout'
import './index.scss'

export default class WorkPage extends Component {
  static title = 'walknote'
  static image = '/works/walknote_eyecatch.png'
  static description = 'Free music discovery player for iOS'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/walknote_eyecatch.png"
      >
        <Row>
          <Col sm={6}>
            <div>
              <img
                src="/works/walknote_01.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <img
                src="/works/walknote_02.png"
                className="image-screenshot"
                alt="image screenshot"
              />
            </div>
          </Col>
        </Row>
        <div>
          <img
            src="/works/walknote_05.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>
        <div>
          <img
            src="/works/walknote_03.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>
        <div>
          <img
            src="/works/walknote_04.png"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>

        <h3>walknote (2011-2016)</h3>
        <div className="work-description">
          <div>好みを理解して推薦する無料で聴き放題な音楽プレーヤー</div>
          <div>Free music discovery player for iOS</div>
        </div>
        <div className="work-long-description">
          <p>
            13万人超が使う音楽アプリ。
            あなたのiPhoneに入っている曲から好みを理解して、新しい曲を提示。
            まるでラジオのように推薦曲を聴いて楽しめる！
          </p>
          <p>
            ※本サービスは終了しました。 詳細は
            <a href="http://blog.odoruinu.net/2016/09/06/farewell-from-walknote/">
              こちら
            </a>
            。
          </p>
        </div>
        <div className="work-long-description">
          <p>
            walknote recommends new music you may like based on your music
            preferences by recognizing your favorite songs stored in your
            device. You can listen to recommended music just like a radio!
          </p>
          <p>
            This service has been closed. Thank you for over 130,000 registered
            users!
          </p>
        </div>
        <h3>掲載実績</h3>
        <div className="work-description">
          <ul>
            <li>
              <a
                href="http://renewal49.hateblo.jp/entry/20120710/1341925681"
                target="_blank"
                rel="noopener noreferrer"
              >
                強力すぎて紹介しそびれていた音楽好きのための神アプリ『walknote』
                - リニューアル式様
              </a>
            </li>
            <li>
              <a
                href="http://www.appbank.net/2011/10/15/iphone-application/309349.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                walknote:
                CD屋の試聴機が、自分向けになって手元に到着。そんな曲探しアプリ。無料。
                - appbank様
              </a>
            </li>
            <li>
              <a
                href="http://www.danshihack.com/2012/07/18/junp/iphoneapp-walknote.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                おすすめの音楽をレコメンド！ストリーミング再生してくれるiPhoneアプリ「walknote」が素敵。
                - 男子ハック様
              </a>
            </li>
            <li>
              <a
                href="http://www.tabroid.jp/app/multimedia/2013/05/app.walknote.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                「YOU、これ聴いちゃいなよ」自分好みの曲が勝手に集まる音楽プレーヤー『walknote』
                - タブロイド様
              </a>
            </li>
            <li>その他、多数</li>
          </ul>
        </div>
      </WorkPageLayout>
    )
  }
}
