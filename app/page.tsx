import TicketCard from "./(components)/TicketCard"

const getTickets= async() =>{
  try{
    const res = await fetch('http://localhost:3000/api/Tickets',{
      cache:'no-store'
    })
    return res.json()
  }catch(err){
    console.log("Failed to get Tickets", err)
  }
}
 const Home:React.FC = async () => {
  interface Ticket {
    _id:string,
    title:string,
    description:string,
    category:string,
    progress:number,
    priority: number,
    status: string,
    active:boolean,
    createdAt: string
  }
  const data: { tickets?: Ticket[] }  = await getTickets() 
  const uniqueCategories:string [] = Array.from(new Set(data.tickets?.map(({ category }) => category)));
  return (
   <div className="p-5">
    <div>
      {data.tickets && uniqueCategories?.map((uniqueCategorie, indexCategorie)=>(
        <div key={indexCategorie} className="mb-4">
          <h2>{uniqueCategorie}</h2>
          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {data.tickets?.filter((ticket)=> ticket.category === uniqueCategorie).map((filteredTicket,ticketIndex)=>(
              <TicketCard 
              id={ticketIndex}
              key={ticketIndex}
              ticket={filteredTicket}
              />
            ))}
          </div>
        </div>
      )
      )}
    {/* the 'lg'/'xl' class is media query that listens for a specific length of the page */}
    </div>
   </div>
  )
}
export default Home;
