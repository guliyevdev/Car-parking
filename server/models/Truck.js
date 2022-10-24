const mongoose = require('mongoose')
const { Schema } = mongoose
// const Booking = require('./Bookings')
const BookingSchema = new Schema ({
    entry_time :[String],
    exit_time :[String]
  })
  
const TruckSchema = new Schema ({
    number: String,
    booking: BookingSchema,
    status: Boolean
})

module.exports = new mongoose.model('Truck', TruckSchema)