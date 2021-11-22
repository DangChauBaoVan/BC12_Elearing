import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    const currentUser = useSelector((state) => state.loginReducer.currentUser);
    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );

    if (isPrivate) {
      if (currentUser === null) {
        return <Redirect to="/" />;
      } else {
        if (currentUser.maLoaiNguoiDung === "GV") {
          return content;
        } else {
          return <Redirect to="/" />;
        }
      }
    } else {
      return <Redirect to="/" />;
    }
  };
};

export default withLayout;
