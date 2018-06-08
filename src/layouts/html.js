import React from 'react';
import Helmet from 'react-helmet'
import footer from '../common/footer/index';

export default ({ data, children }) => 
<div className="site">
<Helmet>
  <title>{data.title}</title>
  <description>{data.description}</description>
  <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" />
  }
</Helmet>
{children}
</div>