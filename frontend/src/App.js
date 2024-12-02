import './App.css';
import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calender from './components/Calender-Book/Calender';
import ListNotaries from './components/ListNotaries/ListNotaries';
import DocUpload from './components/Docupload/DocUpload'
import Home from './pages/Home'

function App() {
  // const [freeSlots, setFreeSlots] = useState([
  //   { date: "Sun Dec 03 2023", time: "09:00" },
  //   { date: "Sun Dec 03 2023", time: "10:00" },
  //   { date: "Mon Dec 04 2023", time: "11:00" },
  // ]);
  // const [selectedSlot, setSelectedSlot] = useState(null);

  // const handleSlotSelect = (slot) => {
  //   setSelectedSlot(slot);
  //   alert(`You selected ${slot.date.toDateString()} at ${slot.time}`);
  // };

  return (
    <>
    <Home/>
    {/* <div classname='booking'>
    <div className='appointment'>
      <h1>Appointment Slot Booking</h1>
      <Calender freeSlots={freeSlots} onSlotSelect={handleSlotSelect} />
      {selectedSlot && (
        <div>
          <h3>Selected Slot:</h3>
          <p>
            {selectedSlot.date.toDateString()} at {selectedSlot.time}
          </p>
        </div>
      )}
    </div>
    <div className='pdf'>
      <DocUpload/>
    </div>
    </div>
    <div className='schedule'>
      <button>schedule</button>
    </div>
    </> */}
    </>
  );
}

export default App;
