import React,{useState} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table,Dropdown} from 'antd'

export default function Quotes() {
 

 
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
        price:'$123.00'
       
        // action: '...'
      },
    )
  }

  const columns = [
    
    {
      title: ' date'.toUpperCase(),
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
      title: 'price'.toUpperCase(),
      dataIndex: 'price',
      key: 'price',
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
    <div className="p-4 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Quotes</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          <button className='border-0 text-white' style={{background: "#28589A", borderRadius: "5px",padding:"5px"}}>Generate from LA</button>
        </div>
      </div>
      <div className="p-3 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
      <span style={{fontSize:".9rem",color:"#94A3B8",marginTop:"-30px"}}>LAST UPDATE: 1WEEK AGO</span>
      </div>
      <div className="p-3" style={{background: "#f1f5f9"}}>
      <div className='p-3 bg-white'>
        <span className="fs-5 fw-bold">Quotes 234</span>
      </div>
      <Table dataSource={data} columns={columns}  rowSelection={{}}/>
      </div>
   </>
  )
}
