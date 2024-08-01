const mongoose=require("mongoose")

//this is for rooms of the hotel
const RoomSchema = new mongoose.Schema({
  type: String, // e.g., Single, Double, Suite
  price: Number,
  amenities: [String], // e.g., ["Wi-Fi", "TV", "Air Conditioning"]
  isAvailable: { 
    type: Boolean, default: true 
  },
  pictures:{
    type:[String],
  },
  description: String // Optional description of the room
});



//hotel schema
const hotelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:255
    },
    location:{
        type:String,
        required:true,
        maxlength:255
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    amenities: {
        type: String,
    },
    price_range: {
        type: String,
        maxlength: 50
    },
    images:{
        type:[String],
    },
    contact: {
        type:[Number],
    },
    rooms: [RoomSchema], // Embedding Room schema
    description: String // Optional description of the hotel
})
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
