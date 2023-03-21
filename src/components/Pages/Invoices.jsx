// import { newSelectedRowKeys} from '@ant-design/icons';
import React, {useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table ,Popover,Button} from 'antd'
import{MdOutlineKeyboardArrowDown} from 'react-icons/md'

import { Link } from 'react-router-dom';





export default function Invoices() {
  const [selected, setSelected] = useState('all');
  // const [selectedRowKeys , setSelectedRowKeys] = useState([]);

  const handleSelected = (value) => {
    setSelected(value)
  }

  const items = (
    <div>
      <p>Details</p>
      <p>Download PDF</p>
      <p>Remove</p>
      <p>Edit</p>
    </div>
    
  );
   
 

 
  const menu = [
    {id: 1, name: 'All 234', codename: 'all' },
    {id: 2, name: 'Paid 234', codename: 'Paid' },
    {id: 3, name: 'Due 234', codename: 'Due' },
    {id: 4, name: 'Overdue 234', codename: 'Overdue' },
   
  
 
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push(
      {
        key: i,
        invoice:' 312345',
        total:"$12300",
        status:"Overdue",
        customer:"Julic mcCoy",
        issuedon:'09/07/2022',
        paid:'09/07/2022',
     
      
       
       
       
      },
    )
  }

  const columns = [
    
    {
      title: 'invoice'.toUpperCase(),
      dataIndex: 'invoice',
      render: (text) => <Link to={`//${text}`}>#{text}</Link>
    },
    {
      title: 'total'.toUpperCase(),
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'status'.toUpperCase(),
      dataIndex: 'status',
       key: 'status',
    },
    {
      title: ' customer'.toUpperCase(),
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'issuedon'.toUpperCase(),
      dataIndex: 'issuedon',
      key: 'issuedon',
    },
    {
      title:'paid'.toUpperCase(),
      dataIndex:'paid',
      key:'paid',
    },
    
   
   

    {
      key: 'operation',
      render: () => (
          <span
            menu={{
              items,
            }}
          >
            <label className=''>
            <Popover content={items} title="">
                  <Button type=""style={{marginLeft:'-20px',fontWeight:'bold',cursor: "pointer",fontSize:"1.5rem"}}>...</Button>
                </Popover>
                </label>
          </span>
       
      ),
          },
        
  
  ]
 
  return (
    <>
      <div className="p-3 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Invoice</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <Link to="" className='border-0 text-white' style={{textDecoration:"none" ,padding:"10px",background: "#28589A", borderRadius: "5px"}}>+ Create Invoice</Link>
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
        <div className='d-flex  align-items-center p-1 ' style={{ margin:"0 0 0 64%", gap:"5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
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
        <span className="fs-5 fw-bold">Invoices 234</span>
      </div>
     {/* <Link to="/purchase/old" style={{textDecoration:"none"}}> */}
      <Table dataSource={data} columns={columns}  rowSelection={{}}/>
      {/* </Link> */}
      </div>
      }
      
    </>
  )
}
