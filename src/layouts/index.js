import React from 'react';
import footer from '../common/footer/index';
import Html from './html'

import './style.css'

export default ({ children, data }) =>
{
  return <Html data={{}}>
    {children}
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