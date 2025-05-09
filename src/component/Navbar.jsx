import React, { useState } from 'react';
import Logo from './Logo';
import { Layout, } from 'antd';
import MenuList from './MenuList';
import HeaderList from './HeaderList';
import { AppstoreOutlined} from '@ant-design/icons';
import { Button } from "antd";

const { Header, Sider, Content} = Layout


function Navbar ({ children })   {
  const [collapsed, setcollapsed] = useState(false)

  return (
    
      <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} className='sidebar' style={{height:"100vh"}}>
          <Logo />
          <MenuList />
        </Sider>

        <Layout>
          <Header style={{backgroundColor:"rgb(224, 224, 224)", }}>
            <Button
              className='toggle'
              onClick={()=>setcollapsed(!collapsed)}
              icon={<AppstoreOutlined/> }
            />
          </Header>
          <Content style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }} 
            >
            { children }
          </Content>
        </Layout>

      </Layout>
    
  )
}

export default Navbar