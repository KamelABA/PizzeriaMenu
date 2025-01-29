import React, { useState } from "react";

import PizzaMenu from "./menu/pizza";
import SandwichMenu from "./menu/sandwich";
import PlatMenu from "./menu/plat";
import TacoMenu from "./menu/tacos";
import "./App.css"; 

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const renderMenu = () => {
    if (selectedCategory === "pizza") {
      return <PizzaMenu />;
    } else if (selectedCategory === "sandwich") {
      return <SandwichMenu />;
    } else if (selectedCategory === "plat") {
      return <PlatMenu />;
    } else if (selectedCategory === "tacos") {
      return <TacoMenu />;
    } else {
      return (
        <>
          <PizzaMenu />
          <SandwichMenu />
          <PlatMenu />
          <TacoMenu />
        </>
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white">Food Menu</h2>

      {/* شريط التنقل */}
      <div className="btn-group mb-4" role="group" aria-label="Category">
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedCategory("pizza")}
        >
          Pizza
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedCategory("sandwich")}
        >
          Sandwich
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedCategory("plat")}
        >
          Plat
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setSelectedCategory("tacos")}
        >
          Tacos
        </button>
      </div>

      {/* عرض المحتوى بناءً على الفئة المحددة */}
      {renderMenu()}
    </div>
  );
};

export default App;
