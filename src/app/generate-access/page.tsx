
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
  type PendingToken, // Import type if you defined it and exported
} from '@/lib/access-manager';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle, Shield, Clock, KeyRound, AlertCircle, Loader2 } from 'lucide-react';

type PageState = 'initial' | 'processing' | 'accessGranted' | 'error';

const LINKCENTS_URL = 'https://linkcents.com/E-Leak';
const TUTORIAL_VIDEO_URL = "https://www.youtube.com/embed/OTCuv1ps8bc?si=euD5avRVzHLqBa4Z&autoplay=1";

export default function GenerateAccessPage() {
  const router = useRouter();
  const [pageState, setPageState] = React.useState<PageState>('initial');
  const [infoText, setInfoText] = React.useState<string>("To access courses, generate a 6-hour access key. It will be automatically activated after 25 seconds. Follow the steps below.");
  const [accessKeyExpiryTime, setAccessKeyExpiryTime] = React.useState<string | null>(null);
  const [isCustomVideoModalOpen, setIsCustomVideoModalOpen] = React.useState(false);
  const [isButtonAnimating, setIsButtonAnimating] = React.useState(false);
  
  const autoGrantTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const grantAccessAndSetState = React.useCallback(() => {
    const newAccessKey = setAccessKey();
    if (newAccessKey) {
      clearPendingToken();
      setPageState('accessGranted');
      const expiry = getAccessKeyExpiry();
      if (expiry) {
        const expiryDate = new Date(expiry).toLocaleString();
        setAccessKeyExpiryTime(expiryDate);
        setInfoText(`Access Key Activated! Valid for 6 hours. Expires: ${expiryDate}`);
      }
    } else {
      setPageState('error');
      setInfoText('Error generating access key. Please try starting over.');
      clearPendingToken();
    }
  }, []);

  React.useEffect(() => {
    document.title = "Generate Course Access | E-Leak";

    const validAccessKey = getValidAccessKey();
    if (validAccessKey) {
      setPageState('accessGranted');
      const expiry = getAccessKeyExpiry();
      if (expiry) {
        setAccessKeyExpiryTime(new Date(expiry).toLocaleString());
        setInfoText(`Access Key Active! Valid for 6 hours. Expires: ${new Date(expiry).toLocaleString()}`);
      }
      return;
    }

    const pendingToken = getValidPendingToken();
    if (pendingToken && pendingToken.autoGrantTargetTime) {
      const now = Date.now();
      if (now >= pendingToken.autoGrantTargetTime) {
        // Auto-grant time has passed, grant immediately
        grantAccessAndSetState();
      } else {
        // Still waiting for auto-grant
        setPageState('processing');
        setInfoText(`Your 6-hour access key is being generated. Please wait... This may take up to ${Math.ceil((pendingToken.autoGrantTargetTime - now)/1000)} seconds.`);
        const remainingTime = pendingToken.autoGrantTargetTime - now;
        if (autoGrantTimerRef.current) clearTimeout(autoGrantTimerRef.current);
        autoGrantTimerRef.current = setTimeout(grantAccessAndSetState, remainingTime);
      }
    } else {
      setPageState('initial');
      setInfoText("To access courses, generate a 6-hour access key. It will be automatically activated after 25 seconds. Follow the steps below.");
    }

    return () => {
      if (autoGrantTimerRef.current) {
        clearTimeout(autoGrantTimerRef.current);
      }
    };
  }, [grantAccessAndSetState]);


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
    if (pageState !== 'initial') return; // Prevent multiple clicks if already processing

    setIsButtonAnimating(true);
    setTimeout(() => setIsButtonAnimating(false), 1000);

    setPageState('processing');
    const pendingTokenData = setPendingToken();
    
    if (pendingTokenData && pendingTokenData.autoGrantTargetTime) {
        window.open(LINKCENTS_URL, '_blank');
        setInfoText("Your 6-hour access key is being generated. Please wait... This process is automatic and may take up to 25 seconds. You can leave this page open.");
        
        if (autoGrantTimerRef.current) clearTimeout(autoGrantTimerRef.current);
        autoGrantTimerRef.current = setTimeout(grantAccessAndSetState, pendingTokenData.autoGrantTargetTime - Date.now());
    } else {
        setPageState('error');
        setInfoText('Could not initiate access generation. Please try again.');
    }
  };

  const handleShowTutorial = () => {
    setIsCustomVideoModalOpen(true);
  };

  const handleCloseTutorial = () => {
    setIsCustomVideoModalOpen(false);
  };
  
  const handleStartOver = () => {
    if (autoGrantTimerRef.current) clearTimeout(autoGrantTimerRef.current);
    clearPendingToken();
    clearAccessKey();
    setPageState('initial');
    setInfoText("To access courses, generate a 6-hour access key. It will be automatically activated after 25 seconds. Follow the steps below.");
    setAccessKeyExpiryTime(null);
  };

  const MainActionButton = () => {
    if (pageState === 'accessGranted') {
      return (
        <button className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={() => router.push('/')}>
          <span>Go to Courses</span>
        </button>
      );
    }

    if (pageState === 'processing') {
      return (
        <button className="genkey-btn" disabled>
          <Loader2 className="inline-block h-5 w-5 mr-2 animate-spin" />
          <span>Processing Access...</span>
        </button>
      );
    }
    
    // initial or error state
    return (
      <a href={LINKCENTS_URL} className={`genkey-btn genkey-floating ${isButtonAnimating ? 'genkey-animate-pulse' : ''}`} onClick={handleGenerateClick}>
        <span>{pageState === 'error' ? 'Try Again: Generate Key' : 'Generate 6-Hour Access Key'}</span>
      </a>
    );
  };

  return (
    <div className="genkey-page-bg"> {/* Ensure this class applies the dark background */}
      <div className="genkey-container genkey-animate-fadeIn">
        <div className="genkey-content">
          <div className="genkey-glow genkey-glow-1"></div>
          <div className="genkey-glow genkey-glow-2"></div>
          
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

          {(pageState === 'error' || pageState === 'accessGranted' || pageState === 'initial' || pageState === 'processing') && (
             <button className="genkey-btn genkey-btn-secondary" onClick={handleStartOver}>
                <span>{pageState === 'accessGranted' ? 'Generate New Key' : 'Start Over / Reset'}</span>
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
              <div className="feature-content">
                <h4>6-Hour Validity</h4>
                <p>Access key expires after 6 hours for security.</p>
              </div>
            </div>
            
            <div className="genkey-feature">
              <div className="genkey-feature-icon">
                 <KeyRound />
              </div>
              <div className="genkey-feature-content">
                <h4>Automatic Activation</h4>
                <p>Key activates automatically after a short delay.</p>
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
