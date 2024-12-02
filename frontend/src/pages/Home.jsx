import Navbar from "../components/Navbar/Navbar-main";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import "./Home.css"

export default function Home(){
    return(
        <>
        <div className='Home'>
            <Navbar/>
            <div className='text'>
                <h1>Anytime</h1>
                <h1>Anywhere Notarization</h1>
                <h1>Just a Click Away</h1>
                <p>With online notarization, there's no need to drive across town to find a notary. Simply upload your document, verify your identity, and connect with a notary online—instantly and securely.</p>
            </div>
            <div className="notar">
                <button className="notarize">Notarize a document now</button>
            </div>
        </div>


        <div className='about'>
            <h1>Your Most Important Documents,</h1>
            <h1>Executed Online, Securely and</h1>
            <h1>Remotely</h1>
            <p>Notarize life's most important milestones, anytime, anywhere</p>
            <div className='banner'>
                <img src="/banner.jpg"/>
            </div>
        </div>


        <div className='testimonials'>
            <h1>Testimonials</h1>
            <Testimonials/>
        </div>


        <div className='notaries'>
            <div className='info'>
            <h2>For Notaries</h2>
            <p>Grow your business by joining India's first network of online notaires. You choose
                when and where to work. We do the rest by connecting you to signers 24/7.
            </p>
            <button className="notarize">Get Started Now</button>
            </div>
            <div className='pic'>
                <img src="/notary.png"></img>
            </div>
        </div>

        <div className='notaries client'>
            <div className='pic'>
                <img src="/client.png"></img>
            </div>
            <div className='info'>

                <h2>For Clients</h2>
                <p>Get your documents notarized at the comfort of your home and procure a digital copy securely stored at out servers
                </p>
                <button className="notarize">Notarize a Document Now</button>
            </div>
        </div>
        <div className="service">
            <Services/>
        </div>
        <Footer/> 
        </>
    )
}