import {useEffect, useState, useRef, Ref} from "react";

type cityProp = {
  title: string,
  lat: number,
  lng: number,
  zoom: number,
};

export default function useMap(mapRef: Ref<HTMLDivElement>, city: cityProp) {
  const [map, setMap] = useState(null);
  const isRenderedRef = useRef<HTMLDivElement>(false);

  useEffect(() => {

  }, [])

  return map;
}




