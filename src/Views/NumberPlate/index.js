import Navigation from "../../Extends/Navigation";
import React, { Component, useEffect } from "react";

function NumberPlate() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="number_plate">
      <div className="ar-space body-mrgn">
        <Navigation />
        <div className="filter-btns">
          <h2>Coming Soon.</h2>
        </div>
      </div>
    </div>
  );
}

export default NumberPlate;
