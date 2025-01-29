import React from "react";
import {pizzas} from "../menus";

const PizzaMenu = () => {
  return (
    <div className="container">
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card d-flex flex-row align-items-center" style={{ width: "100%" }}>
              <img src={pizza.image} className="card-img-left" style={{ width: "40%" }} alt={pizza.name} />
              <div className="card-body" style={{ width: "60%" }}>
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.description}</p>
                <h6 className="card-text">{pizza.price}Da</h6>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzaMenu;
