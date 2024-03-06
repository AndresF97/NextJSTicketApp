const {Schema, model} = require('mongoose')

const ticketSchemas = new Schema({
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

const Ticket = model("ticket", ticketSchemas);

module.exports = Ticket