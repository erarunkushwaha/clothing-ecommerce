import "./App.css";
import { Homepage } from "./pages/homepage/homepage.componnent";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import { SigInAndSignUp } from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { Header } from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SigInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
