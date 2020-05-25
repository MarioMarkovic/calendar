import moment from "moment"
import calendarParameters from "../data/calendarParameters"
import daysOfWeek from "../data/daysOfWeek"
import generateAppointments from "./generateAppointments"
import bookApointments from "./bookApointments"

function generateDays() {
    let days = [];

    for (let i = 1; i <= calendarParameters.numOfdays; i++) {
        let dayObj = moment().add(i, 'days')
        let appointments = generateAppointments(dayObj)

        days = [ ...days, { 
            dayObj,
            dayOfWeek: daysOfWeek[dayObj.day()],
            appointments
        }]
    }

    days = bookApointments(days, 15)

    return days
}

export default generateDays