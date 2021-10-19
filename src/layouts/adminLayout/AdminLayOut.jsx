import React from "react";
import withLayout from "hocs/withLayouts";
//scss
import "./adminLayout.scss";
//ant design
import { Layout, Menu } from "antd";
import { AppstoreOutlined, TeamOutlined } from "@ant-design/icons";
import { Link, NavLink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import ListUser from "containers/admin/quanLyNguoiDung/danhSachNguoiDung/ListUser";
const { SubMenu } = Menu;

const { Header, Content, Sider } = Layout;

function AdminLayout({ children }) {
  // const currentUser = useSelector((state) => state.authReducer.currentUser);

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
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center", height: "100vh" }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default withLayout(AdminLayout);
