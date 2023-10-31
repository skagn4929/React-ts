import React from "react";
import { Menu } from "./model/restaurant";

interface Ownprops extends Omit<Menu, "price"> {
  showBestMenuname(name: string): string;
}

const BestMenu: React.FC<Ownprops> = ({ name, category, showBestMenuname }) => {
  return <div>{name}</div>;
};

export default BestMenu;
