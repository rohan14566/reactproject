import React from 'react'
import Palace from '../Components/Palace'
import CollapsibleExample from '../Components/Appbar'; 
import { Link } from 'react-router-dom'
export default function Fitness() {
  return (
    <>
    <CollapsibleExample/>
 <h2 id='lates'>Fitness</h2>
 <Link to="/Newpage" className='link'>
    <div className="build1">
    <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBKchy6NneNJHnpQQekHQtD2yaoXRJkRcTQ&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://st2.depositphotos.com/1213280/7033/i/600/depositphotos_70335379-stock-photo-young-athletic-woman.jpg"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqD3-1ZndN_jgibj3GsRszgGh2bnFWniA8g&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
     <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ044THVbmIUnI7L7OA1abmyGQR1rlpn_PGCg&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
    <div className="separate"> <span>Advertisment</span></div>
    </div>
    </Link>
    </>
  )
}


