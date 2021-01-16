import SimpleDate from "../interfaces/SimpleDate";
import SpacePoint from "../interfaces/SpacePoint";
import { TimeMachine } from "../entities/TimeMachine";
import calculateSpaceTime from "./CalculateSpaceTime";

const synchronizePulsars = (timeMachine:TimeMachine) => {
    
    /**
     * CALC
     * feito
     */
    let spaceTime = calculateSpaceTime(timeMachine)
     
    return Math.sqrt(timeMachine.currentPosition.x**2 +
         timeMachine.currentPosition.y**2 +
         (timeMachine.currentPosition.z**2/spaceTime));
}

export default synchronizePulsars;
