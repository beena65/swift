import React from "react";
import {useState, useEffect} from "react";
import {Layout, Menu, Image, Input, Badge, Select, Table, Button} from "antd";
import logo from "../assets/mysvg.svg";
import {useSelector, useDispatch} from "react-redux";
import {
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SearchOutlined,
    BellOutlined,
    GlobalOutlined,
    PlusOutlined,
    DownloadOutlined,
    EditOutlined,
    DeleteOutlined,
    DashboardOutlined,
    BarChartOutlined,
    ContainerOutlined,
    FileTextOutlined,
    CalendarOutlined,
    SettingOutlined,
    CustomerServiceOutlined,
} from "@ant-design/icons";
import {deleteUser, getUserData, setSearchQuery, setSortOrder} from "../actions/user.action";
import FooterComponent from "./Footer";

const {Header, Sider, Content} = Layout;
const {Search} = Input;
const {Option} = Select;

const CustomLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [notificationsCount, setNotificationsCount] = useState(21);
    const [content, setContent] = useState(false);
    const [menuItemClicked, setMenuItemClicked] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("5");
    const [selectedSortOption, setSelectedSortOption] = useState("");

    const userData = useSelector((state) => state.users);

    // console.log("userdata is logged45", userData);

    const dispatch = useDispatch();

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick = (menuItemKey) => {
        if (menuItemKey === "5") {
            setContent(true);
            setMenuItemClicked(true);
            setSelectedKeys(menuItemClicked ? ["5"] : []);
            setActiveMenuItem(menuItemKey);
        } else {
            setMenuItemClicked(false);
        }
    };

    const handleSortChange = (value) => {
        dispatch(setSortOrder(value));
    };

    const handleDelete = (record) => {
        dispatch(deleteUser(record));
    };

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    const handleSearch = (value) => {
        console.log("search is clicked", value);
        dispatch(setSearchQuery(value));
    };

    const columns = [
        {
            title: "S.No",
            dataIndex: "id",
            key: "id",
        },

        {
            title: "Status",
            dataIndex: "eyeColor",
            key: "eyeColor",
            render: (text, record) => {
                const color =
                    record.eyeColor === "Green"
                        ? "#47ff25"
                        : record.eyeColor === "Brown"
                        ? "#f08a8a85"
                        : record.eyeColor === "Gray"
                        ? "Gray"
                        : record.eyeColor === "Amber"
                        ? "#c3973fb3"
                        : record.eyeColor === "Blue"
                        ? "Blue"
                        : "white";
                const backgroundColor =
                    record.eyeColor === "Green"
                        ? "rgb(71 255 37 / 6%)"
                        : record.eyeColor === "Brown"
                        ? "rgb(240 138 138 / 12%)"
                        : record.eyeColor === "Gray"
                        ? "rgb(128 128 128 / 7%)"
                        : record.eyeColor === "Amber"
                        ? "rgb(195 151 63 / 13%)"
                        : record.eyeColor === "Blue"
                        ? "rgb(0 0 255 / 5%)"
                        : "white";
                console.log("Background color:", backgroundColor);
                return {
                    props: {
                        style: {},
                    },
                    children: (
                        <button
                            style={{
                                color: color,

                                background: backgroundColor,

                                border: `1px solid ${color}`,
                            }}
                            className="content-css"
                        >
                            {text}
                        </button>
                    ),
                };
            },
        },

        {
            title: "ID",
            dataIndex: "height",
            key: "height",
            render: (text) => `#${text}`,
        },
        {
            title: "Name",
            dataIndex: "firstName",
            key: "firstName",
        },
        {
            title: "Contact",
            dataIndex: "phone",
            key: "phone",
        },

        {
            title: "Order",
            dataIndex: "age",
            key: "age",
        },

        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            render: (_, record) => (
                <div className="action-icons">
                    <Button icon={<EditOutlined />} />
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
                </div>
            ),
        },
    ];

    return (
        <Layout style={{minHeight: "90vh"}}>
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
            <Layout>
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

                <div style={{padding: "0 10px", background: "rgb(255 255 255 / 75%)"}}>
                    {content && (
                        <div>
                            {activeMenuItem === "5" && (
                                <>
                                    <div className="alt_hd_mt">
                                        <span className="alt_tw_hd">Home</span> /<span>List</span>
                                    </div>

                                    <h4 className="alt_hd_h4">List</h4>

                                    <div className="wrap-btn">
                                        <Search
                                            placeholder="Search"
                                            allowClear
                                            enterButton={<SearchOutlined style={{width: "8px"}} />}
                                            onSearch={handleSearch}
                                            className="wrap-btn-search"
                                        />

                                        <Select defaultValue="descend" style={{width: 200}} onChange={handleSortChange}>
                                            <Option value="ascend">Sort by Username (Ascending)</Option>
                                            <Option value="descend">Sort by Username (Descending)</Option>
                                        </Select>

                                        <Button type="primary" className="wrap-btn-add" icon={<PlusOutlined />}>
                                            <span class="add-text">Add</span>
                                        </Button>
                                        <Button
                                            type="default"
                                            className="wrap-btn-dwn"
                                            icon={<DownloadOutlined />}
                                        ></Button>
                                    </div>

                                    <Content style={{padding: " 0 10px", overflowX: "auto"}}>
                                        {userData && (
                                            <Table
                                                columns={columns}
                                                dataSource={userData.users.users.slice()}
                                                pagination={{pageSize: 5}}
                                                className="custom-table"
                                            />
                                        )}
                                    </Content>
                                </>
                            )}
                        </div>
                    )}
                </div>
                {content && <FooterComponent />}
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
