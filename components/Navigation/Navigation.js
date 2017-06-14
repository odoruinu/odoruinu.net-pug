/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react'
import './Navigation.scss'
import Link from '../Link'

function Navigation () {
  return (
    <div>
      <ul className='Navigation' role='menu'>
        <li className='Navigation-item'>
          <Link className='Navigation-link' to='/about'>About</Link>
        </li>
        <li className='Navigation-item'>
          <Link className='Navigation-link' to='/works/'>Works</Link>
        </li>
        <li className='Navigation-item'>
          <a className='Navigation-link' href='http://illust.odoruinu.net/'>Illustrations</a>
        </li>
        <li className='Navigation-item'>
          <a className='Navigation-link' href='https://500px.com/craftzdog'>Photos</a>
        </li>
        <li className='Navigation-item'>
          <a className='Navigation-link' href='https://blog.craftz.dog/'>Blog</a>
        </li>
      </ul>
      <div className='Navigation-icon-group'>
        <a className='Navigation-link Navigation-icon' href='https://www.instagram.com/craftzdog/'>
          <i className='fa fa-instagram' />
        </a>
        <a className='Navigation-link Navigation-icon' href='https://github.com/craftzdog'>
          <i className='fa fa-github' />
        </a>
        <a className='Navigation-link Navigation-icon' href='https://twitter.com/craftzdog'>
          <i className='fa fa-twitter' />
        </a>
      </div>
    </div>
  )
}

export default Navigation
