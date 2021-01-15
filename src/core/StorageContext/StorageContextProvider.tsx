import React from "react";
import { StorageContext, Car } from "./StorageContext";

export function StorageContextProvider(props: React.PropsWithChildren<{}>) {
  const value = React.useMemo(
    () => ({ cars: new Array(5).fill(null).map(createCar) }),
    []
  );

  return (
    <StorageContext.Provider value={value}>
      {props.children}
    </StorageContext.Provider>
  );
}

const createCar = () => {
  const result: Car = {
    id: Date.now().toString(),
    name: "Brand New Never Used Mercedes Benz",
    description:
      "This is a random description of this car. It’s only a couple words because this is a test project. Good luck!",
    soldBy: "James Raj",
    rating: 4,
    avatarUrl:
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
    photos: [
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
      "https://s1.cdn.autoevolution.com/images/models/MERCEDES-BENZ_GLA-2020_main.jpg",
    ],
    features: [
      {
        name: "Specs",
        attributes: [
          { name: "Turbo-Engine", value: "This car rips hard" },
          {
            name: "Nitrus",
            value: "It’s like Fast & Furious",
          },
          {
            name: "8 cup-holders",
            value: "For all your friends",
          },
          {
            name: "Vin Diesel Mode",
            value: "Will make you a protein shakeWill make you a protein shake",
          },
        ],
      },
      { name: "Reviews", attributes: [] },
      { name: "Parts", attributes: [] },
    ],
  };
  return result;
};
