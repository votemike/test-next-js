import React from "react";
import SearchResultList from "./SearchResultList";

export default {
  title: "Example/SearchResultList",
  component: SearchResultList,
};

const Template = ({ results, urlPrefix }) => (
  <SearchResultList results={results} urlPrefix={urlPrefix} />
);

export const Main = Template.bind({});
Main.args = {
  results: [
    { extra: "Some extra info", name: "Result Item 1", slug: "item1" },
    { name: "Result Item 2", slug: "item2" },
  ],
  urlPrefix: "/urlprefix",
};
