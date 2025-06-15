
'use client';

import * as React from 'react';
import {
  setPendingActivationToken,
  getValidAccessKey,
  getAccessKeyExpiry,
  clearAccessKey,
  type PendingActivationToken,
  getValidPendingActivationToken,
  setAccessKey as grantAccessKey, // Renamed to avoid conflict
} from '@/lib/access-manager';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Shield, Clock, KeyRound, AlertCircle, DoorOpen, ArrowRight } from 'lucide-react';

type PageState = 'initial' | 'awaitingRedirect' | 'accessGranted' | 'error' | 'accessOpen';

const LINKCENTS_URL = 'https://linkcents.com/E-Leak';
const TUTORIAL_VIDEO_URL = "https://www.youtube.com/embed/fl7xdCFRup0?si=euD5avRVzHLqBa4Z&autoplay=1";

// --- Configuration Start ---
// To toggle access key generation requirement, change this value and redeploy.
// true: Key generation is REQUIRED.
// false: Key generation is BYPASSED (access is open).
const REQUIRE_KEY_GENERATION = true;
// --- Configuration End ---


export default function GenerateAccessPage() {
  const router = useRouter();
  const [pageState, setPageState] = React.useState<PageState>('initial');
  const [infoText, setInfoText] = React.useState<string>("Loading access status...");
  const [accessKeyExpiryTime, setAccessKeyExpiryTime] = React.useState<string | null>(null);
  const [isCustomVideoModalOpen, setIsCustomVideoModalOpen] = React.useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = React.useState(false);

  React.useEffect(() => {
    document.title = REQUIRE_KEY_GENERATION ? "Generate Course Access | E-Leak" : "Course Access | E-Leak";

    if (!REQUIRE_KEY_GENERATION) {
      setPageState('accessOpen');
      setInfoText("Access to courses is currently open. No key generation is required at this time. You have been granted a temporary 12-hour access pass.");
      // Automatically grant an access key if one doesn't exist or is invalid
      const validKey = getValidAccessKey();
      if (!validKey) {
        grantAccessKey();
      }
      const expiry = getAccessKeyExpiry();
      if (expiry) {
        setAccessKeyExpiryTime(new Date(expiry).toLocaleString());
      }
      return;
    }

    // Logic for when key generation IS required
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

    const pendingToken = getValidPendingActivationToken();
    if (pendingToken) {
        setPageState('awaitingRedirect');
        setInfoText("You've started the key generation process. Please complete the steps on our partner site and use their 'Go to website' button to return to our application and activate your key.");
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
    if (!REQUIRE_KEY_GENERATION) return; // Should not be callable if key gen is off
    
    clearAccessKey();
    
    const newPendingToken = setPendingActivationToken();
    if (!newPendingToken) {
      setPageState('error');
      setInfoText('Could not initiate key generation. Please try again or contact support if this issue persists.');
      return;
    }

    setIsButtonAnimating(true);
    setTimeout(() => setIsButtonAnimating(false), 1000);

    window.location.href = LINKCENTS_URL;

    setPageState('awaitingRedirect');
    setInfoText("You are being redirected to our partner site. Please complete the process there and click their 'Go to website' button. You will be automatically returned to our app to finalize activation.");
  };

  const handleShowTutorial = () => {
    setIsCustomVideoModalOpen(true);
  };

  const handleCloseTutorial = () => {
    setIsCustomVideoModalOpen(false);
  };
  
  const MainActionButton = () => {
    if (pageState === 'accessOpen') {
      return (
        <button className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={() => router.push('/')}>
          <DoorOpen className="mr-2 h-5 w-5" />
          <span>Go to Courses</span>
        </button>
      );
    }

    if (pageState === 'accessGranted') {
      return (
        <>
          <button className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={() => router.push('/')}>
            <ArrowRight className="mr-2 h-5 w-5" />
            <span>Go to Courses</span>
          </button>
          <Link href="/" className="block text-sm text-[var(--genkey-secondary)] hover:underline mt-4">
            Go to Homepage
          </Link>
        </>
      );
    }
    
    // For 'initial' or 'awaitingRedirect' states when key generation is required
    return (
      <a href={LINKCENTS_URL} className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={handleGenerateClick}>
        <KeyRound className="mr-2 h-5 w-5" />
        <span>Generate Key</span>
      </a>
    );
  };

  return (
    <div className="genkey-page-bg">
      <div className="genkey-container genkey-animate-fadeIn">
        <div className="genkey-content">
          
          <p className="genkey-info-text">{infoText}</p>

          {pageState === 'accessGranted' && REQUIRE_KEY_GENERATION && (
            <div className="genkey-message-success mb-6">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Access Key Activated! Valid until: {accessKeyExpiryTime}
            </div>
          )}
          {pageState === 'accessOpen' && (
             <div className="genkey-message-success mb-6">
              <CheckCircle className="inline-block h-5 w-5 mr-2" />
              Access is Open! Your temporary pass is active until: {accessKeyExpiryTime || 'loading...'}
            </div>
          )}
           {pageState === 'error' && REQUIRE_KEY_GENERATION && (
             <div className="genkey-message-error mb-6">
              <AlertCircle className="inline-block h-5 w-5 mr-2" />
              {infoText}
            </div>
          )}
          
          <MainActionButton />
          
          {REQUIRE_KEY_GENERATION && pageState !== 'accessGranted' && (
            <button className="genkey-btn genkey-btn-secondary" onClick={handleShowTutorial}>
              <span>How To Generate Key</span>
            </button>
          )}
          
          {REQUIRE_KEY_GENERATION && (
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
                  <p>Key activates upon successful return from partner site.</p>
                </div>
              </div>
            </div>
           )}
           {(pageState !== 'accessGranted' || !REQUIRE_KEY_GENERATION) && (
            <Link href="/" className="block text-sm text-[var(--genkey-secondary)] hover:underline mt-6">
              Go to Homepage
            </Link>
           )}
        </div>
      </div>
      
      {isCustomVideoModalOpen && REQUIRE_KEY_GENERATION && (
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
    
