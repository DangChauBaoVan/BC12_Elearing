import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes/routes";
import Login from "containers/shared/Auth/Login/Login";
import Register from "containers/shared/Auth/Register/Register";
import PageNotFound from "containers/shared/PageNotFound/PageNotFound";
import AdminLayOut from "layouts/adminLayout/AdminLayOut";

function App() {
  const renderLayout = (routes, Layout) => {
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
          {renderLayout(adminRoutes, AdminLayOut)}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
