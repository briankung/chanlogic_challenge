import React from 'react'
import { connect } from 'react-redux'
import getFilter from './redux/selectors'

import { PROPERTIES } from './constants'

import INVENTORY_DATA from '../inventory_data.json'
import InventoryRow from '../lib/inventory_row'

class InventoryBody extends React.Component {
  filterInventoryData(filter) {
    if (filter != "") {
      return INVENTORY_DATA.filter(item => JSON.stringify(item).includes(filter));
    } else {
      return INVENTORY_DATA;
    };
  };

  render(props) {
    const filteredInventoryData = this.filterInventoryData(this.props.filter),
          inventoryRows = [];
    let tempArray = [];

    for (const itemIndex in filteredInventoryData) {
      const tempArrayNotEmpty = tempArray.length != 0,
            currentIndexDivisibleByThree = itemIndex % 3 == 0,
            isLastItem = parseInt(itemIndex) + 1 == filteredInventoryData.length;

      if (tempArrayNotEmpty && currentIndexDivisibleByThree) {
        inventoryRows.push([...tempArray]);
        tempArray = [];
      } else if (isLastItem) {
        tempArray.push(filteredInventoryData[itemIndex]);
        inventoryRows.push([...tempArray]);
        break;
      }

      tempArray.push(filteredInventoryData[itemIndex])
    }

    return (
      <section className="section" style={{ paddingTop: "5.5em" }}>
        <div className="container">
          { inventoryRows.map(InventoryRow) }
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return { filter: state.filter };
};

export default connect(mapStateToProps)(InventoryBody);
