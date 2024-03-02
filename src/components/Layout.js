// src/components/Layout.js
import React from 'react';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

const CustomLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={100} style={{ background: '#ddd' }}>
    
      </Sider>
      <Layout>
        <Header style={{ background: '#ddd', padding: 0 }}>Header</Header>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
