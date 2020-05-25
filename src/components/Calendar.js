import React from "react"
import CalendarHeader from "./CalendarHeader"
import CalendarBody from "./CalendarBody"

function Calendar(props) {
    return (
        <table className="table table-bordered">
            <CalendarHeader days={props.days}/>
            <CalendarBody days={props.days} handleClick={props.handleClick}/>
        </table>
    )
}

export default Calendar