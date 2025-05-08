import { Menu } from 'antd'
import React from 'react'
import { AppstoreOutlined, UserAddOutlined, FolderOutlined, MailOutlined,  FolderAddOutlined } from '@ant-design/icons';

function MenuList() {
  return (
    <div style={{margin:"20px 0 0 0"}}>
        <Menu theme='dark' style={{display:"flex", flexDirection:"column", gap:"5px", fontSize:"1rem"}}>
            
            <Menu.Item key="dashboard" icon={<AppstoreOutlined/>}>
                Dashboard
            </Menu.Item>

            <Menu.Item key="student" icon={<UserAddOutlined />}>
                Student
            </Menu.Item>

            <Menu.Item key="create" icon={<FolderAddOutlined />}>
                Create
            </Menu.Item>

            <Menu.Item key="course" icon={<FolderOutlined />}>
                Course
            </Menu.Item>

            <Menu.Item key="message" icon={<MailOutlined />}>
                Message
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default MenuList