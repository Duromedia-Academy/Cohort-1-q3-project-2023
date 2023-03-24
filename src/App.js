import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/style.css'
import Header from './component/Header';
import Home from './Home'
import Wallets from './Wallets'
import Stories from './Stories'
import Collections from './Collections'
import Carerepair from './Carerepair'
import Ourphilosophy from './Ourphilosophy'
import Careclimate from './Careclimate'
import Footer from './component/Footer';
import Aboutblog from './component/Aboutblog';



function App() {
  
  return (
    <Router>
  <div className="App font-rubik text-text-ash">
    <Header/>
    <div className="content pt-[80px]">
      <Switch>
      <Route exact path="/">
          <Home>  </Home>
        </Route>
      <Route exact path="/wallets">
          <Wallets/>
        </Route>
      <Route exact path="/stories">
          <Stories/>
        </Route>
      <Route exact path="/collections">
          <Collections/>
        </Route>
      <Route exact path="/carerepair">
          <Carerepair/>
        </Route>
      <Route exact path="/ourphilosophy">

          <Ourphilosophy/>
        </Route>
        <Route exact path= "/aboutblog">
          <Aboutblog/>
        </Route>
      <Route exact path="/careclimate">
          <Careclimate/>
        </Route>
      
      </Switch>
    </div>
    <Footer/>
    </div>

    </Router>




  );
}

export default App;
