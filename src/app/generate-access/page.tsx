'use client';

import * as React from 'react';
import {
  setPendingToken,
  getValidPendingToken,
  clearPendingToken,
  setAccessKey,
  getValidAccessKey,
  getAccessKeyExpiry,
  clearAccessKey,
} from '@/lib/access-manager';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Shield, Clock, KeyRound, ExternalLink, AlertCircle } from 'lucide-react'; // Using Lucide icons

type PageState = 'initial' | 'pendingConfirmation' | 'accessGranted' | 'error';

const LINKCENTS_URL = 'https://linkcents.com/E-Leak';
const TUTORIAL_VIDEO_URL = "https://www.youtube.com/embed/OTCuv1ps8bc?si=euD5avRVzHLqBa4Z&autoplay=1";


export default function GenerateAccessPage() {
  const router = useRouter();
  const [pageState, setPageState] = React.useState<PageState>('initial');
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [infoText, setInfoText] = React.useState<string>("You have to Generate a key to Access The Batches");
  const [accessKeyExpiryTime, setAccessKeyExpiryTime] = React.useState<string | null>(null);
  const [isCustomVideoModalOpen, setIsCustomVideoModalOpen] = React.useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = React.useState(false);

  React.useEffect(() => {
    document.title = "Generate Course Access | E-Leak";

    const validAccessKey = getValidAccessKey();
    if (validAccessKey) {
      setPageState('accessGranted');
      const expiry = getAccessKeyExpiry();
      if (expiry) {
        setAccessKeyExpiryTime(new Date(expiry).toLocaleString());
      }
      setInfoText(`Access Key Active! Valid until: ${new Date(expiry || 0).toLocaleString()}`);
      return;
    }

    const pendingToken = getValidPendingToken();
    if (pendingToken) {
      setPageState('pendingConfirmation');
      setInfoText("You have initiated the process. Click 'Activate Key' below to complete. Your key will be valid for 6 hours.");
    } else {
      setPageState('initial');
      setInfoText("To access courses, generate a 6-hour access key. Follow the steps below.");
    }
  }, []);

  React.useEffect(() => {
    // If video modal is open, prevent body scroll
    if (isCustomVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCustomVideoModalOpen]);


  const handleMainActionClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsButtonAnimating(true);
    setTimeout(() => setIsButtonAnimating(false), 1000); // Animation duration

    setTimeout(() => {
        if (pageState === 'initial') {
            setPendingToken();
            window.open(LINKCENTS_URL, '_blank');
            setPageState('pendingConfirmation');
            setInfoText("You have initiated the process. Click 'Activate Key' below. Your key will be valid for 6 hours.");
        } else if (pageState === 'pendingConfirmation') {
            const pendingToken = getValidPendingToken();
            if (pendingToken) {
                const newAccessKey = setAccessKey();
                if (newAccessKey) {
                clearPendingToken();
                setPageState('accessGranted');
                const expiry = getAccessKeyExpiry();
                if (expiry) {
                    const expiryDate = new Date(expiry).toLocaleString();
                    setAccessKeyExpiryTime(expiryDate);
                    setInfoText(`Access Key Activated! Valid until: ${expiryDate}`);
                }
                } else {
                setPageState('error');
                setInfoText('Error generating access key. Please try again.');
                clearPendingToken();
                }
            } else {
                setPageState('error');
                setInfoText('Activation step failed: pending confirmation may have expired or is invalid. Please start over.');
            }
        }
    }, 500);
  };

  const handleShowTutorial = () => {
    setIsCustomVideoModalOpen(true);
  };

  const handleCloseTutorial = () => {
    setIsCustomVideoModalOpen(false);
  };
  
  const handleStartOver = () => {
    clearPendingToken();
    clearAccessKey();
    setPageState('initial');
    setInfoText("To access courses, generate a 6-hour access key. Follow the steps below.");
    setAccessKeyExpiryTime(null);
  };


  const getButtonText = () => {
    if (pageState === 'initial') return "Generate Key (Step 1)";
    if (pageState === 'pendingConfirmation') return "Activate Key (Step 2)";
    if (pageState === 'accessGranted') return "Go to Courses";
    if (pageState === 'error') return "Try Again";
    return "Generate Key";
  };
  
  const MainActionButton = () => {
    const commonProps = {
      className: `genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`,
      onClick: pageState === 'accessGranted' ? () => router.push('/') : handleMainActionClick,
    };

    if (pageState === 'initial') {
      return (
        <a href={LINKCENTS_URL} {...commonProps}>
          <span>{getButtonText()}</span>
        </a>
      );
    }
    return (
      <button {...commonProps}>
        <span>{getButtonText()}</span>
      </button>
    );
  };


  return (
    <div className="genkey-page-bg">
      <div className="genkey-container genkey-animate-fadeIn">
        <div className="genkey-content">
          <div className="genkey-glow genkey-glow-1"></div>
          <div className="genkey-glow genkey-glow-2"></div>
          
          <p className="genkey-info-text">{infoText}</p>

          {pageState === 'accessGranted' ? (
            <div className="genkey-message-success mb-6">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Access Key Activated! Valid until: {accessKeyExpiryTime}
            </div>
          ) : pageState === 'error' ? (
             <div className="genkey-message-error mb-6">
              <AlertCircle className="inline-block h-5 w-5 mr-2" />
              {infoText}
            </div>
          ) : null}
          
          <MainActionButton />
          
          <button className="genkey-btn genkey-btn-secondary" onClick={handleShowTutorial}>
            <span>How To Generate A Key</span>
          </button>

          {(pageState === 'error' || pageState === 'accessGranted') && (
             <button className="genkey-btn genkey-btn-secondary" onClick={handleStartOver}>
                <span>{pageState === 'accessGranted' ? 'Generate New Key' : 'Start Over'}</span>
            </button>
          )}
          
          <div className="genkey-features">
            <div className="genkey-feature">
              <div className="genkey-feature-icon">
                <Shield />
              </div>
              <div className="genkey-feature-content">
                <h4>Secure Process</h4>
                <p>Your access generation is handled securely.</p>
              </div>
            </div>
            
            <div className="genkey-feature">
              <div className="genkey-feature-icon">
                <Clock />
              </div>
              <div className="genkey-feature-content">
                <h4>6-Hour Validity</h4>
                <p>Access key expires after 6 hours for security.</p>
              </div>
            </div>
            
            <div className="genkey-feature">
              <div className="genkey-feature-icon">
                 <KeyRound />
              </div>
              <div className="genkey-feature-content">
                <h4>One-Time Use</h4>
                <p>Each key is unique for a single 6-hour session.</p>
              </div>
            </div>
          </div>
          <Link href="/" className="block text-sm text-[var(--genkey-secondary)] hover:underline mt-6">
            Go to Homepage
          </Link>
        </div>
      </div>
      
      {isCustomVideoModalOpen && (
        <div className="genkey-video-container active" onClick={handleCloseTutorial}>
          <div className="genkey-video-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="genkey-close-btn" onClick={handleCloseTutorial}>✕</button>
            <iframe 
              className="genkey-video-iframe" 
              src={TUTORIAL_VIDEO_URL} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              title="How to Generate Key Tutorial"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}