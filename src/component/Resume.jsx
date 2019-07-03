import React from 'react';

const Resume = () => {

    return (
        <div id='resume'>
            <a id='download-pdf' className='button' href='https://drive.google.com/open?id=1f_g9EAhYNIjRwRv-WkPHW2ufjgylw250' target='__blank'>Download Resume as PDF</a>
            <div className='row'>
                <section className='col-7'>
                    <title className="main-heading">Experience</title>   
                    <div className="timeline">
                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Web Developer</span> 
                                <span className="timeline-date">Feb, 2019 - Current</span>
                            </div>
                            <span className='timeline-institution'>Terabit.ca</span>
                            <ul>
                                <li>
                                    Work with agile team to migrate legacy company products into responsive, interactive features, using HTML/CSS, Bootstrap and JavaScript.
                                </li>
                                <li>
                                    Build new UI functionality for multithreaded user-facing applications, using React/Redux. 
                                </li>
                                <li>
                                    Designed and developed front-end for 50+ product features, using jQuery, Ajax and SASS. 
                                </li>
                                <li>
                                    Created custom reusable React/Redux components for internal framework to increase team productivity. 
                                </li>
                                <li>
                                    Refactored and modified existing RESTful APIs, improved data query efficiency up to 25%, using PHP and MySQL. 
                                </li>
                            </ul>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Freelancer</span> 
                                <span className="timeline-date">Nov, 2018 – Feb, 2019</span>
                            </div>
                            <span className='timeline-institution'>Ottawa, ON</span>
                            <ul>
                                <li>
                                    Worked remotely to build an agenda app, using Apps Script and Google Sheet API.
                                </li>
                                <li>
                                    Developed and deployed a RESTful server on Heroku to read/write google sheet data, using Node.js/Express.js.
                                </li>
                                <li>
                                    Integrated SMS reminders and phone push notifications, using Twilio API and Google Calendar API.
                                </li>
                                <li>
                                    Performed daily updates to the client via phone/Skype to ensure that functionality meets requirements. 
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <title className="main-heading">Education</title>   
                    <div className="timeline">
                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Web Development Bootcamp</span> 
                                <span className="timeline-date">July, 2018 – Nov, 2018</span>
                            </div>
                            <span className='timeline-institution'>Lighthouse Labs</span>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Master of Mechanical Engineering</span> 
                                <span className="timeline-date">Sep, 2016 – Sep, 2013</span>
                            </div>
                            <span className='timeline-institution'>Carleton University</span>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Bachelor of Mechanical Engineering</span> 
                                <span className="timeline-date">Sep, 2008 – Jun, 2013</span>
                            </div>
                            <span className='timeline-institution'>Carleton University</span>
                        </div>

                    </div>
                </section>
                <section className='col-5'>
                    <title className="main-heading">Programming Skills</title>   
                    <div className='skill-item'>
                        <div className='skill-title'>JavaScript</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>HTML</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>CSS</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>PHP</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <title className="main-heading">Frameworks & Libraries</title>   
                    <div className='skill-item'>
                        <div className='skill-title'>React/Redux</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>jQuery/ Ajax</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>Node.js/Express.js</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <title className="main-heading">Databases</title>   
                    <div className='skill-item'>
                        <div className='skill-title'>MySQL</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>PostgreSQL</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>MongoDB</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <title className="main-heading">Tools</title>   
                    <div className='skill-item'>
                        <div className='skill-title'>Git Version Control</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>Illustrator</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    <div className='skill-item'>
                        <div className='skill-title'>Photoshop</div> 
                        <div className="skill-rating">
                            <i className='fas fa-circle'/> <i className='fas fa-circle'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/> <i className='fas fa-circle empty'/>
                        </div>
                    </div>

                    
                </section>
            </div>
        </div>
    )
}

export default Resume;