import React from 'react';

const Resume = () => {
    const programmingSkills = [
        { name: 'JavaScript', ratings: 5 },
        { name: 'HTML', ratings: 5 },
        { name: 'CSS', ratings: 5 },
        { name: 'PHP', ratings: 4 },
        { name: 'SQL', ratings: 5 },
        { name: 'GoLang', ratings: 3 },
    ];
    const framworksSkills = [
        { name: 'TypeScript', ratings: 5 },
        { name: 'NestJS', ratings: 5 },
        { name: 'Node.js/Express.js', ratings: 5 },
        { name: 'jQuery/Ajax', ratings: 5 },
        { name: 'MongoDB', ratings: 3 },
    ];
    const toolSkills = [
        { name: 'Git Version Control', ratings: 5 },
        { name: 'Docker', ratings: 3 },
        { name: 'Photoshop', ratings: 3 },
    ];
    return (
        <div id='resume'>
            <a
                id='download-pdf'
                className='button'
                href='https://drive.google.com/file/d/1Ao7Yem4tx4svOKw3IGte4Gwqo2Y1dpKy/view?usp=sharing'
                target='__blank'
            >
                Download Resume as PDF
            </a>
            <div className='row'>
                <section className='col-7'>
                    <title className='main-heading'>Experience</title>
                    <div className='timeline'>
                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Full Stack Developer</span>
                                <span className='timeline-date'>2019 – Current</span>
                            </div>
                            <span className='timeline-institution'>Civix</span>
                            <ul>
                                <li>
                                    Maintained company’s legacy products with jQuery, HTML and
                                    MSSQL.
                                </li>
                                <li>
                                    Architected and built new full-stack applications using React
                                    and NestJS, deployed and hosted applications with Docker,
                                    leading to $1M in potential revenue increment for the company.
                                </li>
                                <li>
                                    Refactored SQL queries/stored procedures/views, and wrote unit
                                    and integration tests for NodeJS application using Jest,
                                    improving request response performance and software robustness.
                                </li>
                                <li>
                                    Collaborated closely with development team on daily basics,
                                    including development, code review, technical solution planning
                                    and debugging
                                </li>
                                <li>
                                    Conducted tutorials for internal developers on React Hooks and
                                    documented best practices within the company.
                                </li>
                                <li>
                                    Worked closely with client service team to provide technical
                                    analysis on new features and bugs, improving client’s
                                    satisfaction by 50%.
                                </li>
                            </ul>
                        </div>
                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Web Developer</span>
                                <span className='timeline-date'>2019</span>
                            </div>
                            <span className='timeline-institution'>Terabit.ca</span>
                            <ul>
                                <li>
                                    Work with agile team to migrate legacy company products into
                                    responsive, interactive features, using HTML/CSS, Bootstrap and
                                    JavaScript.
                                </li>
                                <li>
                                    Build new UI functionality for multithreaded user-facing
                                    applications, using React/Redux.
                                </li>
                                <li>
                                    Designed and developed front-end for 50+ product features, using
                                    jQuery, Ajax and SASS.
                                </li>
                                <li>
                                    Created custom reusable React/Redux components for internal
                                    framework to increase team productivity.
                                </li>
                                <li>
                                    Refactored and modified existing RESTful APIs, improved data
                                    query efficiency up to 25%, using PHP and MySQL.
                                </li>
                            </ul>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Freelancer</span>
                                <span className='timeline-date'>Nov, 2018 – Feb, 2019</span>
                            </div>
                            <span className='timeline-institution'>Ottawa, ON</span>
                            <ul>
                                <li>
                                    Worked remotely to build an agenda app, using Apps Script and
                                    Google Sheet API.
                                </li>
                                <li>
                                    Developed and deployed a RESTful server on Heroku to read/write
                                    google sheet data, using Node.js/Express.js.
                                </li>
                                <li>
                                    Integrated SMS reminders and phone push notifications, using
                                    Twilio API and Google Calendar API.
                                </li>
                                <li>
                                    Performed daily updates to the client via phone/Skype to ensure
                                    that functionality meets requirements.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <title className='main-heading'>Education</title>
                    <div className='timeline'>
                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>Web Development Bootcamp</span>
                                <span className='timeline-date'>July, 2018 – Nov, 2018</span>
                            </div>
                            <span className='timeline-institution'>Lighthouse Labs</span>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>
                                    Master of Mechanical Engineering
                                </span>
                                <span className='timeline-date'>Sep, 2016 – Sep, 2013</span>
                            </div>
                            <span className='timeline-institution'>Carleton University</span>
                        </div>

                        <div className='timeline-unit'>
                            <div className='timeline-header'>
                                <span className='timeline-title'>
                                    Bachelor of Mechanical Engineering
                                </span>
                                <span className='timeline-date'>Sep, 2008 – Jun, 2013</span>
                            </div>
                            <span className='timeline-institution'>Carleton University</span>
                        </div>
                    </div>
                </section>
                <section className='col-5'>
                    <title className='main-heading'>Programming Skills</title>
                    {programmingSkills.map((skill, i) => (
                        <SkillItem skill={skill} key={`programing-skill-${i}`} />
                    ))}

                    <title className='main-heading'>Frameworks & Libraries</title>
                    {framworksSkills.map((skill, i) => (
                        <SkillItem skill={skill} key={`programing-skill-${i}`} />
                    ))}

                    <title className='main-heading'>Tools</title>
                    {toolSkills.map((skill, i) => (
                        <SkillItem skill={skill} key={`programing-skill-${i}`} />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default Resume;

function SkillItem({ skill }) {
    return (
        <div className='skill-item'>
            <div className='skill-title'>{skill.name}</div>
            <div className='skill-rating'>
                {[1, 2, 3, 4, 5].map((r) => (
                    <i
                        className={`fas fa-circle ${r - skill.ratings > 0 ? 'empty' : ''}`}
                        style={{ marginRight: 5 }}
                    />
                ))}
            </div>
        </div>
    );
}
