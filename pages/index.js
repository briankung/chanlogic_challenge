import React from 'react'
import Head from 'next/head'

import InventoryBody from '../lib/inventory_body'

export default class extends React.Component {
  render() {
    return (
      <div id="base">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css" />
        </Head>

        <InventoryBody />
      </div>
    );
  }
}
