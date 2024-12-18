import Navbar from '../../components/Navbar/Navbar-client';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import ListNotaries from '../../components/ListNotaries/ListNotaries';
import DocUpload from '../../components/Docupload/DocUpload';
import Calender from '../../components/Calender-Book/Calender'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Templates from "../../components/notary_templates/Templates"
import React, { useState, useEffect, useContext } from "react";
import { MyContext, MyProvider } from '../../context';
 // eslint-disable-next-line
import { Formik, Form, Field } from "formik";
import './Client.css'
import {sendFileToIPFS} from "../../notary-to-ipfs.js"
import Chatbot from '../../components/chatbot/Chatbot';


export default function Client(){

  const [freeSlots, setFreeSlots] = useState([
    { date: "Sun Dec 03 2023", time: "09:00" },
    { date: "Sun Dec 03 2023", time: "10:00" },
    { date: "Mon Dec 04 2023", time: "11:00" },
  ]);
  const { user, setUser, type, setType } = useContext(MyContext);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [notaries, setNotaries] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [hash, setHash] = useState("");
  const [meetlink, setMeetlink] = useState("https://meet.google.com/kwe-dmou-tkf")


  const getHash = async () => {
    if (!uploadedFile) {
        alert('Please select a file first!');
        return;
    }

    try {
        // Upload the file to IPFS
        const result = await sendFileToIPFS([uploadedFile]);
        console.log("IPFS Notary Link: ", result);
        setHash(result.replace('ipfs://', ''));

    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Failed to upload file. Please try again.');
    }
};

  
  const handleFileUpload = (file) => {
    setUploadedFile(file); // Update the parent state
    console.log("Uploaded file:", file);
  };


  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    alert(`You selected ${slot.date.toDateString()} at ${slot.time}`);
  };


    const banner_images=[
        {"image":'/client-hero-1.png',
          "title":'(i) Select a Suitable Notary\nTemplate'},
        {"image":'/client-hero-2.png',
          "title":'(ii) Fill and Upload the\nDocument'},
        {"image":'/client-hero-3.png',
          "title":'(iii) Schedule Appointment'},
        {"image":'/client-hero-4.png',
          "title":'(iv) Connect with our Notary Officer\nand get Notarized'
    }]

    useEffect(() => {
      const fetchNotaries = async (client) => {
          try {
              const response = await fetch(`http://localhost:5000/api/notary-document/retrieve?client=${client}`, {
                  method: "GET", // or POST depending on your API
                  headers: {
                      "Content-Type": "application/json",
                  },
              });

              const data = await response.json();
              setNotaries(data.data); // Assuming the response has a "data" field that holds the notary documents
          } catch (error) {
              console.error("Error fetching notaries:", error);
          }
      };

      fetchNotaries(user);
  }, []); // Empty array means it runs once when the component mounts
  console.log(notaries)


  const bookAppointment = async (notary_username, client_username, date, time) => {
    try {
      // Step 1: Generate the hash
      const hash = await getHash(); // Ensure this returns a valid hash value
      console.log("Hash generated:", hash);
  
      // Step 2: Fetch the Google Meet link
      const meetResponse = await fetch(`http://localhost:5000/api/create-meet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: date, // Ensure date is in YYYY-MM-DD
          time: time, // Ensure time is in HH:MM format
        }),
      });
  
      if (!meetResponse.ok) {
        throw new Error(`Error generating meet link: ${meetResponse.statusText}`);
      }
  
      const { meetLink } = await meetResponse.json(); // Destructure meetLink
      console.log("Meet link generated successfully:", meetLink);
  
      // Step 3: Format the timestamp properly (YYYY-MM-DDTHH:MM)
      const timestamp = `${date}T${time}:00Z`;
  
      // Step 4: Send the appointment booking request
      const appointmentResponse = await fetch(`http://localhost:5000/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notary_username: notary_username,
          client_username: client_username,
          timestamp: timestamp,
          doc: hash, // Use the valid hash value
          meetlink: meetLink, // Use the correct meet link string
        }),
      });
  
      if (!appointmentResponse.ok) {
        throw new Error(`Error booking appointment: ${appointmentResponse.statusText}`);
      }
  
      const data = await appointmentResponse.json();
      console.log("Appointment booked successfully:", data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  
  

    return(
      <>
        <div className='banner'>
        <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        style={{ width: "100%", height: "100vh" }}
        >
        {banner_images.map((image, index) => (
            <SwiperSlide key={index}>
            <div className='directions'
                style={{
                backgroundImage: `url(${image.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
                display: "flex", 
                alignItems: "end", 
                justifyContent: "center"
                }}
            >
                <h1>{image.title}</h1>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
        <div className='nav'>
        <Navbar/>
        </div>
        </div>
        <div className="templates">
        <h1>Templates</h1>
        <Templates/>
        </div>
    <div className='booking'>
    <h1>Book Your Slot</h1>
    <div className='appointmentss'>
      <Calender freeSlots={freeSlots} onSlotSelect={handleSlotSelect} />
      <div className='pdf'>
      <DocUpload onFileUpload={handleFileUpload} />
      </div>
      </div>
      {selectedSlot ? (
        <center><div className='book'>
          <h3>Selected Slot:</h3>
          <p>
            {selectedSlot.date.toDateString()} at {selectedSlot.time}
          </p>
          <button onClick={() => bookAppointment("notary", user, selectedSlot.date.toDateString() , selectedSlot.time)}>schedule</button>
        </div></center>
      ) : (
        <center><div className='book'>
        <h3>Selected Slot:</h3>
        <p>
          No slot selected
        </p>
      </div></center>
      )}
    </div>

    <div className="notaries-list">
            {notaries.length > 0 ? (
                notaries.map((notaryDoc, index) => (
                    <ListNotaries
                        key={index}
                        notary={notaryDoc.notary}
                        hash={notaryDoc.hash}
                        timestamp={notaryDoc.timestamp}
                    />
                ))
            ) : (
                <p>No notary documents found.</p>
            )}
        </div>
        <div className="chat">
        <Chatbot/>
      </div>
      <Footer/>
      </>
    );
}