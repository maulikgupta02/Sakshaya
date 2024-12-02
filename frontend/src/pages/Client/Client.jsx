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
import React, { useState } from "react";
 // eslint-disable-next-line
import { Formik, Form, Field } from "formik";
import './Client.css'

export default function Client(){

  const [freeSlots, setFreeSlots] = useState([
    { date: "Sun Dec 03 2023", time: "09:00" },
    { date: "Sun Dec 03 2023", time: "10:00" },
    { date: "Mon Dec 04 2023", time: "11:00" },
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);

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
    <div className='appointment'>
      <Calender freeSlots={freeSlots} onSlotSelect={handleSlotSelect} />
      <div className='pdf'>
      <DocUpload/>
      </div>
      </div>
      {selectedSlot && (
        <center><div className='book'>
          <h3>Selected Slot:</h3>
          <p>
            {selectedSlot.date.toDateString()} at {selectedSlot.time}
          </p>
          <button>schedule</button>
        </div></center>
      )}
    </div>  
    <ListNotaries/>
        <Footer/>
        </>
    );
}