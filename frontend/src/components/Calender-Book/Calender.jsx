import React, { useState } from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import './Calender.css'


export default function Calender({ freeSlots = [], onSlotSelect = () => {} }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const times = freeSlots
      .filter((slot) => slot.date === date.toDateString())
      .map((slot) => slot.time);
    setAvailableTimes(times);
  };

  const isHighlighted = (date) =>
    freeSlots.some((slot) => slot.date === date.toDateString());

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={({ date }) =>
          isHighlighted(date) ? "highlighted-slot" : ""
        }
      />
      <div>
        {selectedDate && availableTimes.length > 0 && (
          <div>
            <h3>Available Times on {selectedDate.toDateString()}:</h3>
            <ul>
              {availableTimes.map((time, index) => (
                <li key={index}>
                  {time}{" "}
                  <button
                    onClick={() => onSlotSelect({ date: selectedDate, time })}
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {selectedDate && availableTimes.length === 0 && (
          <p>No slots available on {selectedDate.toDateString()}.</p>
        )}
      </div>
    </div>
  );
}

Calender.propTypes = {
  freeSlots: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ),
  onSlotSelect: PropTypes.func,
};
