import React, { useState } from 'react'
import { Layout, } from 'antd';
import Logo from './Logo';
import MenuList from './MenuList';
import HeaderList from './HeaderList';
import { AppstoreOutlined} from '@ant-design/icons';
import { Button } from "antd";

const { Header, Sider} = Layout

function Navbar() {
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
        </Layout>

      </Layout>
    
  )
}

export default Navbar