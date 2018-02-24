/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import './index.scss'
import WorkPageLayout from '../../components/work-page-layout'

export default class WorkPage extends Component {
  static title = 'The Four Painters'
  static image = '/works/the-four-painters_eyecatch.png'
  static description = 'A Video Work Created with Deep Learning'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/the-four-painters_eyecatch.jpg"
      >
        <div>
          <iframe
            src="https://player.vimeo.com/video/146373709"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h3>the four painters (2015)</h3>
        <div className="work-description">
          <div>
            実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した映像作品
          </div>
          <div>The four painters: A Video Work Created with Deep Learning</div>
          <ul>
            <li>
              <a
                href="http://blog.odoruinu.net/2015/12/19/created-movie-with-deep-learning/"
                target="_blank"
                rel="noopener noreferrer"
              >
                解説記事
              </a>
            </li>
            <li>
              <a
                href="http://blog.odoruinu.net/2015/12/23/the-four-painters-a-video-work-created-with-deep-learning/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How it&apos;s created
              </a>
            </li>
          </ul>
        </div>
        <h3>掲載実績</h3>
        <div className="work-description">
          <ul>
            <li>
              <a
                href="http://gigazine.net/news/20151224-deep-learning-four-painters/"
                target="_blank"
                rel="noopener noreferrer"
              >
                実写映像を人工知能「ディープラーニング」でゴッホや葛飾北斎っぽく変換した「the
                four painters」 - Gigazine様
              </a>
            </li>
            <li>
              <a
                href="https://news.ycombinator.com/item?id=10782289"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Four Painters: A Video Work Created with Deep Learning -
                Hacker News
              </a>
            </li>
          </ul>
        </div>
      </WorkPageLayout>
    )
  }
}
