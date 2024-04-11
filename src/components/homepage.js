import React from 'react'
import home from "../components/homepage.module.css"
import Navbar from './navbar'
import Image from "next/image";
import "../components/chain.css"


function homepage() {
  return (
    <div className={home.homeMain}>
      <div className={home.sec1}>
      <div className={home.titleSame}>All Chains, One Solution</div>
      <div className={home.titleSame}>Smart-Disperse Your Crypto Transactions!</div>
      <p className={home.peraSame}>Smart-Disperse is the most widely used, extensible, secure cross- chain communications network. Build truly cross-chain applications using the Smart-Disperse Protocol.</p>
      <div className={home.hLaunchMain}>
      <button className={home.hLaunch}>Build ➔</button>
      <button className={home.hLaunch}>Bridge ➔</button>
      </div>
      </div>
      <div className={home.sec2}>
        <div className={home.divheadertag}>
          <div className={home.divblock23}></div>
          <h3 className={home.chains}>Supported Chains</h3>
          <div className={home.divblock23}></div>
        </div>
     
        <article className="wrapper">
        <div className="marquee">
          <div className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
          </div>

          <div aria-hidden="true" className="marqueegroup">
          <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb33c9240a54fa0c0161_Base.svg" width={80} height={100}></Image>Base
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/65e09ab37ff439cc89a664e5_Mode%20Network.svg" width={80} height={100}></Image>Mode
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/646ceb35bd74dc737a9116e7_Scroll.svg" width={80} height={100}></Image>Scroll
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d96c0388563ae674a42_Optimism.svg" width={80} height={100}></Image>Optimism
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
              <Image src="https://assets-global.website-files.com/63996d8b3c061af402fa0609/64606d95c004d57477b749e5_Ethereum.svg" width={80} height={100}></Image>Ethereum
            </div>
         
          </div>
        </div>
      </article>

    
      </div>
    
    </div>


  )
}

export default homepage