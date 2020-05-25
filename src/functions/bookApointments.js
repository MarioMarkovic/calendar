/**
 * @param days 
 * @param amount 
 */
function bookApointments(days, amount) {
    for(let i = 1; i <= amount; i++) {
        let randomDay = Math.floor(Math.random() * Math.floor(days.length));
        let randomAppointment = Math.floor(Math.random() * Math.floor(days[0].appointments.length));

        if(!days[randomDay].appointments[randomAppointment].isDisabled && !days[randomDay].appointments[randomAppointment].isShiftBreak) {
            days[randomDay].appointments[randomAppointment].isBooked = true
            days[randomDay].appointments[randomAppointment].isDisabled = true
        } else {
            bookApointments(days, amount - --i)
            break;
        }
    }
    
    return days
}   

export default bookApointments