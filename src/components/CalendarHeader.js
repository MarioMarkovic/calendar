import React from "react"

function CalendarHeader(props) {
    return (
        <thead className="thead-light">
            <tr>
                <td></td>
                { props.days.map((day, index) => {
                    return <th key={index} className="text-center" scope="col">{day.dayOfWeek} <br/>{day.dayObj.format("DD.MM.YYYY.")}</th>
                }) }
            </tr>
        </thead>
    )
}

export default CalendarHeader