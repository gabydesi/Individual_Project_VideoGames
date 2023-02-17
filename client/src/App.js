import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">

    <Route exact path="/">
      <LandingPage/>
    </Route>

    <Route path="/home" >
      <Home/>
    </Route>
    
    <Route path="/detail/:id">
      <Detail/>
    </Route>

    <Route path="/form">
      <Form/>
    </Route>

    
    </div>
  );
}

export default App;
