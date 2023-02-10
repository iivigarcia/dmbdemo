import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "./App.css";
import logo from './logo.png';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr7vLIqxc_rGCMSBcvyYKN8yUoQ5L4Fqo",
  authDomain: "dmbdemo-745.firebaseapp.com",
  projectId: "dmbdemo-745",
  storageBucket: "dmbdemo-745.appspot.com",
  messagingSenderId: "452964366581",
  appId: "1:452964366581:web:d8869f2ffd713484e7adbc",
  measurementId: "G-5LJZ683NPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <FloatingWhatsApp style={{height:'0px'}} phoneNumber={"1137966352"} chatMessage = {"¡Hola! ¿Cómo podemos ayudarte?"}statusMessage={"En línea"} placeholder={"Escribí un mensaje"} avatar={logo} accountName={"Diaz Mayer & Brie"} />
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
