import React from "react";
import Navbar from "../../components/Navbar/Navbar-notary";
import Footer from "../../components/Footer/Footer";
import Appointments from "../../components/Appointments/Appointments"
import Calender from "../../components/Calender-Mark/Calender";

export default function Notary(){
    const notary_appointment_list = [
        { title: "Property Signing", date_time: "2024-12-03 10:00 AM" },
        { title: "Will Authentication", date_time: "2024-12-04 02:00 PM" },
        { title: "Loan Agreement", date_time: "2024-12-05 11:30 AM" }
    ];
    return(
        <>
            <Navbar/>
            <Appointments notary_appointment_list={notary_appointment_list}/>
            <Calender/>
            <Footer/>
        </>
    );
}