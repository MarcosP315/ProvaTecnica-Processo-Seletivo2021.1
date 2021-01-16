import SimpleDate from "../interfaces/SimpleDate";
import { TimeMachine } from "../entities/TimeMachine";
import calculateTimeBalance from "./CalculateTimeBalance";

const calculateSpaceTime = (timeMachine:TimeMachine) => {
    /**
     * CALC
     * feito
     */
    let timeBalance = calculateTimeBalance(timeMachine)
    
    return Math.sqrt(timeBalance.year**2 + timeBalance.month**2 + timeBalance.day**2);
}

export default calculateSpaceTime;
