import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';


export default function Estimates() {
  return (
    <div className='d-fex' style={{justifyItems:"center",height:"100vh",justifyContent:'center'}}>
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link to="/quotes/" type="primary" style={{fontWeight:"bold",textDecoration:"none",padding:"6px",background:"#28589A",color:"#fff",borderRadius:"5px",}}>Back Next</Link>}
  />
  </div>
  )
}
