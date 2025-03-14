// import {useEffect, useState, useRef} from "react";
//
// export default function DogImages(props) {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breed/labrador/images/random/6")
//       .then(res => res.json())
//       .then(data => setData(data))
//   }, []);
//
//   console.log(data)
//
//   if (!data) {
//     return <div>Loading...</div>
//   }
//
//   return (
//     <div>
//       {data.message.map((item, index) => (
//         <img src={item} alt="dog" key={index} />
//       ))}
//     </div>
//   )
//
// }

import { useEffect, useState } from "react";

export default function DogImages(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => setData(data.message)) // Устанавливаем массив изображений
      .catch(error => console.error("Error fetching dog images:", error));
  }, []);

  // Проверка на наличие данных
  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <img src={item} alt="dog" key={item} />
      ))}
    </div>
  );
}

