import "./Appointments.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Appointments({ notary_appointment_list }) {
    const navigate = useNavigate();

    const handleJoinMeeting = (appointment) => {
        // Generate a unique meeting ID using appointment details
        const meetingId = `meeting-${appointment.title.replace(/\s+/g, '-')}-${Date.now()}`.toLowerCase();
        
        // Navigate to video call page with meeting details
        navigate('/video-call', {
            state: {
                meetingId,
                appointmentTitle: appointment.title,
                dateTime: appointment.date_time
            }
        });
    };

    return (
        <div className="appointment">
            <h1>My Appointments</h1>
            {notary_appointment_list.map((appointment, index) => (
                <div className="meet" key={index}>
                    <table>
                        <tbody>
                            <tr>
                                <td className="left">
                                    <p>{appointment.title}</p>
                                </td>
                                <td className="mid">
                                    <p>{appointment.date_time}</p>
                                </td>
                                <td className="right">
                                    <button className="doc">DOCUMENT</button>
                                    <button 
                                        className="join"
                                        onClick={() => handleJoinMeeting(appointment)}
                                    >
                                        JOIN
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}