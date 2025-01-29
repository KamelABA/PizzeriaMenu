import React from "react";
import { tacos } from "../menus"; // استيراد التكسو من menus.js

const TacoMenu = () => {
  return (
    <div className="row">
      {tacos.map((taco) => (
        <div className="col-md-4 mb-4" key={taco.id}>
          <div className="card d-flex flex-row align-items-center" style={{ width: "100%" }}>
            <img src={taco.image} className="card-img-left" style={{ width: "40%" }} alt={taco.name} />
            <div className="card-body" style={{ width: "60%" }}>
              <h5 className="card-title">{taco.name}</h5>
              <p className="card-text">{taco.description}</p>
              <h6 className="card-text">{taco.price}Da</h6>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TacoMenu;
