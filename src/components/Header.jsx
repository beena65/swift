import React from "react";
import {Layout, Image, Input, Badge, Select, Button} from "antd";
import logo from "../assets/mysvg.svg";
import {useState} from "react";

import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
    BellOutlined,
    GlobalOutlined,
} from "@ant-design/icons";

const {Header} = Layout;
const {Search} = Input;

const HeaderSection = ({collapsed, toggleSidebar}) => {
    const [notificationsCount, setNotificationsCount] = useState(21);
    return (
        <Header className="menu_hd bx-shadow">
            <div className="logo-hide">
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

            <div className="wrapper_hd">
                <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                    {collapsed ? (
                        <MenuUnfoldOutlined className="trigger" onClick={toggleSidebar} />
                    ) : (
                        <MenuFoldOutlined className="trigger" onClick={toggleSidebar} />
                    )}

                    <div className="search_hd">
                        <Search
                            placeholder="Search"
                            className="serach_hd_icon"
                            enterButton={
                                <Button>
                                    <SearchOutlined />
                                </Button>
                            }
                        />
                    </div>
                </div>

                <div className="header-icon">
                    <span className="trio_icon_hd">
                        <GlobalOutlined className="icon_hd" /> English
                    </span>
                    <Badge count={notificationsCount} className="icon_hd badge_hd trio_icon_hd">
                        <div className="bell_hd">
                            <BellOutlined className="icon_hd" />
                        </div>
                    </Badge>
                    <UserOutlined className="icon_hd user_hd" />
                </div>
            </div>
        </Header>
    );
};

export default HeaderSection;
