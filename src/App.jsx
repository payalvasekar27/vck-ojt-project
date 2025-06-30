

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AdmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import CoursesPage from './pages/CoursesPage';

import NotFoundPage from './pages/NotFoundPage';

import DeveloperInfoPopup from './components/DeveloperInfo/DeveloperInfoPopup';
import Footer from './components/Footer/Footer';

import ChatbotComponent from "./components/Chatbot/ChatbotComponent";

function App () {
    const [showPopup, setShowPopup] = useState(true);
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return(
        <>
        <div>
            
            {/* your main application content */}
            <DeveloperInfoPopup
             show={showPopup}
             onclose={handleClosePopup}
             studentName="Payal Babaso Vasekar"
             studentphotoUrl="../Images/payal.jpg" //path to their photo
             uniqueMessage="Learned so much during thid OJT! This app showcase my indepedent coding and deployment skills"
             />
            </div>

            <div>
                <Router>
                    <main style={{ padding: '1rem '}}>
                    <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/about" element={<AboutPage/>} />
                    <Route path="/admission" element={<AdmissionPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                    <Route path="/courses" element={<CoursesPage/>} />
                    <Route path="/*" element={<NotFoundPage/>} />
                    </Routes>
                    <ChatbotComponent/>
                    </main>
                
            <Footer/>
        </Router>
        </div>
        </>
    );
};

export default App;