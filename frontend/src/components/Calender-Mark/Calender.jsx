import Calendar from "react-calendar";
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import './Calender.css'

export default function Calender() {
  // Local state to manage free slots
  const [freeSlots, setFreeSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00");

  // Handle date change
  const handleDateChange = (date) => setSelectedDate(date);

  // Add new free slot
  const addFreeSlot = () => {
    const newSlot = {
      date: selectedDate.toDateString(),
      time: selectedTime,
    };

    // Avoid duplicate slots
    if (!freeSlots.find(slot => slot.date === newSlot.date && slot.time === newSlot.time)) {
      setFreeSlots((prev) => [...prev, newSlot]);
    }
  };

  // Highlight slots on the calendar
  const isHighlighted = (date) =>
    freeSlots.some((slot) => slot.date === date.toDateString());

  return (
    <div>
      <h1>Slot Booking System</h1>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={({ date }) =>
          isHighlighted(date) ? "highlighted-slot" : ""
        }
      />
      <div style={{ marginTop: "10px" }}>
        <label>
          Select Time:{" "}
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          />
        </label>
        <button onClick={addFreeSlot} style={{ marginLeft: "10px" }}>
          Add Free Slot
        </button>
      </div>
      <div>
        <h3>Free Slots:</h3>
        <ul>
          {freeSlots.map((slot, index) => (
            <li key={index}>
              {slot.date} - {slot.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}