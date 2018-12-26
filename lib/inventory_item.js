import React from 'react'
import { PROPERTIES } from './constants'

const InventoryItem = (props) => {
  const propertiesList = PROPERTIES.map(p => <li>{ p }: { props[p] }</li>)

  return (
    <ul className="inventory-item" style={{ marginBottom: "2em" }}>
      { propertiesList }
    </ul>
  )
}

export default InventoryItem;
