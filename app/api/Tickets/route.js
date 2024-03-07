import Ticket from "@/app/[models]/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        console.log(req.body.formData)
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData)
        return NextResponse.json({message:"Ticket Created"},{status:200})
    }catch(err){
        return NextResponse.json({message:"Error", err},{status: 500})
    }
}

export async function GET(){
    console.log('Get items')
    try{
        let tickets = await Ticket.find();
        return NextResponse.json({tickets},{status:200})
    }catch(err){
        return NextResponse.json({message:"Error", err},{status: 500})
    }
}