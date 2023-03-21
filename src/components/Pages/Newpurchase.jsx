import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
// import { BrowserRouter,Router ,useHistory} from 'react-router-dom';
// import "./addvendor.css";
// import { Button } from 'antd';

export default function Addvendor() {

//   const history=  useHistory();

//   const handleHistory = ()=>{
//     history.push('/src/components/Pages/rs.jsx')
//   };

    const handleOver = () => {
        const elem = document.getElementById('linkId');
        elem.style.background = "#28589A";
        elem.style.color = "#f1f5f9";
    }
    const handleOut = () => {
        const elem = document.getElementById('linkId');
        elem.style.background = "#f1f5f9";
        elem.style.color = "#28589A";
    }

  return (
  <>
    <div className="p-3" style={{height:"100vh",background: "#f1f5f9",}}>
    <span  style={{width:"100%",font: "normal normal bold 30px/36px Inter",textDecoration:'none',marginLeft:"20px",color:'#000'}}>
      <Link to="/PurchaseOrder/" > 
       <svg  xmlns="http://www.w3.org/2000/svg" padding="5px" width="25" height="15.414" fontWeight="bold" viewBox="0 0 25 15.414">
  <g id="arrow-left" transform="translate(-4.5 -4.293)">
    <line id="Line_2" data-name="Line 2" x1="14" transform="translate(5 12)" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_1" data-name="Path 1" d="M12,19,5,12l7-7" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
</svg>
</Link>
 New Purchase Order</span>
    
   
    <div className="" style={{background:"white",marginLeft:"50px",marginTop:"30px", padding:"30px",width:"35%",border:"1px solid #94A3B8",}}>
        <h2 style={{padding:'0px',marginTop:"5px"}}>Purchase Order Details</h2>
   
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Created by</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"20px",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Crated date</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>P0#</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:"100%"}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Vendor</label>
        <select name="" id="" style={{marginLeft:"",width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
          <option value="">Vendor Name here min order $500.00</option>
        </select>
    </div>
    </div>
   <div className="" style={{display:"flex",justifyContent:'space-between',marginTop:"20px",fontSize:"1.5rem",fontWeight:"bold"}}>
   <p style={{marginLeft:"20px"}}>Items</p>
   <p style={{marginRight:"20px"}}>Total Price:$0.00</p>
   </div>
    <div className="" style={{display:"flex",width:"100%",}}>
    <div className=""style={{marginTop:"20px",width:"100%"}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold",}}>Items</label>
        <select name="" id="" style={{marginLeft:"",width:'110%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
          <option value=""></option>
        </select>
    </div>
    <div className=""style={{marginTop:"20px",width:"100%"}}>
        <label htmlFor="" style={{marginLeft:"2.9rem",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>QTY</label>
        <select name="" id="" style={{marginLeft:"2.9rem",width:'50%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
          <option value=""></option>
        </select>
    </div>
    <div className=""style={{marginTop:"20px",width:"100%",justifyContent:"end"}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Price</label>
        <select name="" id="" style={{marginLeft:"",width:'90%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
          <option value=""></option>
        </select>
    </div>
    </div>
      <div className="" style={{width:"130px",padding:"15px",marginTop:"10px",marginLeft:"10px"}}>
        <Link style={{textDecorationLine:"none", fontWeight:"600"}}> + Add more</Link>
        </div>
        
        <div className="d-flex" style={{flexDirection:"row-reverse",marginTop:"20px",gap:"10px",marginRight:"30px",marginBottom:"40px"}}>
            <div className="" style={{justifyContent:"center",marginLeft:"5px",textAlign:'center'}}>
        <Link className="" type="submit" style={{textDecoration:"none",border:"1px solid #94A3B8",fontWeight:"600",padding:"5px",fontSize:"1.1rem",borderRadius:"8px",width:"60px",justifyItems:"center",color:'#fff',background:'#28589A'}} >Save</Link>
        </div>
        <div className=""style={{marginTop:"5px",textAlign:'center'}}>
        <Link type=" " id="linkId" style={{textDecoration:"none",border:"1px solid #94A3B8",padding:"5px",fontWeight:"600",fontSize:"1.2rem",borderRadius:"8px",justifyItems:"center",}} onMouseOver={handleOver} onMouseOut={handleOut}>Cancel</Link>
        </div>
        </div>
      
   
    </div>
    </div>

       
        </>
  );
};
