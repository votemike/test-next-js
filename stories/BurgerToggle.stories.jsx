import React from "react";
import BurgerToggle from "../components/atoms/burgerToggle";

export default {
  title: "Example/BurgerToggle",
  component: BurgerToggle,
};

const Template = ({ showCloseIcon }) => (
  <BurgerToggle showCloseIcon={showCloseIcon} />
);

export const Main = Template.bind({});
Main.args = {
  showCloseIcon: false,
};
