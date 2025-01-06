import styles from './list.module.scss';
import {PRODUCTS} from "../../mock";

function Item({name, price}) {
  return (
    <li>
      <span>{name}</span>
      <b>{price}</b>
    </li>
  )
}

export default function List({category}) {
  const fruits = PRODUCTS.filter((product, index) => product.category === 'Fruits')

  return (
    <>
      <h2>{category}</h2>
      <ul className={styles.list}>
        {fruits.map((fruit, index) => (
            <Item name={fruit.name} price={fruit.price}/>
          )
        )}
      </ul>
    </>
  )
}



