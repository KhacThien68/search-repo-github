import React from "react";

type PopupProps = {
  title: string;
};

const PopUp = ({ title }: PopupProps) => {
  return <div>PopUp component with {title}</div>;
};

export default PopUp;
