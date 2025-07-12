import React from "react";
export default function Footer() {
    return (
        <>
         <div style={{color:"white",backgroundColor:"blue",padding:"70px 0px"}}>
        <h1>Join Us on Our Journey</h1>
        <p style={{fontSize:"larger"}}>Let's create something amazing together.</p>
        <input type="button" value="Get in Touch 🡲" placeholder="" style={{fontSize:"20px",padding:"13px",borderRadius:"8px",color:"blue"}} />
      </div>
      <div style={{color:"white",backgroundColor:"darkblue",padding:"70px 0px",display:"flex"}}>
        <div>
       <img src="https://www.aischolars.in/_next/image?url=%2Fassets%2Fimg%2Flogo%2Flogo_dark.png&w=640&q=75" alt="" srcset="" width={"250px"} />
       <p>Innovative software solutions for modern businesses drive efficiency, <br />streamline operations, and enhance user experiences.</p>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670129.png" alt="" srcset="" style={{width:"30px",paddingRight:"10px"}}/>
      <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" srcset="" style={{width:"30px",paddingRight:"10px"}} />
      <img src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png" alt="" srcset="" style={{width:"30px",paddingRight:"10px"}}/>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670133.pngzs" alt="" srcset="" style={{width:"30px",paddingRight:"8px"}}/>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670133.png" alt="" srcset="" style={{width:"30px",paddingRight:"10px"}}/>
      <img src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" alt="" srcset="" style={{width:"30px",paddingRight:"10px"}}/>
      </div>
      <div>
       <dl>
        <dt>Quick Links</dt>
        <dd>Home</dd>
        <dd>About</dd>
        <dd>Services</dd>
        <dd>Technologies</dd>
        <dd>Career</dd>
       </dl>
      </div>
      <div>
        <dl>
          <dt>Services</dt>
          <dd>Custom Software</dd>
          <dd>Web Development</dd>
          <dd>Mobile Development</dd>
          <dd>Digital Marketing</dd>
          <dd>HR Solutions</dd>
        </dl>
      </div>
      <div>
        <dl>
          <dt>Contact</dt>
          <dd>shop no 5, 2nd floor,
          block s-22, sanjay place Agra -282002</dd>
          <dd>8909330839
          7455030839</dd>
          <dd>info@aischolars.com</dd>
        </dl>
      </div>
      </div>
      
        </>
    )
}