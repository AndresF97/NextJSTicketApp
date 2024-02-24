interface TicketPageProps {
    params:{
        id: number
    }
}
const TicketPage: React.FC<TicketPageProps> = ({params})=>{
    return(
        <h1>Ticket Page {params.id}</h1>
    )

}

export default TicketPage;