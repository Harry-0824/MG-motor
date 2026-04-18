import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
const Home = lazy(() => import("./pages/Home/Home"));
const Models = lazy(() => import("./pages/Models/Models"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const HSPage = lazy(() => import("./pages/HSPage/HSPage"));
const ZSPage = lazy(() => import("./pages/ZSPage/ZSPage"));
const DealerPage = lazy(() => import("./pages/DealerPage/DealerPage"));
const ExplorePage = lazy(() => import("./pages/ExplorePage/ExplorePage"));
const ArticleDetailPage = lazy(
  () => import("./pages/ArticleDetailPage/ArticleDetailPage"),
);
const AboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));
const TestDrivePage = lazy(() => import("./pages/TestDrivePage/TestDrivePage"));
const OrderPage = lazy(() => import("./pages/OrderPage/OrderPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("./pages/ForgotPasswordPage/ForgotPasswordPage"),
);
const DefaultPage = lazy(() => import("./pages/DefaultPage/DefaultPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
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
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/forgot-password" component={ForgotPasswordPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </DefaultPage>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </AuthProvider>
  );
};

export default App;
