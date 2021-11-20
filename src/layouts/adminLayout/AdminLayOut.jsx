import React from "react";
import withLayout from "hocs/withLayouts";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//scss
import "./adminLayout.scss";
//font awesome
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHome,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
//ant design
import { Layout, Menu } from "antd";
import { AppstoreOutlined, TeamOutlined } from "@ant-design/icons";

import { actLogOut } from "containers/shared/Auth/Login/module/action";

const { Header, Content, Sider } = Layout;


function AdminLayout({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector((state) => state.loginReducer.currentUser);

  if (currentUser === null) {
    return <Redirect to="/" />;
  }

  const { maLoaiNguoiDung, hoTen } = currentUser;

  if (maLoaiNguoiDung === "HV") {
    return <Redirect to="/" />;
  }

  const handleOut = () => {
    dispatch(actLogOut());
    history.push("/");
  };

  return (
    <Layout color={"#ffa940"}>
      <Sider className="ant__layout__update">
        <a href="#" className="logo">
          <Icon icon={faBookOpen} /> E-Learning
        </a>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/admin/quanlykhoahoc">Khóa Học</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <NavLink to="/admin/quanlynguoidung">Người Dùng</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, height: "100vh" }}
      >
        <Header className="site-layout-background">
          <div className="thong__tin__admin">
            <div className="dropdown drop__admin">
              <p className="d-flex align-items-baseline justify-content-around w-75">
                <span>Xin chào!</span>
                <h4>{hoTen}</h4>
              </p>
              <span className="dropdown__toggle" data-toggle="dropdown">
                <Icon icon={faBars} />
              </span>
              <span className="dropdown-menu drop__menu">
                <a
                  className="dropdown-item drop__item"
                  data-toggle="popover"
                  title="home"
                  onClick={() => history.push("/")}
                >
                  <Icon icon={faHome} />
                </a>
                <a
                  className="dropdown-item drop__item"
                  data-toggle="popover"
                  title="Sign out"
                  onClick={handleOut}
                >
                  <Icon icon={faSignOutAlt} />
                </a>
              </span>
            </div>
          </div>
        </Header>
        <Content className="admin__content">
          <div className="site-layout-background">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withLayout(AdminLayout);
