/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import './about.scss'
import { Glyphicon } from 'react-bootstrap'
import FloatedSection from '../components/floated-section'

export default class AboutPage extends Component {
  static title = 'About';
  static image = '/me.jpg';
  static description = 'Takuya is a freelance and a full-stack developer based in Tokyo with passion for building digital services/stuffs he wants.'

  render () {
    return (
      <div className='about'>
        <h2>Takuya Matsuyama</h2>
        <p>Digital Craftsman ( Artist / Developer / Designer )</p>
        <p>
          <Glyphicon glyph='map-marker' /> Tokyo, Japan
        </p>
        <FloatedSection delay={200}>
          <img className='me' src='/me.jpg' width='100%' alt='My Work Style' />
        </FloatedSection>
        <FloatedSection delay={300}>
          <h3>Why craftzdog?:</h3>
          <p>
            It&apos;s an abbreviation for &apos;craftsman&apos; + &apos;dog&apos;. My avatar is dog icon for long time since I&apos;ve started publishing my works on the internet.
            I love craftsmanship, I&apos;d be a craftsman.
            That's why I decided to call myself &apos;craftsdog&apos; but this username was already taken by someone on Twitter.
            So I&apos;m using craftzdog as my internet identity now.
          </p>
          <p>
            My old handle name is &apos;noradaiko&apos;.
            I changed it because it&apos;s hard to remember especially for non-Japanese speakers.
          </p>
        </FloatedSection>
        <FloatedSection delay={400} className='bio'>
          <h3>Bio:</h3>
          <p>
            <em>1984</em>
            Born in Osaka, Japan.
            <br />
            大阪生まれ
          </p>
          <p>
            <em>2010</em>
            Completed the Master&apos;s Program in the Graduate School of Information Science at Nara Institute of Science and Technology
            <br />
            奈良先端科学技術大学院大学情報科学研究科修士課程修了
          </p>
          <p>
            <em>2010</em>
            Worked at Yahoo! Japan
            <br />
            ヤフー株式会社入社
          </p>
          <p>
            <em>2012 to present</em>
            Works as a freelance
            <br />
            フリーランス
          </p>
        </FloatedSection>
        <FloatedSection delay={500}>
          <h3>Work:</h3>
          <p>
            Takuya is a freelance and a full-stack developer based in Tokyo with passion for building digital services/stuffs he wants.
            He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code.
            When not online, he loves hanging out with his camera.
          </p>
          <p>
            デジタル領域を中心に、自身の欲しいと思ったサービスを制作。
            企画からデザイン・開発・運用まで全て一人で行う。
            iOSなどのスマホアプリからウェブアプリまで、技術やプラットフォームを限定せず幅広く活動。
            その傍ら、フリーランスとして様々なプロジェクトに参加。
            枠に囚われずオーダーメイドで柔軟にモノを作る「クラフトマンシップ」を得意とする。
          </p>
        </FloatedSection>
        <section>
          <h3>I ♥: </h3>
          <div>
            Art, Music, Drawing, Playing Drums, Photography, Leica, Machine Learning
          </div>
        </section>
        <section>
          <h3>Contact me:</h3>
          <ul>
            <li>
              <a href='https://twitter.com/craftzdog'>Twitter</a>
            </li>
            <li>
              <a href='https://github.com/craftzdog'>GitHub</a>
            </li>
            <li>
              <a href='mailto:hi@craftz.dog'>E-mail</a>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}
