import React from 'react'
import inventoryData from '../inventory_data.json'

export default class extends React.Component {
  listifyProperties(item, itemKey) {
    let itemPropertiesList = [];

    for (const property in item) {
      itemPropertiesList.push(
        <li>
          { property }: { item[property] }
        </li>
      )
    }

    return (
      <p>
        { itemPropertiesList }
      </p>
    )
  }

  render() {
    const inventoryList = inventoryData.map(this.listifyProperties);

    return (
      <ol key="list-parent">
        { inventoryList }
      </ol>
    )
  }
}
