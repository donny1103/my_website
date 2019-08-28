import React from 'react';

function Contact() {
    return(
        <div id='contact'>
            <iframe
                width='100%'
                height="300"
                frameBorder="0" 
                title='Keller Williams Integrity Realty'
                style={{border: 0}}
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}
                &q=Weidong+Li&center=45.4177833, -75.8094403&zoom=14`} 
                allowFullScreen
            />
            <div className='row'>
                <div className='col-5'>
                    <title>Contact info</title>
                    <div>Gatinuea, Quebec, J9J 4E7</div>
                    <div>Email: weidongli1988@gmail.com</div>
                    <div>Phone: +6138783953</div>
                </div>
                <div className='col-7'>
                    <title>Let's keep in touch</title>
                    <div className='form-group'>
                        <label>Your Name</label>
                        <input className='form-control' type='text' />
                    </div>
                    <div className='form-group'>
                        <label>Your Email</label>
                        <input className='form-control' type='email'/>
                    </div>
                    <div className='form-group'>
                        <label>Your Message</label>
                        <textarea className='form-control' type='text'/>
                    </div>
                    <button className='button'>Send Your Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;