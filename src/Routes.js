import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  Router,
} from "react-router-dom";
import Swap from "./screens/swap/swap.screen";
import Market from "./screens/market/market.screen";
import Users from "./screens/users/users.screen";
// import Speculation from "./screens/speculation/speculation.screen";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
  }

  componentDidMount = async () => {};
  render() {
    return (
      <BrowserRouter basename="/arkan">
        <Switch>
          <Route path={"/users"} component={Users} />
          <Route path={"/:id"} component={Swap} />
          {/* <Route path={"/:market"} component={Market} /> */}
          {/* <Route path={"/:speculation"} component={Swap} /> */}
          <Route path={"/"} component={Swap} />
        </Switch>
        {/* {this.state.redirect && <Redirect to={"/login"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
