import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Contact from "./pages/Contact/Contact";
import HSPage from "./pages/HSPage/HSPage";
import ZSPage from "./pages/ZSPage/ZSPage";
import DealerPage from "./pages/DealerPage/DealerPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TestDrivePage from "./pages/TestDrivePage/TestDrivePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

const App = () => {
  return (
    <Router>
      <DefaultPage>
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
      </DefaultPage>
    </Router>
  );
};

export default App;
