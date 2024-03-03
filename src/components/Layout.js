import React from 'react';
import { useState } from 'react';
import { Layout, Menu, Image, Input, Badge, Select, Table, Button } from 'antd';
import logo from '../assets/mysvg.svg';
import {
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  BellOutlined,
  GlobalOutlined,
  PlusOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [notificationsCount, setNotificationsCount] = useState(21);
  const [content, setContent] = useState(false);
  const [menuItemClicked, setMenuItemClicked] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('5');
  const [selectedSortOption, setSelectedSortOption] = useState('userName');

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (menuItemKey) => {
    console.log('Menu Item Clicked:', menuItemKey);

    if (menuItemKey === '5') {
      setContent(true);
      setMenuItemClicked(true);
      setSelectedKeys(menuItemClicked ? ['5'] : []);
      setActiveMenuItem(menuItemKey);
    } else {
      setMenuItemClicked(false); // Reset state for other menu items
    }
  };

  const handleSortChange = (value) => {
    setSelectedSortOption(value);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={60}
        style={{
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.03) 1.95px 1.95px 2.6px',
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className='logo'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '16px auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <Image
            src={logo}
            alt='logo'
            width={40}
            height={40}
            preview={false}
            style={{
              padding: '5px 0',
            }}
          />
        </div>

        <Menu
          theme='white'
          defaultSelectedKeys={selectedKeys}
          selectedKeys={selectedKeys}
          mode='inline'
        >
          <Menu.Item key='1' icon={<UserOutlined />} />

          <Menu.Item key='2' icon={<VideoCameraOutlined />} />

          <Menu.Item key='3' icon={<VideoCameraOutlined />} />

          <Menu.Item key='4' icon={<VideoCameraOutlined />} />

          <Menu.Item
            key='5'
            icon={<VideoCameraOutlined />}
            onClick={() => handleMenuClick('5')}
            style={{
              background: menuItemClicked ? 'rgb(185, 229, 251)' : '#ffffff',
              color: menuItemClicked ? 'blue' : '',
            }}
          />

          <Menu.Item key='6' icon={<VideoCameraOutlined />} />

          <Menu.Item key='7' icon={<VideoCameraOutlined />} />

          <Menu.Item key='8' icon={<VideoCameraOutlined />} />
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: '#ffffff',
            padding: 0,
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'poppins',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {collapsed ? (
              <MenuUnfoldOutlined
                className='trigger'
                onClick={toggleSidebar}
                style={{ marginLeft: '25px' }}
              />
            ) : (
              <MenuFoldOutlined
                className='trigger'
                onClick={toggleSidebar}
                style={{ marginLeft: '25px' }}
              />
            )}

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Search
                placeholder='Search'
                style={{ width: 350, marginRight: 10 }}
                enterButton={<SearchOutlined style={{ width: '8px' }} />}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '0 10px',
            }}
          >
            <GlobalOutlined style={{ fontSize: 16 }} /> English
            <Badge
              count={notificationsCount}
              style={{ width: 'auto', height: 'auto', fontSize: '13px' }}
            >
              <div
                style={{
                  border: '1px solid #eee',
                  borderRadius: '6px',
                  padding: '5px',
                }}
              >
                <BellOutlined style={{ fontSize: 16 }} />
              </div>
            </Badge>
            <UserOutlined
              style={{
                fontSize: 16,
                background: '#ddd',
                width: '30px',
                height: '30px',
                padding: '7px 7px',
                color: '#fff',
                borderRadius: '50%',
              }}
            />
          </div>
        </Header>
        <div style={{ padding: '20px' }}>
          {content && (
            <div>
              {activeMenuItem === '5' && (
                <>
                  <div>
                    <span style={{ color: '#888' }}>Home</span> /
                    <span>List</span>
                  </div>

                  <h4 style={{ fontWeight: '600', fontSize: '20px' }}>List</h4>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '40px',
                    }}
                  >
                    <Search
                      placeholder='Search'
                      style={{ width: 250, marginRight: 10 }}
                      enterButton={<SearchOutlined style={{ width: '8px' }} />}
                    />
                    <div
                      style={{
                        display: 'flex',
                        gap: '10px',
                      }}
                    >
                      <Select
                        defaultValue='userName'
                        style={{ width: 200 }}
                        onChange={handleSortChange}
                      >
                        <Option value='userName'>Sort by( userName)</Option>
                      </Select>

                      <Button type='primary' icon={<PlusOutlined />}>
                        Add
                      </Button>
                      <Button
                        type='default'
                        icon={<DownloadOutlined />}
                      ></Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
