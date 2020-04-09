/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react'
import WorkPageLayout from '../../components/work-page-layout'
import './index.scss'

export default class WorkPage extends Component {
  static title = 'Inkdrop'
  static image = '/works/inkdrop_eyecatch.png'
  static description = 'The Notebook App Made for Markdown Lovers'

  render() {
    return (
      <WorkPageLayout
        title={WorkPage.title}
        eyecatch="/works/inkdrop_eyecatch.png"
      >
        <div>
          <img
            src="/works/inkdrop_02.jpg"
            className="image-screenshot"
            alt="image screenshot"
          />
        </div>

        <h3>Inkdrop (2016-)</h3>
        <div className="work-description">
          <div>Markdown好きのためのノートアプリ</div>
          <div>The Notebook App Made for Markdown Lovers</div>
        </div>
        <div>
          <div className="works-meta">
            <div className="works-meta-row">
              <div className="works-meta-title">Website</div>
              <div className="works-meta-body">
                <a href="https://inkdrop.app/">
                  inkdrop.app
                  <i className="glyphicon glyphicon-new-window" />
                </a>
              </div>
            </div>
            <div className="works-meta-row">
              <div className="works-meta-title">Platform</div>
              <div className="works-meta-body">
                Windows/macOS/Linux/iOS/Android
              </div>
            </div>
          </div>
        </div>
        <div className="work-long-description">
          <div className="works-meta">
            <div className="works-meta-row">
              <div className="works-meta-title">Blogpost</div>
              <div className="works-meta-body">
                <a href="https://blog.inkdrop.info/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                  How I’ve Attracted The First 500 Paid Users For My SaaS That
                  Costs $5/mo
                  <i className="glyphicon glyphicon-new-window" />
                </a>
              </div>
            </div>
            <div className="works-meta-row">
              <div className="works-meta-title">ブログ記事</div>
              <div className="works-meta-body">
                <a href="https://blog.craftz.dog/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-4111ddad9f50">
                  月5ドルの自作サービスで最初の500人を集めるまでにやったこと
                  <i className="glyphicon glyphicon-new-window" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </WorkPageLayout>
    )
  }
}
