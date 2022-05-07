import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import Router from '../router';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
function AppLayout() {
  const { pathname } = useLocation();
  return (
    <Layout className='container'>
      <Header style={{ background: '#fff' }}>
        <div className='logo' />
      </Header>
      <Layout className='has-sider'>
        <Sider style={{ background: '#fff' }}>
          <Menu mode='inline' defaultSelectedKeys={[pathname]}>
            <Menu.Item key='/'>
              <Link to='/' className='link'>
                <Icon type='mail' />
                首页
              </Link>
            </Menu.Item>
            <Menu.Item key='/sort'>
              <Link to='/sort' className='link'>
                <Icon type='appstore' />
                拖拽页面
              </Link>
            </Menu.Item>

            <Menu.Item key='/todo'>
              <Link to='/todo' className='link'>
                <Icon type='form' />
                todo
              </Link>
            </Menu.Item>
            <Menu.Item key='/list'>
              <Link to='/list' className='link'>
                <Icon type='form' />
                list
              </Link>
            </Menu.Item>
            <SubMenu
              title={
                <span className='submenu-title-wrapper'>
                  <Icon type='setting' />
                  React API
                </span>
              }
            >
              <Menu.ItemGroup title='hooks'>
                <Menu.Item key='/hooks/useState'>
                  <Link to='/hooks/useState' className='link'>
                    useState
                  </Link>
                </Menu.Item>
                <Menu.Item key='/hooks/useEffect'>
                  <Link to='/hooks/useEffect' className='link'>
                    useEffect
                  </Link>
                </Menu.Item>
                <Menu.Item key='/hooks/useCallback'>useCallback</Menu.Item>
                <Menu.Item key='/hooks/useRef'>useRef</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '16px 24px 0' }}>
          <Router></Router>
        </Content>
      </Layout>
    </Layout>
  );
}

AppLayout.propTypes = {};

export default AppLayout;
