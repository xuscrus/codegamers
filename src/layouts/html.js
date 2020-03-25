import React from 'react';
import Helmet from 'react-helmet'
const favicon = require('../data/assets/favicon.png')

export default ({ data, children }) => 
<div className="site">
<Helmet>
  <title>{data.title}</title>
  <link rel="shortcut icon" type="image/png" href={favicon} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <description>{data.description}</description>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</Helmet>
{children}
</div>