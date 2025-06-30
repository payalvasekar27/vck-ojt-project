


// / src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

import "./HomePage.css"
import Header from '../components/Header/Header';

// Add more image imports if needed
function HomePage() {
  return (
    <div className="college">
 <Header/>
   
    <div className="page-container" style={{overflow:"auto"}}>
      {/* Hero/Banner Section with Image */}
      <div className="hero-section">
        <img src="/Images/college-banner.png" alt="Vivekanand College Campus" className="hero-banner-image" />
        <div className="hero-overlay-text">
          <h1>Welcome to Vivekanand College!</h1>
          <p>Your journey to excellence starts here.</p>
          <Link to="/admissions" className="btn hero-btn">Apply Now!</Link> {/* Updated link */}
        </div>
      </div>
      <p>
        **Vivekanand College<b></b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.
      </p>
      <p>
        At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.
      </p>
      <h2>Why Choose Vivekanand College?</h2>
      <ul>
        <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
        <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
        <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
        <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
        <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
      </ul>
      {/* Image Gallery Section */}
      <h2>Campus Life & Facilities</h2>
       <div className="image-gallery"> 
        <img src="/Images/students.jpeg" alt="campus View 1" />
        <img src="/Images/campus-life.jpg" alt="Campus View 2" />
        </div>
        {/* Add more <img> tags for other images if you have them */}
      
      <p>
        Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.
      </p>
      <div className="button-wrapper">
        <p>Ready to explore our courses?</p>
        <Link to="/courses" className="btn">Explore Courses</Link> {/* Linked to /courses */}
      </div>
    </div>
     </div>
  );
}
export default HomePage;