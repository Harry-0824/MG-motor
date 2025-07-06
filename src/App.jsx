import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // 匯入 ScrollToTop
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Contact from "./pages/Contact/Contact";
import HSPage from "./pages/HSPage/HSPage";
import ZSPage from "./pages/ZSPage/ZSPage";
import DealerPage from "./pages/DealerPage/DealerPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import ArticleDetailPage from "./pages/ArticleDetailPage/ArticleDetailPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TestDrivePage from "./pages/TestDrivePage/TestDrivePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <DefaultPage>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/models" component={Models} />
          <Route path="/contact" component={Contact} />
          <Route path="/hs" component={HSPage} />
          <Route path="/zs" component={ZSPage} />
          <Route path="/dealer" component={DealerPage} />
          <Route path="/explore" component={ExplorePage} />
          <Route path="/article/:id" component={ArticleDetailPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/test-drive" component={TestDrivePage} />
          <Route path="/order" component={OrderPage} />
        </Switch>
      </DefaultPage>
    </Router>
  );
};

export default App;
