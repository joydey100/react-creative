import './App.css';
import Home from './component/Home'
import About from './component/About'
import Service from './component/Service'
import Contact from './component/Contact'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch, Route, Redirect} from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/react-creative" > <Home /></Route>
      <Route exact path="/react-creative/about"> <About />  </Route>
      <Route exact path="/react-creative/service"> <Service /> </Route>
      <Route exact path="/react-creative/contact"> <Contact /> </Route>
      <Redirect to="/react-creative"> </Redirect>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
