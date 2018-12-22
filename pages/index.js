import React from 'react'
import inventoryData from '../inventory_data.json'

export default class extends React.Component {
  render() {
    const inventoryList = inventoryData.map(
      (inventoryItem) => <li key="{{ inventoryItem['Amazon ASIN'] }}">{ inventoryItem["Color Name"] }</li>
    );

    return (
      <ol>
        { inventoryList }
      </ol>
    )
  }
}
