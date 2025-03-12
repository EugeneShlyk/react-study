import { useEffect, useState } from "react";

function withLoader(Element, url) {
  return (props) => {
    // console.log(props)
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }
    return <Element {...props} data={data} />;
  };
}

function DogImages(props) {
  console.log(props)
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
