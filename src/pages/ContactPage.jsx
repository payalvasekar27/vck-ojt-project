import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './ContactPage.css';
    const ContactPage = () => {
        return(
            <div className="echo">
             <Header/>
        <div style={{ padding: '1rem'}} className="home-scroll-container">

            <h1 className='h1'>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions , programs, or compus life, our team is here to help.</p>
            <h2>General Wnquiries</h2>

            <p>
               Vivekanand College Main Campus nagala park <br />,2130, E ward, Tarabai Park, Kolhapur, Maharashtra 416003,India<br />
     Phone: +91 12345 678901 <br />
     Email: <strong>info@vivekanandcollege.edu</strong> <br />
     Office Hours: Monday Friday, 9:00 AM 5:00 PM IST
    </p>


            <h2>Admission Office</h2>
            <p>
               For all admission-related queries regarding undergraduate or postgraduate programs:
     <br /> Phone: +91 9876543210 <br />
     Email: <strong>admissions@vivekanandcollege.edu</strong>
      </p>


            <h2>Student Support Services</h2>
            <p>
                For current student support,academic, Counseling Services or general assistance:
     <br /> Phone: +91 8765432109 <br />
     Email: <strong>studentsupport@vivekanandcollege.edu</strong>
      </p>

            <h2>Find us on the map</h2>
            <p><a href="https://maps.app.goo.gl/q96nQdNvECXDngLk9" target="_blank">View On Google Maps</a></p>
            

            <h2>Send Us a Message</h2>
            <p>[A Contact from with fields for Name, Email, Subject, Message can be added here.]</p>
            {/* <from id="contactForm" className="form-container">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea className='formfield' name="message" rows="3" placeholder="Your Message" required></textarea>
                <button className='cta-button' type="submit">Submit</button>
            </form> */}

       </div>
            <Footer/>
            </div>
            
        )
    }
    export default ContactPage;