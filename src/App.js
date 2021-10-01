import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route exact path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>



          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
