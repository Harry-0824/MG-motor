import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Models from "./pages/Models";
import Contact from "./pages/Contact";
import HSPage from "./pages/HSPage";
import ZSPage from "./pages/ZSPage";
import DealerPage from "./pages/DealerPage";
import ExplorePage from "./pages/ExplorePage";
import AboutPage from "./pages/AboutPage";
import TestDrivePage from "./pages/TestDrivePage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/models" component={Models} />
          <Route path="/contact" component={Contact} />
          <Route path="/hs" component={HSPage} />
          <Route path="/zs" component={ZSPage} />
          <Route path="/dealer" component={DealerPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/test-drive" component={TestDrivePage} />
          <Route path="/order" component={OrderPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
