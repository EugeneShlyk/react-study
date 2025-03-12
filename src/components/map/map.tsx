import styles from './map.module.scss';
import {useRef} from "react";

type CityProp = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

interface MapProps {
  city: CityProp; // Определяем, что city - это объект типа CityProp
}


export default function ({city}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={styles.map}
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}
