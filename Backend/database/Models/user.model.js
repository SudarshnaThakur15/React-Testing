const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  type: { type: String }, // Type of activity, e.g., 'visit', 'draft_booking', 'completed_booking'
  hotelId: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Hotel' },
   // Reference to a Hotel document
  date: { type: Date,
     default: Date.now } // Date when the activity occurred
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' }, // Role field
  activities: [ActivitySchema], // Embedding Activity schema
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }] // References to Booking documents
});

const User = mongoose.model('User', UserSchema);
const Activity = mongoose.model('Activity', ActivitySchema);




