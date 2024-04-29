import React, { useState, useRef, ChangeEvent, FormEvent } from 'react';
import './ContactUs.css'; // Ensure the CSS is correctly imported
import emailjs from '@emailjs/browser';

interface FormData {
    firstName: string;
    lastName: string;
    user_email: string;
    message: string;
}

const ContactForm: React.FC = ()=> {
    const form = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        user_email: '',
        message: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add logic to handle form submission like sending data to an API
        if (form.current) {
            emailjs.sendForm(
                'service_vlh0aho', //service_id
                'template_zopzi5d', //template_id
                form.current, 
            {publicKey: 'zcVIyTK52C2MPH_Gn',}
            ).then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            ).catch((error: any) => {
                console.error('An error occurred:', error.message || 'Unknown error');
            });
        }
    };
    
        return (
            <div className="contact-form-container">
                <div className="contact-form-column left-column">
                    <p className='header primary-font'>Contact Us</p>
                    <p className="contact-form-text">
                    Thank you for contacting The Black Codes! Our community is built on
                     a foundation of mutual support and empowerment among passionate individuals. 
                     Should you have questions or wish to engage with us, please feel free to get 
                     in touch. We're excited about the prospect of connecting with you and fostering
                     meaningful connections within our network.
                     </p>
                </div>
                <div className="contact-form-column right-column">
                    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='input-box'>
                                <label className='details'>First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className='input-box'>   
                                <label className='details'>Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='input-box'>
                            <label className='details'>Email </label>
                            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
                        </div>
                        <div className='input-box'>   
                            <label className='details'> Message </label>
                            <textarea name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
    
export default ContactForm;    
