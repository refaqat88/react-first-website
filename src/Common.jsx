import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <section id="header" className="d-flex align-content-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-0 d-flex justify-content-center flex-column">
                <h1>
                  {props.name}
                  <label className="brand-name"> {props.subtitle}</label>
                </h1>
                <h2 className="my-3">
                  we are the team of telanted developer making websites
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img
                  src={props.imgsrc}
                  className="img-fluid animated"
                  alt="HeaderIMage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Common;
