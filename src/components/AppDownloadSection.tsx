import React from 'react';
import Image from 'next/image';

const AppDownloadSection = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a0a14 0%, #14142a 100%)',
      color: 'white',
      fontFamily: "'Rajdhani', 'Poppins', sans-serif",
      padding: '3rem',
      borderRadius: '1.5rem',
      maxWidth: '650px',
      margin: '2rem auto',
      textAlign: 'center',
      border: '1px solid #6e45e2',
      boxShadow: '0 0 40px rgba(110, 69, 226, 0.4), inset 0 0 30px rgba(110, 69, 226, 0.1)',
      position: 'relative',
      overflow: 'hidden',
      transformStyle: 'preserve-3d',
      perspective: '1000px'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(110,69,226,0.1) 0%, rgba(20,20,40,0) 70%)',
        animation: 'rotateGradient 20s linear infinite',
        zIndex: 0
      }}></div>
      
      {/* Neon border effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #6e45e2, #88d3ce, transparent)',
        animation: 'neonBorder 3s linear infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #88d3ce, #6e45e2, transparent)',
        animation: 'neonBorder 3s linear infinite reverse'
      }}></div>
      
      {/* Floating particles */}
      <div className="particle" style={{ '--size': '3px', '--color': '#6e45e2', '--duration': '15s', '--delay': '0s', '--x': '10%', '--y': '30%' } as React.CSSProperties}></div>
      <div className="particle" style={{ '--size': '5px', '--color': '#88d3ce', '--duration': '20s', '--delay': '2s', '--x': '80%', '--y': '60%' } as React.CSSProperties}></div>
      <div className="particle" style={{ '--size': '2px', '--color': '#a0a0ff', '--duration': '25s', '--delay': '5s', '--x': '30%', '--y': '70%' } as React.CSSProperties}></div>
      
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Animated logo/text */}
        <h2 style={{
          fontSize: '2.8rem',
          marginBottom: '1.2rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textShadow: '0 0 15px rgba(110, 69, 226, 0.7)',
          transform: 'translateY(0)',
          animation: 'floatText 4s ease-in-out infinite'
        }}>
            APP OF <span style={{ color: '#88d3ce', textShadow: '0 0 15px rgba(136, 211, 206, 0.7)', position: 'relative' }}>
                E-LEAK
                <span style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #88d3ce, transparent)',
                  animation: 'pulseUnderline 2s ease-in-out infinite'
                }}></span>
            </span>
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2.5rem',
          color: '#a0a0ff',
          letterSpacing: '1.5px',
          textShadow: '0 0 10px rgba(160, 160, 255, 0.3)',
          animation: 'fadeIn 1.5s ease-out'
        }}>
            UNLOCK YOUR LEARNING POTENTIAL
        </p>
        
        {/* Feature cards with enhanced animations */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
            <div className="feature-card" style={{ '--hue': 260, '--border-color': '#6e45e2' } as React.CSSProperties}>
                <div className="card-content" style={{ transform: 'translateY(0) rotateY(0)' }}>
                    <Image src="https://i.ibb.co/mmjdWG9/image.png" alt="App UI" width={160} height={180} style={{ borderRadius: '0.5rem', border: '1px solid #333', filter: 'drop-shadow(0 5px 15px rgba(110, 69, 226, 0.3))' }}/>
                    <div className="card-label" style={{ marginTop: '1rem', fontWeight: 600, color: '#88d3ce' }}>Interactive Lessons</div>
                </div>
            </div>
            
            <div className="feature-card" style={{ '--hue': 260, '--border-color': '#6e45e2' } as React.CSSProperties}>
                <div className="card-content" style={{ transform: 'translateY(0) rotateY(0)' }}>
                    <Image src="https://i.ibb.co/mV11YZdd/image.png" alt="App UI" width={160} height={180} style={{ borderRadius: '0.5rem', border: '1px solid #333', filter: 'drop-shadow(0 5px 15px rgba(110, 69, 226, 0.3))' }}/>
                    <div className="card-label" style={{ marginTop: '1rem', fontWeight: 600, color: '#88d3ce' }}>Progress Tracking</div>
                </div>
            </div>
        </div>
        
        {/* Animated download button */}
        <div style={{ position: 'relative', display: 'inline-block', perspective: '1000px' }}>
            <a href="https://github.com/sarthak69I/apk/releases/download/v19.2/app-release.apk" className="download-btn" style={{ '--btn-color-1': '#6e45e2', '--btn-color-2': '#88d3ce' } as React.CSSProperties}>
                <span>INSTALL NOW</span>
                <div className="btn-border"></div>
                <div className="btn-border"></div>
                <div className="btn-border"></div>
                <div className="btn-border"></div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;
