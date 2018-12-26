import React from 'react'
import { PROPERTIES } from './constants'

import INVENTORY_DATA from '../inventory_data.json'
import InventoryItem from '../lib/inventory_item'

class InventoryBody extends React.Component {
  render() {
    const inventoryList = INVENTORY_DATA.map(InventoryItem);

    return (
      <ol>{ inventoryList }</ol>
    )
  }
}

export default InventoryBody;
