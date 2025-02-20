import styles from './map.module.scss';
import {useRef} from "react";

export default function () {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.map}
      style={{height: '500px'}}
    >
    </div>
  );
}
