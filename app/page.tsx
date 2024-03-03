import TicketCard from "./(components)/TicketCard"

export default function Home() {
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
