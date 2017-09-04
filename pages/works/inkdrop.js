/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import WorkPageLayout from '../../components/work-page-layout'
import './index.scss'

export default class WorkPage extends Component {
  static title = 'Inkdrop';
  static image = '/works/inkdrop_eyecatch.png';
  static description = 'The Notebook App Made for Markdown Lovers';

  render () {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch='/works/inkdrop_eyecatch.png'
      >
        <div>
          <img src='/works/inkdrop_02.jpg' className='image-screenshot' />
        </div>

        <h3>Inkdrop (2016-)</h3>
        <div className='work-description'>
          <div>
            Markdown好きのためのノートアプリ
          </div>
          <div>
            The Notebook App Made for Markdown Lovers
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href='https://www.inkdrop.info/'>
              Website
              </a>
            </li>
            <li>Platforms: Windows/macOS/Linux/iOS/Android</li>
          </ul>
        </div>
        <div className='work-long-description'>
          <ul>
            <li>
              Blog: <a href='https://hackernoon.com/markdown-note-taking-app-can-now-cover-half-of-rent-inkdrop-795de224ebf'>Markdown Note-taking App Can Now Cover Half of Rent</a>
            </li>
            <li>
              ブログ記事: <a href='https://blog.craftz.dog/inkdrop%E3%81%A7%E5%AE%B6%E8%B3%83%E3%81%AE%E5%8D%8A%E5%88%86%E3%81%8C%E8%B3%84%E3%81%88%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%97%E3%81%9F-3f30f4e1e479'>MarkdownノートアプリInkdropで家賃の半分が賄えるようになりました</a>
            </li>
          </ul>
        </div>
      </WorkPageLayout>
    )
  }
}
