import React from "react";
import {Input, Select, Table, Button, Layout} from "antd";
import {SearchOutlined, PlusOutlined, DownloadOutlined} from "@ant-design/icons";
const {Content} = Layout;
const {Search} = Input;
const {Option} = Select;

const MainContent = ({content, activeMenuItem, handleSearch, handleSortChange, userData, columns}) => {
    return (
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
                                    placeholder="Search by Name"
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
                                <Button type="default" className="wrap-btn-dwn" icon={<DownloadOutlined />}></Button>
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
    );
};

export default MainContent;
