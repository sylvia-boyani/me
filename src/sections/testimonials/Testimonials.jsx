import React, {Fragment,useState} from 'react'
import "./testimonials.css"

const Testimonial = () => {

  const [toggleTab, setToggleTab] = useState(2)

  const toggleState = (index) =>{
    setToggleTab(index)
  }

  return (
    <Fragment>

      <section className="testimonial">

      <div  className='testi-tittle'> 
		<h2> What <span> Clients Say</span></h2>
		<p>Here is what some of my clients are saying. Check this out!</p>
		<div className="testi-line"></div>
    </div>

        <div className="container">

        <div className="tabs">

        <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
        onClick = {() => toggleState(1)}
        ></div>

        <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
        onClick = {() => toggleState(2)}
        ></div>

        <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
        onClick = {() => toggleState(3)}
        ></div>

        </div>

        <div className="tab-content">

        {/* Tab-1 Content */}

        <div className={toggleTab === 1 ? "testi-content active-content": "testi-content"}>
          <div className="user-text">
            <p> The website is coming along beautifully as it is still ongoing, but I can't wait to see the complete project!</p>
            <h4>Tumaini Ministries Center</h4>
          </div>
        </div>

        {/* Tab-2 Content */}

        <div className={toggleTab === 2 ? "testi-content active-content": "testi-content"}>
          <div className="user-text">
            <p>So far Awesome Projects build at school, one can take a look at the projects already completed at my portfolio.</p>
            <h4>Sylvia Boyani</h4>
          </div>
        </div>

        {/* Tab-3 Content */}

        <div className={toggleTab === 3 ? "testi-content active-content": "testi-content"}>
          <div className="user-text">
            <p>Very good website done for me. No delays and all deliverables met.</p>
            <h4>Emily Bonareri</h4>
          </div>
        </div>
          
        </div>

        </div>
      </section>

    </Fragment>
  )
}

export default Testimonial