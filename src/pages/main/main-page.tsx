import Box from "@components/study/box";
import {PRODUCTS} from "../../mock";
import MyComponent from "@components/my-component/my-component";

export default function MainPage() {
  return (
    <>
      {/*<Box products={PRODUCTS}/>*/}
      <MyComponent products={PRODUCTS}/>
    </>
  );

}
