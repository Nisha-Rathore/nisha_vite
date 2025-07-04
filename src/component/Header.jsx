import React from "react";
export default function Header () {
    return (
        <>
        <div style={{ display:"flex",justifyContent:"space-between",paddingBottom:"0px"}}>
          <div style={{paddingRight:"600px"}}>
              <img src="https://www.aischolars.in/_next/image?url=%2Fassets%2Fimg%2Flogo%2Flogo_dark.png&w=640&q=75" alt="" srcset="" width={"200px"} />
          </div>
          <div>
               <ul style={{listStyle:"none",display:"flex",gap:"40px",fontWeight:"bold"}}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Career</li>
                    <li>Cantact</li>
               </ul>
          </div>
          </div>
        </>
    )
}
