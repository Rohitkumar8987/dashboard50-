// import { newSelectedRowKeys} from '@ant-design/icons';
import React, {} from 'react'
import {RiSearchLine} from 'react-icons/ri'
import { Table ,} from 'antd'



import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};




export default function Reports() {

  const data = []
  for (let i = 0; i < 1; i++) {
 
    
  };

 
 
  return (
    <>
      <div className="p-3 d-flex justify-content-between align-items-center" style={{background: "#f1f5f9"}}>
        <span style={{font: "normal normal bold 30px/36px Inter"}}>Reports</span>
        <div className='d-flex' style={{ gap: "10px"}}>
        <div className='position-relative d-flex align-items-center p-1' style={{gap: "5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff"}}>
          <RiSearchLine />
          <input type="text" placeholder='Search...'  className='ps-1' style={{border: "none", outline: "none", font: "normal normal medium 14px/16px Inter", color: "#94A3B8"}}/>
        </div>
          
        </div>
      </div>
      <div className="p-3 d-flex" style={{background: "#f1f5f9"}}>
      
        <div className='d-flex  align-items-center p-1 ' style={{ margin:"0 0 0 87%", gap:"5px", border: "1px solid #E2E8F0",borderRadius: "5px" , background: "#fff",}}>
<Space direction="vertical" style={{}}>
    <DatePicker onChange={onChange} style={{border:'none',borderRadius:"10px"}} />
  </Space>
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
     
      <div className=""  style={{ background:"#E2E8F0"}} >
      <Table dataSource={data}   rowSelection={{}} style={{display:"flex",height:"90vh",width:"100%"}}/>
      </div>
    </>
  )
}
