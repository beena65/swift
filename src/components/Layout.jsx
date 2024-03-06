import React from "react";
import {useState, useEffect} from "react";
import {Layout, Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {deleteUser, getUserData, setSearchQuery, setSortOrder} from "../actions/user.action";
import FooterComponent from "./Footer";
import HeaderSection from "./Header";
import MainContent from "./Content";
import SidebarComponent from "./Sidebar";

const CustomLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [content, setContent] = useState(false);
    const [menuItemClicked, setMenuItemClicked] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState("5");

    const userData = useSelector((state) => state.users);

    // console.log("userdata is logged45", userData)

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
            <SidebarComponent
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
                menuItemClicked={menuItemClicked}
                handleMenuClick={handleMenuClick}
                selectedKeys={selectedKeys}
            />
            <Layout>
                <HeaderSection collapsed={collapsed} toggleSidebar={toggleSidebar} />
                <MainContent
                    content={content}
                    activeMenuItem={activeMenuItem}
                    userData={userData}
                    handleSearch={handleSearch}
                    handleSortChange={handleSortChange}
                    handleDelete={handleDelete}
                    columns={columns}
                />

                {content && <FooterComponent />}
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
