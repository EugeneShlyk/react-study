import {useRef} from "react";
import styles from './my-component.module.scss'

export default function MyComponent({products}) {
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  function handleChange() {
    outputRef.current.textContent = inputRef.current.value;
  }

  return (
    <>
      <h2>Hello</h2>
      <input onChange={handleChange} ref={inputRef} type="text"/>
      <h1 ref={outputRef} className={styles['my-component__output']}></h1>
      {products && products.map(product => <span style={{ padding: '20px' }}>{product.name}</span>)}
    </>
  );
}

