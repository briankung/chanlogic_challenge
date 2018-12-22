import React from 'react'
import { PROPERTIES } from './constants'

class InventoryItem extends React.Component {
  render() {
    const propertiesList = PROPERTIES.map(p => <li>{ p }: { this.props[p] }</li>)

    return (
      <ul className="inventory-item" style={{ marginBottom: "2em" }}>
        { propertiesList }
      </ul>
    )
  }
}

export default InventoryItem;
