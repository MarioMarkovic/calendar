import moment from "moment"
import calendarParameters from "../data/calendarParameters"

const { start, end, firstShiftEnd, firstShiftBreak, secondShiftStart, secondShiftBreak } = calendarParameters

/**
 * @param dayObj 
 */
function generateAppointments(dayObj) {
    let appointments = [];
    let isEvenDate = dayObj.date() % 2 === 0 ? true : false 
    let day = dayObj.day()

    for(let i = start; i <= end - 1; i++) {
        let isDisabled = true
        let isShiftBreak = false

        // check if not Sunday and not odd Saturday
        if(day !== 0 && !(day === 6 && !isEvenDate)) {
            if((isEvenDate && i <= firstShiftEnd) || (!isEvenDate && i >= secondShiftStart)) {
                isDisabled = false
            }
        }
        
        if(isEvenDate && i === firstShiftEnd) {
            isDisabled = true
        }   

        let nextAppointmentObj = {
            from: moment( {hour: i} ).add(30, "minutes").format('kk:mm'),
            to: moment( {hour: i + 1 } ).format('kk:mm'),
            isShiftBreak,
            isDisabled,
        }

        if(firstShiftBreak  === i || secondShiftBreak === i) {
            isShiftBreak = true
        }

        let appointmentObj = {
            from: moment( {hour: i} ).format('kk:mm'),
            to: moment( {hour: i} ).add(30, "minutes").format('kk:mm'),
            isShiftBreak,
            isDisabled,
        }

        appointments = [ ...appointments, appointmentObj, nextAppointmentObj ]
    }

    return appointments
}

export default generateAppointments