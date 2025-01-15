import { useState, useEffect } from 'react';

function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    './images/img9.jpg',
    './images/img10.jpg',
    './images/img11.jpg',
    './images/img12.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      height: '100%', 
      width: '100%', 
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        textAlign: 'center',
        padding: '20px 0'
      }}>
      </div>
      
      <div style={{ 
        width: '100%', 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}>
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: index === currentImage ? '#fff' : 'rgba(255,255,255,0.5)',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;