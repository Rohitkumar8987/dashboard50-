import React from 'react'
import { MailOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { useState } from 'react';
function getItem(label, key, icon, children, theme) {
  return {
    key,
    icon,
    children,
    label,
    theme,
  };
} 


export default function Settings() {
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('1');
  
  const onClick = (e) => {
    setCurrent(e.key);
  };
  const items = [
    getItem(
      'Settings',
      'sub1',
      <MailOutlined />,
      [getItem('Option 1', '1'), getItem('Option 2', '2'), getItem('Option 3', '3')],
      theme,
    ),
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ];
  return (
    <>
      <div className="p-5 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Settings</span>
        </div>
         <div className="">
     
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="white"
        items={items}
      />
      </div>
   
    </>
  )
}
