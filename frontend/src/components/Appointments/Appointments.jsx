import "./Appointments.css";
import React from "react";

export default function Appointments({ notary_appointment_list }) {
    return (
        <div className="appointment">
            <h1>My Appointments</h1>
            {notary_appointment_list.map((appointment, index) => (
                <div className="meet" key={index}>
                    <table>
                        <tr>
                            <td className="left">
                                <p>{appointment.title}</p>
                            </td>
                            <td className="mid">
                                <p>{appointment.date_time}</p>
                            </td>
                            <td className="right">
                                <button className="doc">DOCUMENT</button>
                                <button className="join">JOIN</button>
                            </td>
                        </tr>
                    </table>
                </div>
            ))}
        </div>
    );
}
