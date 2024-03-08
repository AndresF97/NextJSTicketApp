import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PriorityType {
    priority: number
}

const PriorityDisplay: React.FC <PriorityType>= (priority)=>{
    return (
        <div className="flex justify-center align-baseline">
            <FontAwesomeIcon 
            icon={faFire} 
            className={`pr-1 ${priority.priority > 0 ? "text-red-400":"text-slate-400" }`}
            />
            <FontAwesomeIcon 
            icon={faFire} 
            className={`pr-1 ${priority.priority > 1 ? "text-red-400":"text-slate-400" }`}
            />
            <FontAwesomeIcon 
            icon={faFire} 
            className={`pr-1 ${priority.priority > 2 ? "text-red-400":"text-slate-400" }`}
            />
            <FontAwesomeIcon 
            icon={faFire} 
            className={`pr-1 ${priority.priority > 3 ? "text-red-400":"text-slate-400" }`}
            />
            <FontAwesomeIcon 
            icon={faFire} 
            className={`pr-1 ${priority.priority > 4 ? "text-red-400":"text-slate-400" }`}
            />
        </div>
    )
}

export default PriorityDisplay