// import { newSelectedRowKeys} from '@ant-design/icons';
import React, {useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table ,Popover,Button} from 'antd'
import{MdOutlineKeyboardArrowDown} from 'react-icons/md'

import { Link } from 'react-router-dom';
import { Collapse, } from 'antd';


const { Panel } = Collapse;





export default function Customers() {
 
  // const [selectedRowKeys , setSelectedRowKeys] = useState([]);


  const onChange = (key) => {
    console.log(key);
  };
  const data = []
  for (let i = 0; i <3; i++) {
    data.push(
      {
        key: i,
        Id: '753948',
        description: 'Two Light Varity by capital lighting from the arther collection in Burnished Bronze finish',
        QTY: "2",
        price: '$120',
       
      },
    )
  }
  const columns = [
    
    {
      title: 'Id '.toUpperCase(),
      dataIndex: 'Id',
      key: 'Id',
    },
    {
      title: 'description'.toUpperCase(),
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'QTY'.toUpperCase(),
      dataIndex: 'QTY',
      key: 'QTY',
    },
    {
      title: 'price'.toUpperCase(),
      dataIndex: 'price',
      key: 'price',
    },
   
   
  ]

 
  return (
    <>
      <div className="p-5 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Want Book</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <Link to="/purchase/new" className='border-0 text-white' style={{textDecoration:"none" ,padding:"5px",background: "#28589A", borderRadius: "5px"}}>+ Purchase Order</Link>
        </div>
      </div>
      <div className="p-3 d-flex" style={{background: "#f1f5f9"}}>
      
        <div className='d-flex  align-items-center p-1 ' style={{ margin:"0 0 0 88%", gap:"5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
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
    
      <div className="p-3"style={{height:"100vh"}} >
  
    <Collapse collapsible="icon" defaultActiveKey={['1']} onChange={onChange} >
      <Panel header={<div className='d-flex justify-content-between'><span>Craftmade | PO Conditions: Free Freight anytime of week or total PO (No constraints)</span>
      <label htmlFor="" style={{marginLeft:"40%",marginTop:"5px",}}>$560.00</label>
      <button onClick={() => alert("404 Error")} style={{background:"#00CAA6",fontSize:"1.1rem",padding:"10px",borderRadius:"10px",border:"none",fontWeight:"600"}}>Convert to P0</button>
      </div>} key="1"style={{fontWeight:'600',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header={<div className='d-flex justify-content-between'><span>Capital | P0 Conditions: Free Fright of P0=$500 any time of the week</span>
      <label htmlFor="" style={{marginLeft:"47%",marginTop:"5px",}}>$560.00</label>
      <button onClick={() => alert("404 Error")} style={{background:"#00CAA6",fontSize:"1.1rem",padding:"10px",borderRadius:"10px",border:"none",fontWeight:"600"}}>Convert to P0</button>
      </div>} key="2"style={{fontWeight:'600',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header={<div className='d-flex justify-content-between'><span>Quorum| P0 Conditions: Free Fright at $99 anytime of week</span>
      <label htmlFor="" style={{marginLeft:"52%",marginTop:"5px",}}>$560.00</label>
      <button onClick={() => alert("404 Error")} style={{background:"#00CAA6",fontSize:"1.1rem",padding:"10px",borderRadius:"10px",border:"none",fontWeight:"600"}}>Convert to P0</button>
      </div>} key="3"style={{fontWeight:'600',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      <Panel header={<div className='d-flex justify-content-between'><span>Bulbrite| P0 Conditions:Minimum Order must be $100 Free Fright Allowence at $800 </span>
      <label htmlFor="" style={{marginLeft:"39%",marginTop:"5px",}}>$560.00</label>
      <button onClick={() => alert("404 Error")} style={{background:"#00CAA6",fontSize:"1.1rem",padding:"10px",borderRadius:"10px",border:"none",fontWeight:"600"}}>Convert to P0</button>
      </div>} key="4"style={{fontWeight:'600',fontSize:"1.5rem"}}>
        <p>{<Table dataSource={data} columns={columns} rowSelection={{}}/>}</p>
      </Panel>
      
      
     
    </Collapse>
</div>

    </>
  )
}
