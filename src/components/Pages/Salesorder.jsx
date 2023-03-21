// import { newSelectedRowKeys} from '@ant-design/icons';
// import { DownOutlined } from '@ant-design/icons';
import React, {useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table,Dropdown ,Space} from 'antd'
import { DotChartOutlined } from '@ant-design/icons/lib/icons';
// import { icon } from '@fortawesome/fontawesome-svg-core';
// import{BsFillCalendar2DateFill} from 'react-icons/bs'
import{MdOutlineKeyboardArrowDown} from 'react-icons/md'
// import Builder from './Builder';
// import Business from './Business';
// import { Components } from 'antd/es/date-picker/generatePicker';
// import Walking from './Walking';
// import Direct from './Direct';

// import { Dropdown } from 'antd';




export default function Customers() {
  const [selected, setSelected] = useState('all');
  const [selectedRowKeys , setSelectedRowKeys] = useState([]);

  const handleSelected = (value) => {
    setSelected(value)
  }
  const items = [
    {
      key: '1',
      label: 'Details',
    },
    {
      key: '2',
      label: 'Remove',
    },
    {
      key: '2',
      label: 'Edit',
    },
  ];

 
  const menu = [
    {id: 1, name: 'All 234', codename: 'all' },
    {id: 2, name: 'Pickup 234', codename: 'pickup' },
    {id: 3, name: 'Dropship 234', codename: 'dropship' },
    {id: 4, name: 'Local Delivery 234', codename: 'localdelivery' },
  
 
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push(
      {
        key: i,
        date:'09/07/2022',
      customer:'Philip Marshall',
       itemsordered:'3',
       ordercost:'$100.00',
       source:'website',
       type:'pickup',
        salesperson: 'George James',
        neededby:'22/07/2022',
        status:'in progess',
       
        // action: '...'
      },
    )
  }

  const columns = [
    
    {
      title: 'date'.toUpperCase(),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'customer'.toUpperCase(),
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'items ordered'.toUpperCase(),
      dataIndex: 'itemsordered',
      key: 'itemsordered',
    },
    {
      title: ' ordercost'.toUpperCase(),
      dataIndex: 'ordercost',
      key: 'ordercost',
    },
    {
      title: 'source'.toUpperCase(),
      dataIndex: 'source',
      key: 'source',
    },
    {
      title:'type'.toUpperCase(),
      dataIndex:'type',
      key:'type',
    },
    {
      title: 'salesPerson'.toUpperCase(),
      dataIndex: 'salesperson',
      key: 'salesperson',
    },
    {
      title: 'needed by'.toUpperCase(),
      dataIndex: 'neededby',
      key: 'neededby',
    },
    {
      title: 'status'.toUpperCase(),
      dataIndex: 'status',
      key: 'status',
    },
    // {
    //   dataIndex: 'action',
    //   key: 'action',
    // },
    {
      key: 'operation',
      render: () => (
          <Dropdown
            menu={{
              items,
            }}
          >
            <span className=''style={{cursor: "pointer", fontWeight:"bolder",fontSize:"1.2rem"}}>...</span>
          </Dropdown>
       
      ),
    },
  ]
   
  
  return (
    <>
      <div className="p-3 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Sales Orders</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <button className='border-0 text-white' style={{background: "#28589A", borderRadius: "5px",padding:"7px"}}>+ New Sales Order</button>
        </div>
      </div>
      <div className="p-3 d-flex" style={{background: "#f1f5f9"}}>
        <div className='d-flex' style={{gap: "25px"}}>
        {
          menu?.map(item => (
            <span className='' style={{cursor: "pointer",  padding: "5px 15px", borderRadius:"20px", textDecoration: "none", color: selected === item.codename ? 'white' : "black", border: "1px solid #e2e8f0", background: selected === item.codename ? "#28589A" : "white" }} onClick={() => handleSelected(item.codename)}>{item.name}</span>
          ))
        }
        </div>
        <div className='d-flex  align-items-center p-1 ' style={{ margin:"0 0 0 1170px", gap:"5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
        <svg id="Calendar" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <g id="calendar-7" transform="translate(2.769 2.077)">
    <rect id="Rectangle_51" data-name="Rectangle 51" width="12.462" height="12.462" rx="2" transform="translate(0 1.385)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <line id="Line_22" data-name="Line 22" y2="2.769" transform="translate(9 0)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <line id="Line_23" data-name="Line 23" y2="2.769" transform="translate(3.462 0)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <line id="Line_24" data-name="Line 24" x2="12.462" transform="translate(0 5.538)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
  <rect id="Rectangle_53" data-name="Rectangle 53" width="18" height="18" fill="none"/>
</svg>
          <input type="" placeholder='Last Month'  className='ps-1'  style={{ width:"140px",border: "none", outline: "none", font: "normal normal medium 14px/1px Inter", color: "#94A3B8"}}/>
       <MdOutlineKeyboardArrowDown/>
        </div>
        <div className='p-1 position-relative d-flex justify-content-center  align-items-center 'style={{borderRadius:"5px", marginLeft:"15px",background:"#fff", width:"36px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <g id="Group_10" data-name="Group 10" transform="translate(-1265 -95)">
    <g id="Filter" transform="translate(1265 95)">
      <g id="align-center" transform="translate(2.769 4.846)">
        <line id="Line_18" data-name="Line 18" x1="8.308" transform="translate(2.077 2.769)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <line id="Line_19" data-name="Line 19" x1="12.462" transform="translate(0 0)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <line id="Line_20" data-name="Line 20" x1="5.538" transform="translate(3.462 5.538)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
        <line id="Line_21" data-name="Line 21" x1="2.769" transform="translate(4.846 8.308)" fill="none" stroke="#475569" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <rect id="Rectangle_52" data-name="Rectangle 52" width="18" height="18" fill="none"/>
    </g>
  </g>
</svg>
      
        </div>
      </div>
      {selected === "all" && 
      <div className="p-3" style={{background: "#f1f5f9"}}>
      <div className='p-3 bg-white'>
        <span className="fs-5 fw-bold">All Sales Order 234</span>
      </div>
      <Table dataSource={data} columns={columns}  rowSelection={{}}/>
      </div>
      }
     
    </>
  )
}
