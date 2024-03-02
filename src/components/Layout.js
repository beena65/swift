// src/components/Layout.js
import React from 'react';
import { useState } from 'react';
import { Layout, Menu, Image } from 'antd';

import logo from '../assets/mysvg.svg';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const CustomLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={70}
        style={{
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
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

            width: '100%', // Set the width of the logo container to 100%
            boxSizing: 'border-box', // Ensure padding and border are included in the width
          }}
        >
          <Image
            src={logo}
            alt='logo'
            width={30}
            height={30}
            preview={false}
            style={{
              border: '1px solid rgb(251, 246, 246)',
              borderRadius: '7px',
              padding: '7px 0',
            }}
          />
        </div>

        <Menu theme='white' defaultSelectedKeys={['1']} mode='inline'>
          <Menu.Item key='1' icon={<UserOutlined />} />

          <Menu.Item key='2' icon={<VideoCameraOutlined />} />

          <Menu.Item key='3' icon={<VideoCameraOutlined />} />

          <Menu.Item key='4' icon={<VideoCameraOutlined />} />

          <Menu.Item key='5' icon={<VideoCameraOutlined />} />

          <Menu.Item key='6' icon={<VideoCameraOutlined />} />

          <Menu.Item key='7' icon={<VideoCameraOutlined />} />

          <Menu.Item key='8' icon={<VideoCameraOutlined />} />
          {/* 
          <SubMenu key='sub1' icon={<UploadOutlined />} title='Submenu 1'>
            <Menu.Item key='3'>Submenu 1 Option 1</Menu.Item>
            <Menu.Item key='4'>Submenu 1 Option 2</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#ffffff', padding: 0, height: 60 }}>
          {collapsed ? (
            <MenuUnfoldOutlined className='trigger' onClick={toggleSidebar} />
          ) : (
            <MenuFoldOutlined className='trigger' onClick={toggleSidebar} />
          )}
        </Header>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
