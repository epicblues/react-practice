import React, { FunctionComponent } from "react";
import RouteAbout from "./components/RouteAbout";
import RouteHeader from "./components/RouteHeader";
import RouteHomepage from "./components/RouterHomepage";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App: FunctionComponent<any> = () => {
  return (
    <BrowserRouter>
      <RouteHeader />
      <Link to="/">
        <button>Home</button>
        <br />
      </Link>

      <Link to="/about" children={[<button>About</button>, <br />]} />
      <Link
        to="/about/chicken/dinner"
        children={[<button>About/Chicken/Dinner</button>, <br />]}
      />
      {/* 실제로 출력될 영역들 */}
      <Route exact path="/" component={RouteHomepage} />
      <Route path="/about" component={RouteAbout} />
    </BrowserRouter>
  );
};

export default App;
