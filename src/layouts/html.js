import React from 'react';
import Helmet from 'react-helmet'
const favicon = require('../data/assets/favicon.png')

export default ({ data, children }) => 
<div className="site">
<Helmet>
  <title>CodeGamers</title>
  <link rel="shortcut icon" type="image/png" href={favicon} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <description>coding passion</description>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
</Helmet>
{children}
</div>