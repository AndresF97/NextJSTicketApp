import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const PriorityDisplay: React.FC = ()=>{
    return (
        <div className="flex justify-center align-baseline">
            <FontAwesomeIcon icon={faFire} className="text-red-400"/>
            <FontAwesomeIcon icon={faFire} className="text-red-400"/>
            <FontAwesomeIcon icon={faFire} className="text-red-400"/>
            <FontAwesomeIcon icon={faFire} className="text-red-400"/>
            <FontAwesomeIcon icon={faFire} className="text-red-400"/>
        </div>
    )
}

export default PriorityDisplay