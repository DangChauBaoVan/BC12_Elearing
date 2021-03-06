import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes/routes";
import Register from "containers/shared/Auth/Register/Register";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import AdminLayOut from "layouts/adminLayout/AdminLayOut";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

function App() {
  const renderLayout = (routes) => {
    return routes.map((route) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Route
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };

  // render layout admin
  const renderAdmin = (routes, Layout) => {
    return routes.map((route) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          path={path}
          component={component}
          exact={exact}
          isPrivate={isPrivate}
        />
      );
    });
  };
  
  return (
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(clientRoutes)}
          {renderAdmin(adminRoutes, AdminLayOut)}
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
