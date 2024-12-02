import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar-main";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <>
      <div className='Home'>
        <Navbar />
        <div className='text'>
          <h1>Anytime</h1>
          <h1>Anywhere Notarization</h1>
          <h1>Just a Click Away</h1>
          <p>
            With online notarization, there's no need to drive across town to find a notary. 
            Simply upload your document, verify your identity, and connect with a notary online—instantly and securely.
          </p>
        </div>
        <div className="notar">
          <button 
            className="notarize" 
            onClick={() => navigate('/client')}
          >
            Notarize a document now
          </button>
        </div>
      </div>

      {/* The rest of the Home content */}
      <div className='about' id='About'>
        <h1>Your Most Important Documents,</h1>
        <h1>Executed Online, Securely and</h1>
        <h1>Remotely</h1>
        <p>Notarize life's most important milestones, anytime, anywhere</p>
        <div className='banner'>
          <img src="/banner.jpg" alt="notary.png" />
        </div>
      </div>

      <div className='testimonials'>
        <h1>Testimonials</h1>
        <Testimonials />
      </div>

      <div className='notaries'>
        <div className='info'>
          <h2>For Notaries</h2>
          <p>
            Grow your business by joining India's first network of online notaries. You choose
            when and where to work. We do the rest by connecting you to signers 24/7.
          </p>
          <button className="notarize" onClick={() => navigate('/notary')}>Get Started Now</button>
        </div>
        <div className='pic'>
          <img src="/notary.png" alt="notary.png"></img>
        </div>
      </div>

      <div className='notaries client'>
        <div className='pic'>
          <img src="/client.png" alt="notary.png"></img>
        </div>
        <div className='info'>
          <h2>For Clients</h2>
          <p>
            Get your documents notarized at the comfort of your home and procure a digital copy securely stored at our servers.
          </p>
          <button 
            className="notarize" 
            onClick={() => navigate('/client')}
          >
            Notarize a Document Now
          </button>
        </div>
      </div>
      <div className="service" id='Services'>
        <Services />
      </div>
      <div id='Contact'>
      <Footer />
      </div>
    </>
  );
}
