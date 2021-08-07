import React, { Component } from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.componnent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import { SigInAndSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { Header } from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSuscribeFromAuth = null;

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSuscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
