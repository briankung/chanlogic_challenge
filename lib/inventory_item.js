 import { PROPERTIES } from './constants'

const InventoryItem = (props) => {
  const propertiesList = PROPERTIES.map(
    (p, index) => <p key={index}>{ p }: { props[p] }</p>
  )

  return (
    <article className="tile is-child box">
      { propertiesList }
    </article>
  )
}

export default InventoryItem;
