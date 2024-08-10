import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hotelcard from './Hotelcard'
import axios from 'axios'

function Home() {
 const [hotels,setHotels]=useEffect([])
 useEffect(()=>{
  var allHotels=axios.get('http://localhost:5000/hotels')
   setHotels(allHotels);

 },[])

  return (
    <div>
          <div className=" justify-around items-center  bg-black-1000 ">
      <Hotelcard
        image="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="The Grand Hotel"
        description="Experience luxury at The Grand Hotel, with top-notch amenities and exceptional service."
        priceRange="$200 - $500"
      />
    
      </div>
    </div>
  )
}

export default Home