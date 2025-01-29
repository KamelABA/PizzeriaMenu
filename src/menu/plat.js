import React from "react";
import { plats } from "../menus";


const PlatMenu = () => {
    return (
        <div className="container">
            <div className="row">
                {plats.map((plat) => (
                    <div className="col-md-4 mb-4" key={plat.id}>
                        <div className="card d-flex flex-row align-items-center" style={{ width: "100%" }}>
                            <img src={plat.image} className="card-img-left" style={{ width: "40%" }} alt={plat.name} />
                            <div className="card-body" style={{ width: "60%" }}>
                                <h5 className="card-title">{plat.name}</h5>
                                <p className="card-text">{plat.description}</p>
                                <h6 className="card-text">{plat.price}Da</h6>
                                <button className="btn btn-primary">Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlatMenu;
