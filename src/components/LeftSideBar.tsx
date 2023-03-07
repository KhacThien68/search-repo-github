import React from "react";

type ItemSideBar = {
  title: string;
  active: boolean;
};

type LeftSideBarProps = {
  itemList: ItemSideBar[];
};

const LeftSideBar = ({ itemList }: LeftSideBarProps) => {
  return <div>LeftSideBar component</div>;
};

export default LeftSideBar;
