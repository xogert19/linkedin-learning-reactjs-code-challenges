import { useState } from "react";

const DogPics = () => {
  const [dogLink, setDogLink] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );

  const getNewDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogLink(data.message));
  };
  // API: https://dog.ceo/dog-api/
  return (
    <div className="dog-pics">
      <img src={dogLink} alt="A random dog" />
      <button onClick={getNewDog}>🐶</button>
    </div>
  );
};

export default DogPics;
