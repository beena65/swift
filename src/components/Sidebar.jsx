import React from "react";
import {Layout, Menu, Image} from "antd";
import logo from "../assets/mysvg.svg";
import {
    UserOutlined,
    DashboardOutlined,
    BarChartOutlined,
    ContainerOutlined,
    FileTextOutlined,
    CalendarOutlined,
    SettingOutlined,
    CustomerServiceOutlined,
} from "@ant-design/icons";

const {Sider} = Layout;

const SidebarComponent = ({collapsed, menuItemClicked, handleMenuClick, selectedKeys}) => {
    return (
        <Sider
            width={60}
            style={{
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "rgba(0, 0, 0, 0.03) 1.95px 1.95px 2.6px",
                display: collapsed ? "none" : "block",
            }}
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div
                className="logo"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "16px auto",
                    width: "100%",
                    boxSizing: "border-box",
                }}
            >
                <Image
                    src={logo}
                    alt="logo"
                    width={40}
                    height={40}
                    preview={false}
                    style={{
                        padding: "5px 0",
                    }}
                />
            </div>

            <Menu
                theme="white"
                defaultSelectedKeys={selectedKeys}
                selectedKeys={selectedKeys}
                mode="inline"
                className="menu_children"
            >
                <Menu.Item key="1" icon={<DashboardOutlined />} className="menu_hd_item" />

                <Menu.Item key="2" icon={<BarChartOutlined />} className="menu_hd_item" />

                <Menu.Item key="3" icon={<ContainerOutlined />} className="menu_hd_item" />

                <Menu.Item key="4" icon={<CalendarOutlined />} className="menu_hd_item" />

                <Menu.Item
                    key="5"
                    icon={<CustomerServiceOutlined />}
                    onClick={() => handleMenuClick("5")}
                    style={{
                        background: menuItemClicked ? "rgb(185, 229, 251)" : "#ffffff",
                        color: menuItemClicked ? "blue" : "",
                    }}
                    className="menu_hd_item"
                />

                <Menu.Item key="6" icon={<FileTextOutlined />} className="menu_hd_item" />

                <Menu.Item key="7" icon={<UserOutlined />} className="menu_hd_item" />

                <Menu.Item key="8" icon={<SettingOutlined />} className="menu_hd_item" />
            </Menu>
        </Sider>
    );
};

export default SidebarComponent;
