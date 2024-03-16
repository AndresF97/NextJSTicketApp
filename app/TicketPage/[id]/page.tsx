import TicketForm from "@/app/(components)/TicketForm";

type TicketParams = {
    params:{
        id:string
    }
}
type TicketComp = {
    updateTicketdata:{
        foundTicket:object 
    }
    params:{
        id:string
    }
}

export default async function TicketPage({params}:TicketParams){
    const getTicketById = async(id:string)=>{
        try{
            const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,{
                cache:'no-store'
            })
            if(!res.ok){
                throw new Error('Ticket Data not found!!')
            }
            return res.json()
        }catch(err){
            return err
        }
    }
    const EDITMODE:boolean = params.id === "new" ? false : true;
    let updateTicketData;
    if(EDITMODE){
        updateTicketData = await getTicketById(params.id)
        updateTicketData = updateTicketData.foundTicket
    }else{
        updateTicketData = {
            _id: "new"
        }
    }
    return(
        <TicketForm ticket={updateTicketData}/>
    )

}



