import styles from './list.module.scss';

// function Item({product}) {
//   return (
//     <li className={styles.list__item}>
//       <span>{product.name}</span>
//       <span>{product.price}</span>
//     </li>
//   )
// }
//
// function List({children}) {
//   return (
//     <ul>
//       {children}
//     </ul>
//   )
// }
//
// export default function Box({products}) {
//   const sortedProducts = products.reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }
//     acc[product.category].push(product);
//     return acc;
//   }, {})
//
//   return (
//     <div>
//       {Object.keys(sortedProducts).map(category => (
//         <div key={category}>
//           <h2 className={styles.list__title}>{category}</h2>
//           <List>
//             {sortedProducts[category].map(product =>
//               <Item key={product.name} product={product}/>
//             )}
//           </List>
//         </div>
//       ))}
//     </div>
//   )
// }

function Item({product}) {
  return (
    <li className={styles.list__item}>
      <span>{product.name}</span>
      <span>{product.price}</span>
    </li>
  );
}

function List({children}) {
  return (
    <ul>{children}</ul>
  );
}

export default function Box({products}) {
  const sortedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(sortedProducts).map(category => (
        <div key={category}>
          <h2 className={styles.list__title}>{category}</h2>
          <List>
            {sortedProducts[category].map(product =>
              <Item key={product.name} product={product}/>
            )}
          </List>
        </div>
      ))}
    </div>
  );
}


