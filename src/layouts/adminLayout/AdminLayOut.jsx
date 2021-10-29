import React from "react";
import withLayout from "hocs/withLayouts";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//scss
import "./adminLayout.scss";
//ant design
import { Layout, Menu } from "antd";
import { AppstoreOutlined, TeamOutlined } from "@ant-design/icons";
import { actLogOut } from "containers/shared/Auth/Login/module/action";
const { Header, Content, Sider } = Layout;

function AdminLayout({ children }) {
  const { hoTen, maLoaiNguoiDung } = useSelector(
    (state) => state.loginReducer.currentUser
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOut = () => {
    dispatch(actLogOut());
    history.push("/");
  };
  if (maLoaiNguoiDung === "HV") {
    return <Redirect to="/" />;
  }

  return (
    <Layout color={"#ffa940"}>
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
        }}
      >
        <img
          src="https://i.imgur.com/lC22izJ.png"
          alt="..."
          className="mt-4 mb-4"
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/admin/quanlykhoahoc">Khóa Học</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TeamOutlined />}>
            <NavLink to="/admin/quanlynguoidung">Người Dùng</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200, height:"100vh" }}>
        <Header className="site-layout-background">
          <div className="thong__tin__admin">
            <p>Chào! {hoTen} </p>
            <div className="dropdown drop__admin">
              <span
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ fontSize: "3rem" }}
              ></span>
              <span
                className="dropdown-menu drop__menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item drop__item">
                  Cập nhật thông tin
                </a>
                <a className="dropdown-item drop__item" onClick={handleOut}>
                  LogOut
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
