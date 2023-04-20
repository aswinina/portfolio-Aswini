import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
      <h1>Experience</h1>
    </div>
    <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
         <div className="marker"></div>
         <div className="timeline-content">
            <h3>2012-2018</h3>
            <p>Care tacker for family 6 years</p></div>   
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
         <div className="marker"></div>
         <div className="timeline-content">
            <h3>2018-2022</h3>
            <p>Worked at Clio</p></div>   
        </div>
         {/* - */}
        <div className="timeline-block timeline-block-right">
         <div className="marker"></div>
         <div className="timeline-content">
            <h3>2022-2023</h3>
            <p>Study Frontend Developer</p></div>   
        </div>
         {/* - */}
        <div className="timeline-block timeline-block-left">
         <div className="marker"></div>
         <div className="timeline-content">
            <h3>2023-Till Now</h3>
            <p> Study Cloud Compuiting at Microsoft Office</p></div>   
        </div>
    </div>
    </div>
  )
}

export default Experience;
