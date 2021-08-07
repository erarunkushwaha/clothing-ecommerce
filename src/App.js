import React, { Component } from "react";
import "./App.css";
import { Homepage } from "./pages/homepage/homepage.componnent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import { SigInAndSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { Header } from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unSuscribeFromAuth = null;

  componentDidMount() {
    this.unSuscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
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
