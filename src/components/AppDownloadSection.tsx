
'use client';

import React from 'react';

const AppDownloadSection = () => {
  return (
    <>
      <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .app-download-body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 50%, #f0f8ff 100%);
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
        }

        .floating-icons {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        }

        .icon {
            position: absolute;
            opacity: 0.8;
            animation: float 6s ease-in-out infinite;
        }

        .icon-1 { top: 15%; right: 20%; width: 50px; height: 50px; background: linear-gradient(45deg, #ff9800, #f57c00); border-radius: 12px; transform: rotate(15deg); animation-delay: 0s; }
        .icon-2 { top: 60%; left: 8%; width: 40px; height: 40px; background: linear-gradient(45deg, #4caf50, #388e3c); border-radius: 50%; animation-delay: 1s; }
        .icon-3 { bottom: 25%; right: 8%; width: 45px; height: 45px; background: linear-gradient(45deg, #2196f3, #1976d2); border-radius: 8px; transform: rotate(-20deg); animation-delay: 2s; }
        .icon-4 { top: 25%; left: 15%; width: 35px; height: 35px; background: linear-gradient(45deg, #e91e63, #c2185b); border-radius: 50%; animation-delay: 3s; }
        .icon-5 { bottom: 40%; left: 12%; width: 38px; height: 38px; background: linear-gradient(45deg, #9c27b0, #7b1fa2); border-radius: 6px; transform: rotate(25deg); animation-delay: 4s; }
        .icon-6 { top: 40%; right: 25%; width: 42px; height: 42px; background: linear-gradient(45deg, #ff5722, #d84315); border-radius: 10px; transform: rotate(-10deg); animation-delay: 5s; }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }

        .download-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 80px 40px;
            display: flex;
            align-items: center;
            justify-content: center; /* Changed from space-between to center */
            min-height: 100vh;
            position: relative;
            z-index: 2;
        }

        .download-content { 
            flex: 1; 
            max-width: 480px; 
            text-align: center; /* Center aligning content */
        }
        .download-title { font-size: 3.2rem; font-weight: 800; color: #00acc1; margin-bottom: 25px; letter-spacing: -1px; }
        .description { font-size: 1.15rem; color: #34495e; line-height: 1.7; margin-bottom: 45px; font-weight: 500; }
        .download-buttons { 
            display: flex; 
            flex-direction: column; 
            gap: 15px; 
            align-items: center; /* Center buttons */
        }

        .download-btn {
            display: flex; align-items: center; gap: 12px; padding: 14px 22px;
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white; text-decoration: none; border-radius: 8px;
            font-size: 1rem; font-weight: 600; transition: all 0.3s ease;
            box-shadow: 0 3px 12px rgba(44, 62, 80, 0.3); max-width: 250px;
            border: none; cursor: pointer;
        }

        .download-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 18px rgba(44, 62, 80, 0.4);
            background: linear-gradient(135deg, #34495e 0%, #3d566e 100%);
        }

        .download-btn svg { width: 22px; height: 22px; fill: currentColor; }
        .windows-btn {
            background: linear-gradient(135deg, #0078d4 0%, #106ebe 100%);
            box-shadow: 0 3px 12px rgba(0, 120, 212, 0.3);
        }
        .windows-btn:hover {
            background: linear-gradient(135deg, #1084d8 0%, #1a7bc8 100%);
            box-shadow: 0 5px 18px rgba(0, 120, 212, 0.4);
        }

        @media (max-width: 968px) {
            .download-container { flex-direction: column; gap: 50px; padding: 60px 30px; }
            .download-title { font-size: 2.8rem; }
            .description { font-size: 1.1rem; }
        }

        @media (max-width: 640px) {
            .download-container { padding: 40px 20px; }
            .download-title { font-size: 2.2rem; }
            .description { font-size: 1rem; }
            .floating-icons .icon { display: none; }
        }
      `}</style>
      <div className="app-download-body">
        <div className="floating-icons">
          <div className="icon icon-1"></div>
          <div className="icon icon-2"></div>
          <div className="icon icon-3"></div>
          <div className="icon icon-4"></div>
          <div className="icon icon-5"></div>
          <div className="icon icon-6"></div>
        </div>

        <div className="download-container">
          <div className="download-content">
            <h1 className="download-title">Download App</h1>
            <p className="description">
              Get the E-Leak app to access Downloaded lectures anytime, anywhere and learn at your convenience.
            </p>
            
            <div className="download-buttons">
              <a href="https://github.com/sarthak69I/apk/releases/download/v19.2/app-release.apk" className="download-btn" download>
                <svg viewBox="0 0 24 24">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.7043 13.8723 8.2414 12.0003 8.2414s-3.5899.4629-5.1327 1.2318L4.845 6.4702a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 12.2344.8027 15.0313.8027 18.2707c0 .0024.0005.0047.0005.007h22.3936c.0005-.0023.0005-.0046.0005-.007 0-3.2394-1.8073-6.0363-5.3216-7.9493zM12.0003 3.4746C9.6152 3.4746 7.1776 4.9346 8.2014 7.2705c0 0 2.4038-2.7705 3.7989-2.7705s3.7989 2.7705 3.7989 2.7705c1.0238-2.3359-1.4138-3.7959-3.7989-3.7959z"/>
                </svg>
                    Get it From Android
              </a>
              
              <a href="https://github.com/sarthak69I/apk/releases/download/exe2/E-Leak.exe" className="download-btn windows-btn" download>
                <svg viewBox="0 0 24 24">
                  <path d="M3 12V6.75l6-1.32v6.48L3 12zm6 .25v6.48l-6-1.32V12.25h6zM10 5.25L21 3v8.75H10V5.25zm0 13.5V12.25H21V21l-11-2.25z"/>
                </svg>
                    Get it For Windows
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownloadSection;
