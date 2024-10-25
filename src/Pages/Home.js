import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Bulba from '../Assets/Image/Bulba.png';
import Email from '../Components/Email';
function Home() {
  return (
    <section className='whole-page'>
    <div className='flex-column'>
        <img width = "200px"src={Bulba}/>
        <h3>Let's make Bulba a STAR ⭐</h3>
        <h1 style={{marginTop: "-15px"}}>BulbaStar Project</h1>
        <p style={{marginTop: "-10px"}} className='text-center'>Are you a Bulba STAN?</p>
    </div>
    <div>
        <Email/>
    </div>
    <div className='flex-column merch'>
        <h5 style={{textDecoration: "underline"}}>Potential Merch Ideas</h5>
        <p>Blind Boxes</p>
        <p>Figurines</p>
        <p>Keychains</p>
        <p>Apparel</p>
        <p>...and more!</p>

    </div>
    
    <div className='flex-column'>
        <p>Be apart of Bulba’s Journey!</p>
        <a href='https://www.tiktok.com/@bulba_irn' target='_blank'><h6 style={{marginTop: "-10px"}}>@bulba_irn on TikTok</h6></a>
    </div>
    </section>
  );
}

export default Home;