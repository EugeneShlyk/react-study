import List from '@components/list';
import Map from "@components/map";
import {POINTS} from "../../mock/points.tsx";
import {CITY} from "../../mock/city.tsx";

export default function MainPage() {
  return (
    <>
      <List points={POINTS}></List>
      <Map city={CITY}></Map>
    </>
  );

}
