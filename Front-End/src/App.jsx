import { useState } from 'react'
import './index.css';
import Navbar from './Components/Navbar'
import Hotelcard from './Components/Hotelcard';
function App() {
  const [count, setCount] = useState(0)

  const hotelCards = [];

  // Use a for loop to populate the array with Hotelcard components
  for (let i = 0; i < 10; i++) {
    hotelCards.push(
      <Hotelcard
        key={i}
        image="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="The Grand Hotel"
        description="Experience luxury at The Grand Hotel, with top-notch amenities and exceptional service."
        priceRange="$200 - $500"
      />
    );
  }

  return (
    <>
        <Navbar/>
        <div className="whitespace-nowrap justify-around items-center  bg-black-1000 overflow-x-auto">
         {hotelCards}</div>
         


    </>
  )
}

export default App
