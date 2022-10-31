import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Switch } from 'react-router-dom';

import NavbarComponant from './Componants/NavbarComponant';
import Home from './Pages/Home'
import Accomodation from './Pages/Accomodation'
import Exploration from './Pages/Exploration'
import TourGuiding from './Pages/TourGuiding'
import Transportation from './Pages/Transportation';
import NotFound from './Pages/NotFound';



function App() {








  return (
    
    <>
<BrowserRouter>

<NavbarComponant/>

<Switch>

<Route path={"/"} exact component={Home}></Route>
<Route path={"/Home"} exact component={Home}></Route>
<Route path={"/Accomodation"} exact component={Accomodation}></Route>
<Route path={"/TourGuiding"} exact component={TourGuiding}></Route>
<Route path={"/Transportation"} exact component={Transportation}></Route>
<Route path={"/Exploration"} exact component={Exploration}></Route>
<Route path={"*"} exact component={NotFound}></Route>

  </Switch>
  </BrowserRouter>

    </>

  );
}

export default App 