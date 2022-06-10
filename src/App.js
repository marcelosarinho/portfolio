import { Fragment } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Home from './components/Home';
import PortfolioFooter from './components/PortfolioFooter';
import PortfolioNav from './components/PortfolioNav';
import Projects from './components/Projects';

function App() {
  return (
    <Fragment>
      <PortfolioNav />
      <div className="container">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      </div>
      <PortfolioFooter />
    </Fragment>
  );
}

export default App;
