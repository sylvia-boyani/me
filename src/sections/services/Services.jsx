import React,{Fragment,useEffect} from 'react'
import "./services.css"
import Aos from 'aos'
import "aos/dist/aos.css"
import {AiOutlineCode} from 'react-icons/ai'
import {FaLaptopCode} from 'react-icons/fa'
import {MdDesktopMac} from 'react-icons/md'
import {BsStack} from 'react-icons/bs'
import {MdPhonelinkSetup} from 'react-icons/md'
import {MdEngineering} from 'react-icons/md'

const Services = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000, once:true, easing:"ease" })
      })

  return (
    <Fragment>

    <section className="services" id='services'>

        <div data-aos = "zoom-in" className="ser-tittle">
        <h2> MY <span> SERVICES </span>  </h2> 
        <p>Check out the fabulous services that I offer. Building projects that my clients Love is always my passion</p>
        <div className="line"></div>
        </div>

        <div className="ser-row">

        <div data-aos = "fade-up-left" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-camera"></i> <FaLaptopCode /> </span>
            <div class="service-desc">
                <h2>Frontend</h2>
                <p>HTML and CSS, JavaScriopt (ReactJs) Bootstrap too for advances stylings</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-down" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-magnifying-glass-dollar"></i> <AiOutlineCode/></span>
            <div class="service-desc">
                <h2>Backend</h2>
                <p>Ruby on Rails, Redux, Sinatra and SQL(Postgre)</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-up-right" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-laptop"></i><MdDesktopMac/> </span>
            <div class="service-desc">
                <h2>UI/UX Designer</h2>
                <p>Figma. I'll design your project and Only after you approve is when I start building.</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-up-left" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-database"></i><BsStack/></span>
            <div class="service-desc">
                <h2>Fullstack</h2>
                <p>Familiar with both frontend and backend development</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-up" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-pen-nib"></i><MdPhonelinkSetup/> </span>
            <div class="service-desc">
                <h2>Open Source</h2>
                <p>Check out some of my contributions pinned on my github profile</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-up-right" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-code"></i><MdEngineering/></span>
            <div class="service-desc">
                <h2>Engineer</h2>
                <p>Electrical and Electronics Enginner (Control and Instrumentation)</p>
            </div>
            </div>
        </div>

        </div>

    </section>

    </Fragment>
  )
}

export default Services