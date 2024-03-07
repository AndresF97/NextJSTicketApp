"use client"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react";
interface TicketFormData {
    title: string, 
    description:string,
    progress:number,
    priority:number,
    status:string,
    category:string
}
const TicketForm: React.FC = ()=>{
    const startingTicketData: TicketFormData  = {
        title:"",
        description:"",
        progress:0,
        priority:1,
        status:"not started",
        category:"Harware Problem"
    };
    const handleChange = (event:ChangeEvent<HTMLInputElement| HTMLTextAreaElement>):void =>{
        const {value, name} = event.target;
        setFormData({...startingTicketData, [name]:value})
    }
    const [formData, setFormData] = useState<TicketFormData>(startingTicketData);
    return (<div className="flex justify-center">
        <form>
            <h3>Create Your Ticket</h3>
            <label htmlFor="title">Title</label>
            <input 
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            required={true}
            value={formData.title}
            />
        </form>
    </div>
    )
}

export default TicketForm;