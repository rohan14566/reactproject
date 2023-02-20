import React from 'react'
import Moviecard from '../Components/moviecard'
import Palace from '../Components/Palace'
import Palace1 from '../Components/Palace1'
import { Link } from 'react-router-dom'
import CollapsibleExample from '../Components/Appbar'; 
export default function Bollywood() {
  return (
    <>
    <CollapsibleExample/>
     <h2 id='latest'>Bollywood</h2>
    <div id='check'></div>
    <Link to="/Newpage" className='link'>
    <div className="building">
    <Moviecard 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhISfdq0gN_9Q2Orkio1XCAs6QYoNUJDl3A&usqp=CAU"
    heading="Joshua Tree Overnight Adventure"
    para="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
    />
      <Moviecard 
    imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLr7dpKHsSCXG6EABk-v-6KVgrnfuHmAikJb0FBPMRbrmfy43V70IPn197icW7rO5olg&usqp=CAU"
    heading="Joshua Tree Overnight Adventure"
    para="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
    />
      <Moviecard 
    imgsrc="https://stat2.bollywoodhungama.in/wp-content/uploads/2016/02/salman-Khan-header.jpg"
    heading="Joshua Tree Overnight Adventure"
    para="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
    />
    </div><br/>
    <h2 id='latest1'>Latest Articles</h2>
    <div className="build">
    <Palace 
    imgsrc="https://s.studiobinder.com/wp-content/uploads/2020/01/Best-Dinner-Scenes-in-Movie-HIstory-Cinematic-Dinner-Scenes-and-Table-Scenes.jpg"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://s.studiobinder.com/wp-content/uploads/2020/01/Best-Dinner-Scenes-in-Movie-HIstory-Cinematic-Dinner-Scenes-and-Table-Scenes.jpg"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
        <Palace 
    imgsrc="https://s.studiobinder.com/wp-content/uploads/2020/01/Best-Dinner-Scenes-in-Movie-HIstory-Cinematic-Dinner-Scenes-and-Table-Scenes.jpg"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
     <Palace 
    imgsrc="https://s.studiobinder.com/wp-content/uploads/2020/01/Best-Dinner-Scenes-in-Movie-HIstory-Cinematic-Dinner-Scenes-and-Table-Scenes.jpg"
    title="Catch waves with an adventure guide"
    paragraph="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-"
    />
    <div className="separate"> <span>Advertisment</span></div>
    </div>
    <p id='load'>
    <img height="16px"src='https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=dc40978a-69b4-47c1-8183-8c25163ad05c&api_key=CometServer1&access_token=1667843362_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_236c751ba447a8e9e7309af0ba45ae0da3051a2f' alt=''/>
      Load More
    </p>
    <div id='div'>
      <h4> Title of vertical gallery</h4>
      <p>travel/<span>Augest 27 2017</span></p>
    </div>
   <Palace1/>
   </Link>
    </>
  )
}
