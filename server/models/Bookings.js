const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema ({
  entry_time :[Date],
  exit_time :[Date]
})

module.exports = mongoose.model('Booking', BookingSchema)