import React from 'react';
import footer from '../common/footer/index';
import Html from './html'

import './style.css'

export default ({ children, data }) =>
{
  const siteData = data.site.siteMetadata
  return <Html data={siteData}>
  <div style={{paddingBottom: 55}}>
    <div className="container">
      <div className="row">
        <div className="col s12 l10 offset-l2">
          <h2 className="bold-text">
            <span className="blue-text">Code</span>Gamers
          </h2>
          <h3>Games and programing passion in one site</h3>
        </div>
        <div className="
        col 
        s12 
        m10 offset-m1 
        l8 offset-l2
        ">
          {children()}
        </div>
      </div>
    </div>
    {footer({github: 'xuscrus', twitter: 'xuscrus'})}
  </div>
</Html>

}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`