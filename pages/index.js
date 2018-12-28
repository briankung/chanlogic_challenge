import React from 'react'
import Head from 'next/head'

import InventoryBody from '../lib/inventory_body'
import Navbar from '../lib/navbar'

export default class extends React.Component {
  render() {
    return (
      <div id="base">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css" />
          <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
        </Head>

        <Navbar />

        <InventoryBody />
      </div>
    );
  }
}
