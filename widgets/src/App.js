import React from "react";
import Accordion from "./components/Accordion";

export default function App() {
  const accordionItems = [
    {
      title: "1.This is first item among all the might items",
      content: "some mock content for this item.",
    },
    {
      title: "2.This is second item among all the might items",
      content: "some mock content for this item.",
    },
    {
      title: "3.This is third item among all the might items",
      content: "some mock content for this item.",
    },
    {
      title: "4.This is fouth item among all the might items",
      content: "some mock content for this item.",
    },
  ];

  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
}
