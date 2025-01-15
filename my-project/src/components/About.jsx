function About() {
    return (
        <div className="about-container" style={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img 
                src="/images/רקע.jpg" 
                alt="תמונת רקע" 
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: '0.7',
                    zIndex: 1
                }}
            />
            
            <p style={{
                position: 'relative',
                zIndex: 2,
                fontSize: '1.8rem',
                // fontFamily: 'Rubik, Arial, sans-serif',
                fontWeight: '700',
                lineHeight: '1.5',
                textAlign: 'center',
                padding: '2rem',
                maxWidth: '80%',
                color: '#4f3a03',
                direction: 'rtl',
                borderRadius: '15px'
            }}>
                1of135 הנה גלריה ראשונה מסוגה המפגישה בין עולם האמנות לעולם העיצוב. הגלריה ידועה במבחר היצירות הענק ובמחיריה האטרקטיביים. בגלריה שתי מחלקות: המחלקה הראשונה מציעה את מבחר האמנות הישראלית הגדול בארץ - ובהתאמה אישית. כל יצירה מהאוסף מופקת במהדורה של עד 135 יחידות בכל גודל ומסגור. המחלקה השניה, ה- one of a kind , מכילה אמנות פלסטית עכשווית וחד פעמית במגוון רחב של טכניקות.
            </p>
        </div>
    );
}

export default About
