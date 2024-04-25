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
                'service_vlh0aho', 
                'Ytemplate_zopzi5d', 
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
                <div className="contact-form-column">
                    <p className="contact-form-text">
                        Please fill out this form with your contact details and your message, and we will get back to you as soon as possible.
                    </p>
                </div>
                <div className="contact-form-column">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                        </label>
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="user_email" value={formData.user_email} onChange={handleChange} />
                        </label>
                        <label>
                            Message:
                        </label>
                            <textarea name="message" value={formData.message} onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
    
export default ContactForm;    
