import React from 'react'
import '../App.css'
import { Instagram } from 'react-bootstrap-icons'
import img1 from './img/img1.jpg'

const Home = () => {
    return (
        <>
            <div className="pImg">
                <img src={ img1 } alt="pic_1"/>
            </div>
        <div className="bgUtama">
            <p>
                This is still under maintenance but now you can enjoy our Mixtapes
            </p>
            <p>  
            You can find us on :
            </p>
            <a href="https://www.instagram.com/callmeibal/"><Instagram color="primary" size={20} />   Ibal</a>
            <br/>
            <br/>
            <a href="https://www.instagram.com/tmrizkyasdani/"><Instagram color="primary" size={ 20 }/>   TM</a>
            </div>
            </>
    )
}

export default Home
