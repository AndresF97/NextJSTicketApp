import TicketForm from "@/app/(components)/TicketForm";

interface TicketParams {
    params:{
        id:string
    },
    updateTicketdata:{
        foundTicket:object 
    } 
}
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
const TicketPage: React.FC<TicketParams> = async ({params})=>{
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

export default TicketPage;