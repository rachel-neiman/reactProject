import { useState } from 'react';
import {  buttonStyle, contactStyles, containerStyle } from '../Style';

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.firstName.length < 2) {
            alert("שם חייב להכיל לפחות 2 תווים");
            return;
        }
        if (formData.lastName.length < 2) {
            alert("שם משפחה חייב להכיל לפחות 2 תווים");
            return;
        }
        if (formData.phone.length < 9 || !/^\d+$/.test(formData.phone)) {
            alert("מספר טלפון לא תקין");
            return;
        }
        if (!formData.email.includes('@')) {
            return;
        }
        if (formData.message.length < 10) {
            alert("תוכן ההודעה חייב להכיל לפחות 10 תווים");
            return;
        }

        alert(`תודה ${formData.firstName}, פנייתך התקבלה בהצלחה! נחזור אליך בהקדם.`);
        
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: ''
        });

    }

    return <>
           <div style={containerStyle}>
        <h1 style={contactStyles.headingStyle}>יצירת קשר</h1>
        
        <div style={contactStyles.addressStyle}>
            <h3>דרכי הגעה:</h3>
            <h3>רחוב ההצלה 12, תל אביב</h3>
            <h5>קווים: 49,58,124</h5>
        </div>

        <form onSubmit={handleSubmit} style={contactStyles.formStyle}>
            <input 
                type="text" 
                name="firstName"
                placeholder="שם" 
                value={formData.firstName}
                onChange={handleChange}
                required
                style={contactStyles.inputStyle}
            />
            
            <input 
                type="text" 
                name="lastName"
                placeholder="משפחה" 
                value={formData.lastName}
                onChange={handleChange}
                required
                style={contactStyles.inputStyle}
            />
            
            <input 
                type="tel" 
                name="phone"
                placeholder="טלפון" 
                value={formData.phone}
                onChange={handleChange}
                required
                style={contactStyles.inputStyle}
            />
            
            <input 
                type="email" 
                name="email"
                placeholder="מייל" 
                value={formData.email}
                onChange={handleChange}
                required
                style={contactStyles.inputStyle}
            />
            
            <textarea 
                name="message"
                placeholder="תוכן ההודעה" 
                value={formData.message}
                onChange={handleChange}
                required
                style={contactStyles.textareaStyle}
            />

            <button type="submit" style={buttonStyle}>שלח</button>
        </form>
    </div>
    </>
}

export default Contact