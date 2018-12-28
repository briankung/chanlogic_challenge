import React from 'react'
import { PROPERTIES } from './constants'

import INVENTORY_DATA from '../inventory_data.json'
import InventoryRow from '../lib/inventory_row'

class InventoryBody extends React.Component {
  render() {
    let inventoryRows = [];
    let tempArray = [];

    // partition the data into every 3rd item for layout...purposes...
    // ^ me slowly realizing that I've jerry rigged a data structure for presentation purposes
    for (const itemIndex in INVENTORY_DATA) {
      if (tempArray.length != 0 && itemIndex % 3 == 0) {
        inventoryRows.push([...tempArray])
        tempArray = [];
      }

      tempArray.push(INVENTORY_DATA[itemIndex])
    }

    inventoryRows = inventoryRows.map(InventoryRow)

    return (
      <section className="section" style={{"padding-top": "5.5em"}}>
        <div className="container">
          { inventoryRows }
        </div>
      </section>
    )
  }
}

export default InventoryBody;
