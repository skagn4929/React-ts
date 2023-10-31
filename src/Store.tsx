import React from "react";
import { Address, Restaurant } from "./model/restaurant";

interface Ownprops {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<Ownprops> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
