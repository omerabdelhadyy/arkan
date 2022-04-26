import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Swap from "./screens/swap/swap.screen";

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
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Swap} />
        </Switch>
        {/* {this.state.redirect && <Redirect to={"/login"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
