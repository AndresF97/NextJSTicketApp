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
  const {tickets} = await getTickets()
  console.log(tickets)
  return (
   <div className="p-5">
    {/* the 'lg'/'xl' class is media query that listens for a specific length of the page */}
    <div className="lg:grid grid-cols-2 xl:grid-cols-4">
    <TicketCard />
    <TicketCard />
    <TicketCard />
    <TicketCard />
    </div>
   </div>
  )
}
export default Home;
