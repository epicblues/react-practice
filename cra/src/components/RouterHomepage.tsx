import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

const RouteHomepage: FunctionComponent<any> = () => {
  return (
    <div>
      <h3>Home</h3>
      <p>현재 path = /</p>
    </div>
  );
};

export default RouteHomepage;
