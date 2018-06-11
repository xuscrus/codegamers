import React from 'react';
import Helmet from 'react-helmet'
import footer from '../common/footer/index';
const favicon = require('../data/assets/favicon.png')

export default ({ data, children }) => 
<div className="site">
<Helmet>
  <title>{data.title}</title>
  <link rel="shortcut icon" type="image/png" href={favicon} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <description>{data.description}</description>
  <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css" />
  }
</Helmet>
{children}
</div>