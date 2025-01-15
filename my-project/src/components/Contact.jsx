import { useState } from 'react';


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
        <div>
            <h1 className="directions-info">דרכי יצירת קשר</h1>

            <div className="directions-info">
                <h3>דרכי הגעה:</h3>
                <h3>רחוב ההצלה 12, תל אביב</h3>
                <h3>קווים: 49,58,124</h3>
            </div>
            <form className="contact-form" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="firstName"
                    placeholder="שם"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    placeholder="משפחה"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="טלפון"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="מייל"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="תוכן ההודעה"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">שלח</button>
            </form>
        </div>
    </>
}

export default Contact