
'use client';

import * as React from 'react';
import {
  setPendingActivationToken,
  getValidAccessKey,
  getAccessKeyExpiry,
  clearAccessKey,
  getValidPendingActivationToken, // Added to check if user returns prematurely
} from '@/lib/access-manager';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Shield, Clock, KeyRound, AlertCircle, Loader2 } from 'lucide-react';

type PageState = 'initial' | 'awaitingRedirect' | 'accessGranted' | 'error';

const LINKCENTS_URL = 'https://linkcents.com/E-Leak/auth/callback';
const TUTORIAL_VIDEO_URL = "https://www.youtube.com/embed/fl7xdCFRup0?si=euD5avRVzHLqBa4Z&autoplay=1";

export default function GenerateAccessPage() {
  const router = useRouter();
  const [pageState, setPageState] = React.useState<PageState>('initial');
  const [infoText, setInfoText] = React.useState<string>("To access course content, you need to generate a key. This key will be valid for 12 hours. After it expires, you'll need to generate a new one. Please follow the steps below.");
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
        const expiryDate = new Date(expiry).toLocaleString();
        setAccessKeyExpiryTime(expiryDate);
        setInfoText(`Access Key Active! Valid for 12 hours. Expires: ${expiryDate}`);
      }
      return;
    }

    // Check if user has initiated but returned here without going through callback
    const pendingToken = getValidPendingActivationToken();
    if (pendingToken) {
        setPageState('awaitingRedirect'); // Or a more specific state like 'pendingReturnFromPartner'
        setInfoText("You've started the process. To activate your key, please complete the steps on our partner site and use their 'Go to website' button to return to our application.");
    } else {
        setPageState('initial');
        setInfoText("To access course content, you need to generate a key. This key will be valid for 12 hours. After it expires, you'll need to generate a new one. Please follow the steps below.");
    }

  }, []);

  React.useEffect(() => {
    if (isCustomVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCustomVideoModalOpen]);

  const handleGenerateClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    if (pageState === 'awaitingRedirect' && getValidPendingActivationToken()) {
        // If they are already awaiting redirect and click again, just re-open Linkcents
        // or simply do nothing and let the info text guide them.
        // Forcing a re-open might be confusing. Let's just ensure Linkcents is opened if somehow closed.
        window.open(LINKCENTS_URL, '_blank');
        return;
    }


    clearAccessKey(); // Clear any existing access key if user wants to generate a new one
    const pendingToken = setPendingActivationToken();
    if (!pendingToken) {
      setPageState('error');
      setInfoText('Could not initiate key generation. Please try again.');
      return;
    }

    setIsButtonAnimating(true);
    setTimeout(() => setIsButtonAnimating(false), 1000);

    window.open(LINKCENTS_URL, '_blank');
    setPageState('awaitingRedirect');
    setInfoText("You are being redirected to our partner site. Please complete the process there and click their 'Go to website' button. You will be automatically returned to our app to finalize activation. Keep this tab open.");
  };

  const handleShowTutorial = () => {
    setIsCustomVideoModalOpen(true);
  };

  const handleCloseTutorial = () => {
    setIsCustomVideoModalOpen(false);
  };
  
  const MainActionButton = () => {
    if (pageState === 'accessGranted') {
      return (
        <>
          <button className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={() => router.push('/')}>
            <span>Go to Courses</span>
          </button>
          <Link href="/" className="block text-sm text-[var(--genkey-secondary)] hover:underline mt-4">
            Go to Homepage
          </Link>
        </>
      );
    }

    // Initial or awaitingRedirect state
    return (
      <a href={LINKCENTS_URL} className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={handleGenerateClick}>
        <span>Generate Key 🗝️</span>
      </a>
    );
  };

  return (
    <div className="genkey-page-bg">
      <div className="genkey-container genkey-animate-fadeIn">
        <div className="genkey-content">
          
          <p className="genkey-info-text">{infoText}</p>

          {pageState === 'accessGranted' && (
            <div className="genkey-message-success mb-6">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Access Key Activated! Valid until: {accessKeyExpiryTime}
            </div>
          )}
           {pageState === 'error' && (
             <div className="genkey-message-error mb-6">
              <AlertCircle className="inline-block h-5 w-5 mr-2" />
              {infoText}
            </div>
          )}
          
          <MainActionButton />
          
          <button className="genkey-btn genkey-btn-secondary" onClick={handleShowTutorial}>
            <span>How To Generate Key</span>
          </button>
          
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
                <h4>12-Hour Validity</h4>
                <p>Access key expires after 12 hours for security.</p>
              </div>
            </div>
            
            <div className="genkey-feature">
              <div className="genkey-feature-icon">
                 <KeyRound />
              </div>
              <div className="genkey-feature-content">
                <h4>Activation</h4>
                <p>Key activates upon successful.</p>
              </div>
            </div>
          </div>
           {pageState !== 'accessGranted' && (
            <Link href="/" className="block text-sm text-[var(--genkey-secondary)] hover:underline mt-6">
              Go to Homepage
            </Link>
           )}
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
