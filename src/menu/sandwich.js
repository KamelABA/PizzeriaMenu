import React from "react";
import { sandwiches } from "../menus"; 

const SandwichMenu = () => {
  return (
    <div className="container">
      
      <div className="row">
        {sandwiches.map((sandwich) => (
          <div className="col-md-4 mb-4" key={sandwich.id}>
            <div className="card d-flex flex-row align-items-center" style={{ width: "100%" }}>
              <img src={sandwich.image} className="card-img-left" style={{ width: "40%" }} alt={sandwich.name} />
              <div className="card-body" style={{ width: "60%" }}>
                <h5 className="card-title">{sandwich.name}</h5>
                <p className="card-text">{sandwich.description}</p>
                <h6 className="card-text">{sandwich.price}Da</h6>
                <button className="btn btn-primary">Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SandwichMenu;
