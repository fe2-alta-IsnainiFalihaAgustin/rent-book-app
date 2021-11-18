import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./views/home"
import Rentt from "./views/rent/rent";
import Detaill from './views/detail/detail'
// import Returnn from "./views/return/return";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
         {/* <Route path="book/:id"><BookDetail /></Route>  */}
         <Route exact path="/rent"><Rentt /></Route>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/detail"><Detaill /></Route>
        </Switch> 
    
        {/* <Navbarr /> */}
        {/* <Home /> */}

        
        {/* <Detaill />  */}
        {/* <Returnn />  */}
        {/* <Rentt /> */}
      </Router>
    </div>
  );
}

export default App;
