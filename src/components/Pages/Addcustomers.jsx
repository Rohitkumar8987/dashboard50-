import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter,Router ,useHistory} from 'react-router-dom';
// import "./addvendor.css";
// import { Button } from 'antd';
import Customers from './Customers';

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
    <div className="p-3 " style={{height:"100%",background: "#f1f5f9",}}>
    <span  style={{width:"100%",font: "normal normal 600 30px/36px Inter",textDecoration:'none',marginLeft:"20px",color:'#000'}}>
      <Link to="/customers/" style={{}}> 
       <svg onClick={()=>{'window.history.go(-1)'}}  xmlns="http://www.w3.org/2000/svg" padding="5px" width="25" height="15.414" fontWeight="600" viewBox="0 0 25 15.414">
  <g id="arrow-left" transform="translate(-4.5 -4.293)">
    <line id="Line_2" data-name="Line 2" x1="14" transform="translate(5 12)" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_1" data-name="Path 1" d="M12,19,5,12l7-7" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
</svg>
</Link>
 Add Customer</span>
   
   <div className="">
    <div className="" style={{background:'white',marginLeft:"50px",marginTop:"30px", padding:"30px",width:"30%",border:"1px solid #94A3B8",}}>
        <h2 style={{padding:'0px',marginTop:"5px"}}>Customer Information</h2>
   
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>First Name</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Last Name</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Phone</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Email</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Address</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>City</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>State</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Zip Code</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Type</label>
        <select name="" id="" style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
            <option value="">Builder Referred</option>
        </select>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Builder/Disign license #</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{marginBottom:"7px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Source</label>
        <select name="" id="" style={{marginLeft:"",width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}>
          <option value="">Google</option>
        </select>
       
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginBottom:"7px",marginTop:"20px",display:'block',fontSize:"1.0rem",fontWeight:"600"}}>Sales Person</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
        <div className=""style={{marginTop:"27px"}}>
          <span style={{display:"block",fontSize:"1.0rem",fontWeight:"600",padding:"3px",marginLeft:"10px"}}>Comments</span>
          <textarea placeholder="" type="text" style={{width:"100%",marginTop:"10px",height:"70px"}}/>
        </div>
        <div className="d-flex" style={{flexDirection:"row-reverse",marginTop:"20px",gap:"10px",marginRight:"30px",}}>
            <div className="" style={{justifyContent:"center",marginLeft:"5px",textAlign:'center'}}>
        <Link className="" type="submit" style={{textDecoration:"none",border:"1px solid #94A3B8",fontWeight:"600",padding:"5px",fontSize:"1.0rem",borderRadius:"7px",width:"60px",justifyItems:"center",color:'#fff',background:'#28589A'}} >Save</Link>
        </div>
        <div className=""style={{marginTop:"5px",textAlign:'center'}}>
        <Link type=" " id="linkId" style={{textDecoration:"none",border:"1px solid #94A3B8",padding:"5px",fontWeight:"600",fontSize:"1.2rem",borderRadius:"7px",justifyItems:"center",}} onMouseOver={handleOver} onMouseOut={handleOut}>Cancel</Link>
        </div>
        </div>
        </div>
    </div>
    </div>

       
        </>
  );
};
