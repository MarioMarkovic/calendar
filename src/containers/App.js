import React from "react"
import generateDays from "../functions/generateDays"
import Calendar from "../components/Calendar"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            days: [],
            selectedAppointments: []
        }

        this.handleClick = this.handleClick.bind(this)
    }  

    /**
     * @param dayId 
     * @param appointmentId 
     */
    handleClick(dayId, appointmentId) {
        this.setState(prevState => {
            let selectedAppointments = prevState.selectedAppointments
            let days = prevState.days 
            let isSelected = days[dayId].appointments[appointmentId].isSelected

            if(isSelected) {
                selectedAppointments = selectedAppointments.filter(appointment => appointment.dayId !== dayId || appointment.appointmentId !== appointmentId)

                days[dayId].appointments[appointmentId].isSelected = !isSelected   
            } else {
                if(selectedAppointments.length === 2) {
                    alert("Nije moguće rezervirati više od 2 termina tjedno!")
                } else {
                    let found = selectedAppointments.some(appointment => appointment.dayId === dayId)
                    
                    if(found) {
                        alert("Moguće je odabrati samo 1 termin po danu!")
                    } else {
                        selectedAppointments = [ ...selectedAppointments, {
                            dayId: dayId,
                            appointmentId: appointmentId
                        }]
                        
                        days[dayId].appointments[appointmentId].isSelected = !isSelected
                    }
                }
            }

            return {
                days: days,
                selectedAppointments: selectedAppointments
            }

        })
    }

    componentDidMount() {
        this.setState({
            days: generateDays(),
        })
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h1>Kalendar</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            { this.state.days.length === 0 ? "Loading..." : <Calendar days={this.state.days} handleClick={this.handleClick}/> }
                        </div>
                    </div>
                </div>
                <hr />
            </main>
        )
    }
}

export default App