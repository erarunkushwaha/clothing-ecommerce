import "./App.css";
import { Homepage } from "./pages/homepage/homepage.componnent";
import { Route, Switch } from "react-router-dom";

const HatsPage = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.history.push("/");
        }}>
        click me
      </button>
      <h1>this is hats</h1>
    </div>
  );
};

const Topicdetail = (props) => {
  return (
    <div>
      {console.log(props)}
      <h1>{props.match.params.detail}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:detail' component={Topicdetail} />
      </Switch>
    </div>
  );
}

export default App;
