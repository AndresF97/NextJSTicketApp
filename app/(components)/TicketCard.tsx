import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./PorgressDisplay";
import StatusDisplay from "./StatusDisplay";
interface CardInfo {
    id:number,
    key:number,
    ticket:object
}
const TicketCard: React.FC<CardInfo> = () => {
    return (
        // Card that displays each tickter
        // 
        <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
            <div className="flex mb-3">
                <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="h-px border-0 bg-page mb-2" />
            <p className="whitespace-pre-wrap">
                this is the ticket desciption! Please do this ticket
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col">
                    <p className="text-sx my-1">10/24/24 10:00PM</p>
                    <ProgressDisplay />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay />
                </div>
            </div>
        </div>
    )
}

export default TicketCard