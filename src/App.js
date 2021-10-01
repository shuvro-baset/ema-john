import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import OrderReview from './Components/OrderReview/OrderReview';
function App() {
  return (
    <div>
      <Router>
      <Header></Header>

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
          <Route exact path="/orders">
            <OrderReview></OrderReview>
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
