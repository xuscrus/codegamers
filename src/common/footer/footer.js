import React from 'react';

import twitterLogo from './asset/twitter.png'
import githubLogo from './asset/github.png'

const link = ({href, logo, title}) =>
<a 
    href={href}
    target="_blank"
    title={title}
  >
  <img src={logo} style={{verticalAlign: 'middle'}}/>
</a>


const style = { 
  position: 'fixed',
  bottom: 0,
  borderTop: '1px solid #bdbdbd'
}

export default ({ github, twitter }) => (
<nav className="grey lighten-2 " style={style}>
  <div className="nav-wrapper center">
    <ul className="right">
      <li>
        {link({
          href: `//twitter.com/${twitter}`, 
          logo: twitterLogo,
          title: 'twitter'})}
      </li>
      <li>
        {link({
            href: `//github.com/${github}`, 
            logo: githubLogo,
            title: 'github'})}
      </li>
    </ul>
    <ul className="grey-text" style={{display: 'inline-block'}}>
      <li>
        <span>CodeGamers {(new Date()).getFullYear()}</span>
      </li>
    </ul>
  </div>
</nav>
)