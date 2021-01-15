import React from "react";

export interface Attribute {
  name: string;
  value: string;
}

export interface CarFeature {
  name: string;
  attributes: Attribute[];
}

export interface Car {
  id: string;
  name: string;
  avatarUrl: string;
  photos: string[];
  description: string;
  soldBy: string;
  rating: 1 | 2 | 3 | 4 | 5;
  features: CarFeature[];
}

export interface StorageContextProps {
  cars: Car[];
}

export const StorageContext = React.createContext(
  (undefined as unknown) as StorageContextProps
);
