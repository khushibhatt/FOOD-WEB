import React , {Component} from 'react';
import './App.css';
 
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
 
import Homepage from './HomePage/homepage.js';
import Jaipur from './Jaipur/jaipur.js'
import Flipcard from './flipcard.js'
import Tokyo from './Tokyo/Tokyo.js'
import Gulabjamun from './dish/Gulab_Jamun.js'
import malailassi from './dish/malai lassi.js'
class App extends Component {
 
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path="/jaipur" component={Jaipur}/>
        <Route path="/Tokyo" component={Tokyo}/>
        <Route path="/Gulab Jamun" component={Gulabjamun}/>
        <Route path="/Malai Lassi" component={malailassi}/>
        

          
          
      </Switch>
      </Router>
    );
  }
}
 
export default App;
