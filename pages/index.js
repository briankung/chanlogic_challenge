import React from 'react'
import Head from 'next/head'

import INVENTORY_DATA from '../inventory_data.json'
import InventoryItem from '../lib/inventory_item'

export default class extends React.Component {
  render() {
    const inventoryList = INVENTORY_DATA.map(
      item => <InventoryItem { ...item }></InventoryItem>
    );

    return (
      <ol key="list-parent">
        { inventoryList }
      </ol>
    );
  }
}
