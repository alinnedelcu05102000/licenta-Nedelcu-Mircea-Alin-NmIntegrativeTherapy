import Navbar from "../../components/Navbar/Navbar"
import Hero from '../../components/Hero/Hero'
import AboutImg from '../../images/pexels-kelvin-valerio-810771.jpg';
import Footer from '../../components/Footer/Footer'
import './Contact.scss'
import { AiTwotoneMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";



const Contact =()=>{
    return(
        <div>
         <Navbar></Navbar>
            <Hero 
                cName="hero hero-mid"
                heroImg={AboutImg}
                title="Contact"
                
            />
<section class="contact-nou">
      <div class="container-nou contact_container">
        <div className="contact_aside">
          <h1>Modalitati de contact</h1>
          <p>Dacă v-am stârnit curiozitatea și interesul, vă așteptăm cu drag să luați legatura cu noi și să ne vizitați. Ne puteți contacta la datele de mai jos. Vă invităm
            la a experimenta ceva nou!
          </p>
          <ul className="contact_details">
            <li>
              <span><BsFillTelephoneFill /></span>
              <h5>+40 (0722) 889 944</h5>
            </li>
            <li>
              <span><AiTwotoneMail /></span>
              <h5>contact@nmintegrativetherapy.ro</h5>
            </li>
            <li>
              <span><ImLocation2 /></span>
              <h5>Str Ion Pop Reteganu nr.35</h5>
            </li>
            <br />
            <li>
              <h5>Orar Receptie: 9:00 - 13:00</h5>
            </li>
            <li>
              <h5>Orar Centru: 09:00 - 19:00</h5>
            </li>
          </ul>
        </div>

        <div className="map-container-nou">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1117.8497845046804!2d23.598881863522283!3d46.75750799128717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c32e2282e59%3A0xe551424710aca48b!2sStrada%20Ion%20Pop%20Reteganu%2035%2C%20Cluj-Napoca%20400502!5e1!3m2!1sen!2sro!4v1683816534699!5m2!1sen!2sro" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>


        <Footer></Footer>
        </div>
    )
}

export default Contact;