import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter,Router ,useHistory} from 'react-router-dom';
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
    <div className="p-2  justify-content-between " style={{height:"100vh",background: "#f1f5f9" ,overflow:"scroll"}}>
    <span  style={{width:"100%",font: "normal normal bold 30px/36px Inter",textDecoration:'none',marginLeft:"20px",color:'#000'}}>
      <Link to="/vendors/" > 
       <svg xmlns="http://www.w3.org/2000/svg" padding="5px" width="25" height="15.414" fontWeight="bold" viewBox="0 0 25 15.414">
  <g id="arrow-left" transform="translate(-4.5 -4.293)">
    <line id="Line_2" data-name="Line 2" x1="14" transform="translate(5 12)" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
    <path id="Path_1" data-name="Path 1" d="M12,19,5,12l7-7" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
  </g>
</svg>
</Link>
 New Vendor</span>
    
    <div className=""style={{}}>   
    <div className="" style={{background:"white",marginLeft:"50px",marginTop:"30px", padding:"30px",width:"40%",border:"1px solid #94A3B8",borderRadius:"", }}>
        <h2 style={{padding:'0px',marginTop:"5px"}}>Vendor Details</h2>
    <div className=""style={{marginTop:"30px",width:"100%",fontSize:"25px",fontWeight:"bold"}}>
        <label htmlFor=""style={{marginLeft:"8.rem",padding:"10px",display:"block", marginBottom:"08px"}}>Vendor Name</label>
        <input type="text" placeholder=''style={{width:"100%",height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Phone</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"20px",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Email</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Address</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"20px",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>City</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>State</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"20px",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Zip Code</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="">
        <div className="">
            <h2 style={{marginTop:"30px"}}>Free Freight Conditions</h2>
        </div>
        <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"20px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Free Freight Allowance</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"20px",display:'block',fontSize:"1.1rem",fontWeight:"bold"}}>Minimum Order Amount </label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
    <div className="" style={{marginTop:"20px"}}>
    <div className="first">
          <span style={{fontSize:'1.3rem',fontWeight:"600",marginTop:"40px"}}>Free fright Date</span>
          </div>
          <div className="checkbox" style={{display:"flex",flexDirection:"column" ,marginTop:"10px",padding:"5px",fontSize:"1.2rem" ,fontWeight:"600",gap:"3px"}}>
            
            <span className="lang"><input type="checkbox" value="mon" />Mon</span>

            <span className="lang"><input type="checkbox" value="tue" />Tue</span>
           
            <span className="lang"><input type="checkbox" value="wed" />Wed</span>

            <span className="lang"><input type="checkbox" value="thu" />Thu</span>

            <span className="lang"><input type="checkbox" value="fri" />Fri</span>

            <span className="lang"><input type="checkbox" value="sat" />Sat</span>

            <span className="lang"><input type="checkbox" value="sun" />Sun</span>

            <span className="lang"><input type="checkbox" value="n/a" />N/A</span>
          
      </div>
      </div>
      <div className="">
      <div className="">
        <span style={{marginTop:"20px",fontSize:"1.5rem",fontWeight:"600"}}>Dropship Policy</span>
      </div>
      <div className=""style={{marginTop:"1px",width:"100%",fontSize:"17px",fontWeight:"bold"}}>
        <label htmlFor=""style={{padding:"10px",display:"block", marginBottom:"01px"}}>Policy #</label>
        <input type="text" placeholder=''style={{width:"100%",height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
      <div className=""style={{marginTop:"1px",width:"100%",fontSize:"17px",fontWeight:"bold"}}>
        <label htmlFor=""style={{padding:"10px",display:"block", marginBottom:"01px"}}>Warranty Info #</label>
        <input type="text" placeholder=''style={{width:"100%",height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{marginTop:"10px",}}>
    <div className="">
        <span style={{marginTop:"10px",fontSize:"1.5rem",fontWeight:"600"}}>Website Info</span>
      </div>
    <div className="" style={{marginTop:"20px",}}>
        <span style={{fontSize:"1.5rem",fontWeight:"600"}}>Website URL</span>
      </div>
      <div className="d-flex justify-content-between " style={{width:"100%"}}>
    <div className=""style={{marginTop:"10px",width:'48%',}}>
        <label htmlFor="" style={{display:'block',fontSize:"1.0rem",fontWeight:"bold"}}>Username</label>
        <input type="text" placeholder=''  style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}}/>
    </div>
    <div className="" style={{width:'48%',}}>
        <label htmlFor=""style={{marginTop:"10px",display:'block',fontSize:"1.0rem",fontWeight:"bold"}}>Password</label>
        <input type="text" placeholder='' style={{width:'100%',height:"2.4rem",borderRadius:"5px",border:"1px solid #94A3B8"}} />
        </div>
    </div>
      </div>
      <div className="" style={{width:"130px",padding:"15px",marginTop:"20px",marginLeft:"80px"}}>
        <Link style={{textDecorationLine:"none", fontWeight:"600"}}> + Add more</Link>
        </div>
        <div className=""style={{marginTop:"8px"}}>
          <span style={{display:"block",fontSize:"1.1rem",fontWeight:"600",padding:"3px",marginLeft:"10px"}}>Note</span>
          <textarea placeholder="" type="text" style={{width:"100%",marginTop:"10px",height:"70px"}}/>
        </div>
        <div className="d-flex" style={{flexDirection:"row-reverse",marginTop:"20px",gap:"10px",marginRight:"30px",}}>
            <div className="" style={{justifyContent:"center",marginLeft:"5px",textAlign:'center'}}>
        <Link className="" type="submit" style={{textDecoration:"none",border:"1px solid #94A3B8",fontWeight:"600",padding:"5px",fontSize:"1.1rem",borderRadius:"8px",width:"60px",justifyItems:"center",color:'#fff',background:'#28589A'}} >Save</Link>
        </div>
        <div className=""style={{marginTop:"5px",textAlign:'center'}}>
        <Link type=" " id="linkId" style={{textDecoration:"none",border:"1px solid #94A3B8",padding:"5px",fontWeight:"600",fontSize:"1.2rem",borderRadius:"8px",justifyItems:"center",}} onMouseOver={handleOver} onMouseOut={handleOut}>Cancel</Link>
        </div>
        </div>
      </div>
    </div>
    </div> 
     </div>
    </div>

       
        </>
  );
};
