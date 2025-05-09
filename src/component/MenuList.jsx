import { Menu } from 'antd'
import React from 'react'
import { AppstoreOutlined, UserAddOutlined, FolderOutlined, MailOutlined,  FolderAddOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


function MenuList() {
    const navigate = useNavigate()
  return (
    <div style={{margin:"20px 0 0 0"}}>
        <Menu theme='dark' style={{display:"flex", flexDirection:"column", gap:"5px", fontSize:"1rem"}} >
            
            <Menu.Item key="dashboard" icon={<AppstoreOutlined/>} onClick={() => navigate("/dashboard")}>
                Dashboard
            </Menu.Item>

            <Menu.Item key="student" icon={<UserAddOutlined />} onClick={() => navigate("/student")}>
                Student
            </Menu.Item>

            <Menu.Item key="create" icon={<FolderAddOutlined />} onClick={() => navigate("/create-course")}>
                Create
            </Menu.Item>

            <Menu.Item key="course" icon={<FolderOutlined />} onClick={() => navigate("/courses")}>
                Course
            </Menu.Item>

            <Menu.Item key="message" icon={<MailOutlined />} onClick={() => navigate("/message")}>
                Message
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default MenuList