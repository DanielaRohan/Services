import './Style/everywhere.scss';
import './App.scss';
import {  Routes,Route, BrowserRouter } from 'react-router-dom';
import { NewAccount } from './Page-log-in/NewAccount';
import { SignIn } from './Page-log-in/SignIn';
import { ElectricalInstall, Plumbing, Home, MakeUp,AutoMechanic,
         Driver,Building, FrontedDeveloper, Accountancy, Lawyer,
         ComputerRepairs, DJ, TouristGuide, MachineryRental, Waiters,
        Cook, Confectioner, Gardener} from './Page-sidebar';

function App() {
  return (
    <div className="main-app">
        <Routes>
           <Route path='/' element= {<Home />} />;
           <Route path='/electircInstall' element= {<ElectricalInstall />} />;
           <Route path='/plumbing' element= {<Plumbing />} />;
           <Route path='/Make-Up' element= {< MakeUp/>} />;
           <Route path='/Auto-mechanic' element= {< AutoMechanic/>} />;
           <Route path='/driver' element= {<Driver />} />;
           <Route path='/building' element= {<Building />} />;
           <Route path='/fronted-developer' element= {<FrontedDeveloper />} />;
           <Route path='/accountacy' element= {<Accountancy />} />;
           <Route path='/lawyer' element= {<Lawyer />} />;
           <Route path='/computer-repairs' element= {<ComputerRepairs />} />;
           <Route path='/DJ' element= {<DJ />} />;
           <Route path='/tourist-guide' element= {<TouristGuide />} />;
           <Route path='/machinery-rentals' element= {<MachineryRental />} />;
           <Route path='/waiters' element= {< Waiters/>} />;
           <Route path='/cook' element= {< Cook/>} />;
           <Route path='/confectioner' element= {<Confectioner />} />;
           <Route path='/gardener' element= {<Gardener />} />;
           <Route path='/new-account' element= {<NewAccount />} />;
           <Route path='/sign-in' element= {<SignIn />} />;
        </Routes>
    </div>
  );
}

export default App;
