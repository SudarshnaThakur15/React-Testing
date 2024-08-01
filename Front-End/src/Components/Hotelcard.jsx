import React from 'react'

function Hotelcard({name,image,description,priceRange}) {
  return (
    <div className="max-w-48  rounded overflow-hidden shadow-lg m-4 inline-block justify-around items-center">
    <img className="w-full" src={image} alt={name} />
    <div className=" px-6 py-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <p className="text-gray-900 text-lg mt-4">{priceRange}</p>
    </div>
  </div>
  )
}

export default Hotelcard