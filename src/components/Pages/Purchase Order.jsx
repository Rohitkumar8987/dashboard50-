// import { newSelectedRowKeys} from '@ant-design/icons';
import React, {useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table ,Popover,Button,DatePicker, Space} from 'antd'
import{MdOutlineKeyboardArrowDown} from 'react-icons/md'

import { Link } from 'react-router-dom';




  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };




export default function PurchaseOrder() {
  const [selected, setSelected] = useState('all');
  // const [selectedRowKeys , setSelectedRowKeys] = useState([]);

  const handleSelected = (value) => {
    setSelected(value)
  }

  const items = (
    <div>
      <p>Details</p>
      <p>Remove</p>
      <p>Edit</p>
    </div>
    
  );
   
  const content = (
    <div>
      <p>Email purchase order to vendor</p>
     
    </div>
  );
  const pops = (
    <div>
      <p>Download to PDF</p>
     
    </div>
  );

 
  const menu = [
    {id: 1, name: 'All 234', codename: 'all' },
    {id: 2, name: 'Warehouse 234', codename: 'warehouse' },
    {id: 3, name: 'Dropship 234', codename: 'dropship' },
    {id: 4, name: 'Placed 234', codename: 'placed' },
    {id: 4, name: 'Shipped 234', codename: 'shipped' },
    {id: 5, name: 'Recived 234', codename: 'recived' },
  
 
  ]
  const data = []
  for (let i = 0; i < 46; i++) {
    data.push(
      {
        key: i,
        createdby:'Philip Marshall',
        date:'09/07/2022',
       p0:'123456',
       vendorname:'Craftmade(528)157-4215',
       threshold:'Green',
       toldprice:'$1234.00',
        status: ' Recived',
       
       
       
      },
    )
  }

  const columns = [
    
    {
      title: 'created by'.toUpperCase(),
      dataIndex: 'createdby',
      key: 'createdby',
    },
    {
      title: 'date'.toUpperCase(),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'P0#'.toUpperCase(),
      dataIndex: 'p0',
      // key: 'p0',
      render: (text) => <Link to={`/purchaseorder/${text}`}>#{text}</Link>
    },
    {
      title: ' vendorname'.toUpperCase(),
      dataIndex: 'vendorname',
      key: 'vendorname',
    },
    {
      title: 'threshold'.toUpperCase(),
      dataIndex: 'threshold',
      key: 'threshold',
    },
    {
      title:'toldprice'.toUpperCase(),
      dataIndex:'toldprice',
      key:'toldprice',
    },
    {
      title: 'status'.toUpperCase(),
      dataIndex: 'status',
      key: 'status',
    },
   
    // {
    //   key:''
    //   render :()=>(
       
    //   )
    // },
   
    {
      key: 'operation',
      render: () => (
          <pops >
            <span className=''style={{marginLeft:'-60px',cursor: "pointer",fontSize:".7rem", border:'1px solid #94a3b8',padding:'8px', borderRadius:'15px'}}>
           Warehouse
            </span>
          </pops>
       
      ),
          },
    {
      key: 'operation',
      render: () => (
          <span
            menu={{
              content,
            }}
          >
            <label className=''style={{marginLeft:'-30px',cursor: "pointer",fontSize:".7rem"}}>
            <Popover content={content} title="">
                  <Button type=""><svg id="Mail" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path id="Path_24" data-name="Path 24" d="M3.538,4H15.846a1.543,1.543,0,0,1,1.538,1.538v9.231a1.543,1.543,0,0,1-1.538,1.538H3.538A1.543,1.543,0,0,1,2,14.769V5.538A1.543,1.543,0,0,1,3.538,4Z" transform="translate(0.308 -0.154)" fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <path id="Path_25" data-name="Path 25" d="M17.385,6,9.692,11.385,2,6" transform="translate(0.308 -0.615)" fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                  <rect id="Rectangle_65" data-name="Rectangle 65" width="20" height="20" fill="none"/>
                </svg></Button>
                </Popover>
                </label>
          </span>
       
      ),
          },
    {
      key: 'operation',
      render: () => (
          <span
            menu={{
              pops,
            }}
          >
            <label className=''style={{marginLeft:'-60px',cursor: "pointer",fontSize:".7rem"}}>
            <Popover content={pops} title="">
                  <Button type="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.846" height="14.846" viewBox="0 0 14.846 14.846">
  <g id="download-2" transform="translate(0.5 0.5)">
    <path id="Path_9" data-name="Path 9" d="M16.846,15v3.077a1.538,1.538,0,0,1-1.538,1.538H4.538A1.538,1.538,0,0,1,3,18.077V15" transform="translate(-3 -5.769)" fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_10" data-name="Path 10" d="M7,10l3.846,3.846L14.692,10" transform="translate(-3.923 -4.615)" fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <line id="Line_4" data-name="Line 4" y1="9.231" transform="translate(6.923)" fill="none" stroke="#94a3b8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
</svg>
                  </Button>
                </Popover>
                </label>
          </span>
       
      ),
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
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Purchase Orders</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <Link to="/purchase/new" className='border-0 text-white' style={{textDecoration:"none" ,padding:"5px",background: "#28589A", borderRadius: "5px"}}>+ Purchase Order</Link>
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
        <div className='d-flex  align-items-center p-1 ' style={{ margin:"0 0 0 44%", gap:"5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
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
        <span className="fs-5 fw-bold">Purchase Order 234</span>
      </div>
     {/* <Link to="/purchase/old" style={{textDecoration:"none"}}> */}
      <Table dataSource={data} columns={columns}  rowSelection={{}}/>
      {/* </Link> */}
      </div>
      }
     
    </>
  )
}
