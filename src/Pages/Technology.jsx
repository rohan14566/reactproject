import React from 'react'
import Palace from '../Components/Palace'
import CollapsibleExample from '../Components/Appbar'; 
import { Link } from 'react-router-dom'
export default function Fitness() {
  return (
    <>
    <CollapsibleExample/>
 <h2 id='late'>Technology</h2>
 <Link to="/Newpage" className='link'>
    <div className="build1">
    <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07IUb0OzG0365As3s0fCmyBntUj9ud7FWo94A5s9I4k5G2KGR75IlZOYIdCkTNiHQ94A&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_8JtYAXJRemQbNQG_rMXP9fCWkDLFZzAGuLGB6cUq5poRFN5bjWCJhy89EfrGRuq-KA&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGcOSeh4G-LSzzurQdBa3YgIgtdaQi2aoFw&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
     <Palace 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3ZeF0LCY1wCbmfzCV8n3C44Zz00yZkjIWw&usqp=CAU"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
    <div className="separate"> <span>Advertisment</span></div>
    </div>
    </Link>
    </>

  )
}
