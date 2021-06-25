import Navbars from './components/Navbar/Navbars'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Home from './components/Home'
import Gigs from './components/Gigs'
import Mixtapes from './components/Mixtapes'
import About from './components/About'



function App() {

  return (
    <>
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/gigs" component={Gigs} />
          <Route path="/mixtapes" component={Mixtapes} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
