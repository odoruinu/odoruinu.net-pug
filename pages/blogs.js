import React, { Component } from 'react'
import Link from '../components/Link'
import { Col, Row } from 'react-bootstrap'
import './blogs.scss'
import FloatedSection from '../components/floated-section'

export default class WorkPage extends Component {
  static title = 'Blogs'

  render() {
    return (
      <div className="blogs-list">
        <FloatedSection delay={300}>
          <Row>
            <Col sm={6}>
              <a href="https://blog.craftz.dog/">
                <img
                  src="/blogs/mainblog_eyecatch.png"
                  className="image-eyecatch"
                />
                <h3>週休7日で働きたい</h3>
              </a>
              <div className="work-description">
                <div>
                  フリーランスしつつ自作サービス開発しながら食っていきたいブログ
                </div>
                <div>My main blog in Japanese</div>
              </div>
            </Col>
            <Col sm={6}>
              <a href="https://blog.inkdrop.info/">
                <img
                  src="/blogs/workaslife_eyecatch.png"
                  className="image-eyecatch"
                />
                <h3>Dev as Life</h3>
              </a>
              <div className="work-description">
                <div>
                  I’d like to quit my freelance career with my solo dev product.
                  Here to share my experiences of this journey with you.
                </div>
                <div>英語のメインブログ</div>
              </div>
            </Col>
          </Row>
        </FloatedSection>
        <FloatedSection delay={400}>
          <Row>
            <Col sm={6}>
              <a href="http://craftzdog.hateblo.jp/">
                <img
                  src="/blogs/subblog_eyecatch.png"
                  className="image-eyecatch"
                />
                <h3>丁寧に手を抜く</h3>
              </a>
              <div className="work-description">
                <div>ライフログ的な</div>
                <div>My life logs in Japanese</div>
              </div>
            </Col>
          </Row>
        </FloatedSection>
      </div>
    )
  }
}
