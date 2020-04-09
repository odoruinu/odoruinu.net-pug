import React, { Component } from 'react'
import './art.scss'
import FloatedSection from '../components/floated-section'

export default class ArtPage extends Component {
  static title = 'Art'

  render() {
    return (
      <div className="art-list">
        <FloatedSection delay={300}>
          <div>
            <a href="https://500px.com/craftzdog">
              <img
                src="/photos.jpg"
                className="image-eyecatch"
                alt="my photos"
              />
              <h3>
                Photography
                <i className="glyphicon glyphicon-new-window" />
              </h3>
            </a>
          </div>
        </FloatedSection>
        <FloatedSection delay={500}>
          <div>
            <a href="http://illust.odoruinu.net/">
              <img
                src="/cover.jpg"
                className="image-eyecatch"
                alt="my illustrations"
              />
              <h3>
                Illustrations
                <i className="glyphicon glyphicon-new-window" />
              </h3>
            </a>
          </div>
        </FloatedSection>
      </div>
    )
  }
}
