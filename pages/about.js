/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import './about.scss';
import { Glyphicon } from 'react-bootstrap';

export default class extends Component {
  static title = 'About';

  render() {
    return (
      <div className="about">
        <h2>Takuya Matsuyama</h2>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        <p>
          <Glyphicon glyph='map-marker' /> Tokyo, Japan
        </p>
        <div>
          <img className="top-image" src="https://farm6.staticflickr.com/5688/22863546315_12dd51f402_h.jpg" width="100%" alt="L1011534" />
        </div>
        <div className="section">
          <strong>Bio:</strong>
          <div>
            1984 大阪生まれ
            / Born in Osaka, Japan.
          </div>
          <div>
            2010 奈良先端科学技術大学院大学情報科学研究科修士課程修了
            / Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology
          </div>
          <div>
            2010 ヤフー株式会社入社 / Worked at Yahoo! Japan
          </div>
          <div>
            2012 to present フリーランス / Freelance
          </div>
        </div>
        <div className="section">
          <strong>Work:</strong>
          <div>
            デジタル領域を中心に、自身の欲しいと思ったサービスを制作。
            企画からデザイン・開発・運用まで全て一人で行う。
            iOSなどのスマホアプリからウェブアプリまで、技術やプラットフォームを限定せず幅広く活動。
            その傍ら、フリーランスとして様々なプロジェクトに参加。
            枠に囚われずオーダーメイドで柔軟にモノを作る「クラフトマンシップ」を得意とする。
          </div>
          <div>
            Takuya is a freelance and a full-stack developer based in Tokyo with passion for building digital services/stuffs he wants.
            He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.
            When not online, he loves hanging out with his camera.
          </div>
        </div>
        <div className="section">
          <strong>I ♥: </strong>
          <div>
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning
          </div>
        </div>
        <div className="section">
          <strong>Contact me: </strong>
          <ul>
            <li>
              <a href="https://twitter.com/craftzdog">Twitter @craftzdog</a>
            </li>
            <li>
              <a href="https://github.com/craftzdog">GitHub</a>
            </li>
            <li>
              <a href="mailto:nora@odoruinu.net">E-mail</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}
