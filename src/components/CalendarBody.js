import React from "react"

function CalendarBody(props) {
    return (
        <tbody>
            { props.days[0].appointments.map((appointment, index) => {
                return <tr key={index}>
                    <td><strong>{appointment.from + " - " + appointment.to}</strong></td>
                    {props.days.map((day, i) => {
                        if(day.appointments[index].isShiftBreak && !day.appointments[index].isDisabled) {
                            return <td key={i} className="bg-secondary text-center"><small>Dnevni odmor</small></td>
                        } else if(day.appointments[index].isBooked) {
                            return <td key={i} className="bg-danger text-center"><small>Zauzeto</small></td>
                        } else if(day.appointments[index].isSelected) {
                            return <td key={i} className="bg-info text-center clickable" onClick={() => props.handleClick(i, index)}><strong>Odabrano</strong></td>
                        } else if(day.appointments[index].isDisabled) {
                            return <td key={i}></td>
                        } else {
                            return <td key={i} className="bg-success text-center clickable" onClick={() => props.handleClick(i, index)}><small>Slobodan termin</small></td>
                        }
                    }) }
                </tr>
            }) }
        </tbody>
    )
}

export default CalendarBody