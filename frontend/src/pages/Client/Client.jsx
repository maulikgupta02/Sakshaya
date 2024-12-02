import Navbar from '../../components/Navbar/Navbar-client';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from "swiper/react";
 // eslint-disable-next-line
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import Templates from "../../components/notary_templates/Templates"
import React, { useState } from "react";
 // eslint-disable-next-line
import { Formik, Form, Field } from "formik";
import './Client.css'
import * as Yup from "yup";


const PDFUploadSchema = Yup.object().shape({
    file: Yup.mixed()
      .required("A file is required")
      .test(
        "fileType",
        "Only PDF files are allowed",
        (value) => value && value.type === "application/pdf"
      ),
  });



export default function Client(){

    const [uploadStatus, setUploadStatus] = useState("");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append("file", values.file);

    try {
      // Replace with your API endpoint
      const response = await fetch("https://your-api-endpoint/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadStatus("File uploaded successfully!");
        resetForm();
      } else {
        setUploadStatus("Failed to upload the file.");
      }
    } catch (error) {
      setUploadStatus("Error uploading file. Please try again.");
    } finally {
      setSubmitting(false);
    }
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
        <div className='upload'>
        <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h3>Upload PDF with Formik</h3>
      <Formik
        initialValues={{ file: null }}
        validationSchema={PDFUploadSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched, isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="file">Select PDF:</label>
              <input
                id="file"
                name="file"
                type="file"
                accept="application/pdf"
                onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                style={{ display: "block", marginTop: "5px" }}
              />
              {errors.file && touched.file && (
                <div style={{ color: "red", marginTop: "5px" }}>{errors.file}</div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "10px 20px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Uploading..." : "Upload"}
            </button>
          </Form>
        )}
      </Formik>
      {uploadStatus && <p style={{ marginTop: "10px" }}>{uploadStatus}</p>}
    </div>
        </div>

        <Footer/>
        </>
    );
}