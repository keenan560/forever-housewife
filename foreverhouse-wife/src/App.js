import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Vids from "./components/Vids";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/vids">
            <Vids />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// https://foreverhousewife.com/wp-content/uploads/2020/01/cropped-FullColor_1024x1024_300dpi-logo-picture-scaled-2.jpg
