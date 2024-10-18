import React from "react";
import { Menu } from "./model/resturant";

interface OwnProps extends Omit<Menu, "price"> {
  showBestMenuName(name: string): string;
}
// type OwnProps = Menu & {

// }

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenuName }) => {
  return <div>{name}</div>;
};

export default BestMenu;
