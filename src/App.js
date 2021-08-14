
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import TeamAbout from './components/TeamAbout/TeamAbout';
import TeamDetail from './components/TeamDetail/TeamDetail';



function App() {
  return (
    
      <Router>
         <Switch>
            <Route path="/home">
              <Home />
            </Route>
           <Route path="/team/:idTeam">
             <TeamDetail></TeamDetail>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>  
         </Switch>
         
      </Router>
     
       
  );
}

export default App;
