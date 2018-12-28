import InventoryItem from '../lib/inventory_item'

const InventoryRow = (props, key) => {
  let parentTiles = props.map(
    (item, key) => <div className="tile is-parent" key={key}>{ InventoryItem(item) }</div>
  );

  return (
    <div className="tile is-ancestor" key={key}>
      { parentTiles }
    </div>
  )
}

export default InventoryRow;
