import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function P0() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-center justify-content-between" style={{height: "66px", background: '#f3f3f3'}}>
      <div className='d-flex ms-2 align-items-center' style={{gap: "10px"}}>
        <i className='fa-solid fa-arrow-left' onClick={() => navigate('/purchaseorder')} style={{cursor: 'pointer'}} />
        <span className='ms-2 fw-bolder'>#{id}</span>
      </div>
      <div className='d-flex me-2' style={{gap: "10px"}}>
        {[{name: 'Remove', icon: 'fa-trash'}, {name: 'Email PO to vendor', icon: 'fa-envelope'}, {name: 'Download PDF', icon: 'fa-download'}, {name: 'Edit', icon: 'fa-pen'}].map(item => (
          <>
          <button className='border-0 rounded-1' style={{ padding: '5px 10px 5px 10px'}}>
            <i className={`fa-solid ${item.icon} me-2`}/>
            <span>{item.name}</span>
          </button>
          </>
        ))}
      </div>
      </div>
      <div className="" >
      <div className="p-4" style={{width:"100%",height:''}}>
      <div className=" p-3"style={{width:"16%",background:"#fff" ,border:"2px solid #f1f2f9"}}>
        <h3 style={{justifyContent:'start',display:"flex"}}>P0 Details</h3><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Create by</label>
        <label htmlFor=""style={{fontWeight:"600"}}>Phillip Marshall</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Created Date</label>
        <label htmlFor=""style={{fontWeight:"600"}}>30/07/2022</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>P0#</label>
        <label htmlFor=""style={{fontWeight:"600"}}># 123434</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Terms</label>
        <label htmlFor=""style={{fontWeight:"600"}}>30/07/2022</label>
       </div>
       </div>
      <div className=" p-3"style={{width:"16%",height:'',background:"#fff" ,border:"2px solid #f1f2f9"}}>
        <h3 style={{justifyContent:'start',display:"flex"}}>Vendor Details</h3><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Name</label>
        <label htmlFor=""style={{fontWeight:"600"}}>Jonathan Matthews</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 20px 0 20px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Address</label>
        <label htmlFor=""style={{fontWeight:"600"}}>841Laskeshore Dr port orfod Oregen</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Contact</label>
        <label htmlFor=""style={{fontWeight:"600"}}>(155)810-8363</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Account#</label>
        <label htmlFor=""style={{fontWeight:"600"}}># 122343</label>
       </div>
       </div>
     
      <div className=" p-3"style={{width:"16%",height:'',background:"#fff" ,border:"2px solid #f1f2f9"}}>
        <h3 style={{justifyContent:'start',display:"flex"}}>Status</h3><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Status</label>
        <label htmlFor=""style={{fontWeight:"600",background:"#E2F8F0",color:"#0BA811" ,fontSize:"0.8rem",borderRadius:"10px",padding:"5px" ,justifyItems:"center"}}>Received</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 20px 0 20px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Received Date</label>
        <label htmlFor=""style={{fontWeight:"600"}}>30/07/2022</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Warehouse/Dropship</label>
        <label htmlFor=""style={{fontWeight:"500",fontSize:"1.0rem",borderRadius:"10px",padding:"2px" ,justifyItems:"center",display:"flex"}}>Dropship</label>
       </div><hr/>
       <div className="d-flex" style={{justifyContent:"space-between",fontSize:"1.3rem",margin:"0 25px 0 25px"}}>
        <label htmlFor="" style={{color:"#94A3B8",fontWeight:"500"}}>Tracking Number</label>
        <label htmlFor=""style={{fontWeight:"600"}}> 1232435</label>
       </div>
       </div>
     
      <div className="">
        helo
      </div>
      </div>
      </div>
    
     
    </>
  )
}
