const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI||'mongodb://db:27017'||'mongodb://127.0.0.1:27017/TicketApp')
mongoose.Promise = global.Promise

const ticketSchemas = new mongoose.Schema({
    title:String,
    description:String,
    category:String,
    progress:Number,
    priority: Number,
    status: String,
    active:Boolean
},{
    timestamps:true
})

const Ticket = mongoose.models.ticket ||mongoose.model("ticket", ticketSchemas);
module.exports = Ticket;