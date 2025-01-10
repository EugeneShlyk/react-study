import {useRef} from "react";
import styles from './my-component.module.scss'

export default function MyComponent() {
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const output = document.querySelector('.my-component__output');

  function handleChange() {
    outputRef.current.textContent = inputRef.current.value;
  }

  return (
    <>
      <h2>Hello</h2>
      <input onChange={handleChange} ref={inputRef} type="text"/>
      <div ref={outputRef} className={styles['my-component__output']}></div>
    </>
  );
}

