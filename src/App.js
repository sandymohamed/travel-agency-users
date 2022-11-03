import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from 'react-router-dom';

import NavbarComponant from './componants/NavbarComponant';
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import Exploration from './pages/Exploration'
import TourGuiding from './pages/TourGuiding'
import Transportation from './pages/Transportation';
import NotFound from './pages/NotFound';
import Vcart from './componants/shared/Vcard';
import FlightCard from './componants/shared/FlightCard';



function App() {




  return (

    <>
      <BrowserRouter>
      
        <NavbarComponant />
        <FlightCard/>
        
        
        <Vcart />
        
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