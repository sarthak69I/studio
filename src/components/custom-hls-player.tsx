// src/components/custom-hls-player.tsx
'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Hls from 'hls.js';
import {
  Play,
  Pause,
  Volume2,
  Volume1,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
} from 'lucide-react';

interface CustomHlsPlayerProps {
  hlsUrl: string;
  title?: string;
}

const CustomHlsPlayer: React.FC<CustomHlsPlayerProps> = ({ hlsUrl, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastVolumeRef = useRef<number>(1);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const ICONS = {
    play: <Play className="h-6 w-6 sm:h-7 sm:w-7" />,
    pause: <Pause className="h-6 w-6 sm:h-7 sm:w-7" />,
    replay: <RotateCcw className="h-6 w-6 sm:h-7 sm:w-7" />,
    volUp: <Volume2 className="h-6 w-6 sm:h-7 sm:w-7" />,
    volMid: <Volume1 className="h-6 w-6 sm:h-7 sm:w-7" />,
    volMute: <VolumeX className="h-6 w-6 sm:h-7 sm:w-7" />,
    full: <Maximize className="h-6 w-6 sm:h-7 sm:w-7" />,
    fullExit: <Minimize className="h-6 w-6 sm:h-7 sm:w-7" />,
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === Infinity || timeInSeconds < 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const debouncedShowControls = useCallback(() => {
    setShowControls(true);
    if (playerContainerRef.current) playerContainerRef.current.style.cursor = 'default';
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    if (isPlaying && !isEnded) {
      controlsTimeoutRef.current = setTimeout(() => {
        // Don't hide if a range input is focused
        if (document.activeElement?.tagName !== 'INPUT' || (document.activeElement as HTMLInputElement).type !== 'range') {
          setShowControls(false);
          if (playerContainerRef.current) playerContainerRef.current.style.cursor = 'none';
        }
      }, 3000);
    }
  }, [isPlaying, isEnded]);


  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hlsRef.current = hls;
      hls.loadSource(hlsUrl);
      hls.attachMedia(videoElement);
      setIsLoading(true);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
         console.log('HLS.js: Manifest parsed');
      });
      hls.on(Hls.Events.LEVEL_LOADED, (_event, data) => {
        if (videoElement.duration === Infinity && data.details.totalduration) {
            setDuration(data.details.totalduration);
        }
      });
      hls.on(Hls.Events.FRAG_BUFFERED, () => {
        if (videoElement.readyState >= 3) setIsLoading(false);
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        console.error(
          `HLS.js Error Data: Type: ${data.type}, Details: ${data.details}, Fatal: ${data.fatal}, URL: ${data.url || 'N/A'}`,
          'Full error data object:', data,
          'Actual error instance (if any):', data.error
        );
        setIsLoading(false);
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls.recoverMediaError();
              break;
            default:
              hls.destroy();
              hlsRef.current = null;
              break;
          }
        }
      });
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = hlsUrl;
      setIsLoading(true);
      videoElement.addEventListener('loadedmetadata', () => {
        console.log("Native HLS: Metadata loaded");
        setIsLoading(false);
      });
      videoElement.addEventListener('error', (e) => {
        console.error("Native HLS Error:", e);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
      console.error("HLS playback not supported.");
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [hlsUrl]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      if (video.duration !== Infinity) setDuration(video.duration);
      setIsLoading(false);
      debouncedShowControls();
    };
    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
        setDuration(video.duration); // Keep duration updated
      }
    };
    const handlePlay = () => { setIsPlaying(true); setIsEnded(false); debouncedShowControls(); };
    const handlePause = () => { setIsPlaying(false); if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); setShowControls(true); };
    const handleEnded = () => { setIsPlaying(false); setIsEnded(true); if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); setShowControls(true); };
    const handleVolumeChange = () => {
      setVolume(video.volume);
      setIsMuted(video.muted);
      if (!video.muted && video.volume > 0) lastVolumeRef.current = video.volume;
    };
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlayThrough = () => setIsLoading(false);
    const handlePlaying = () => setIsLoading(false);


    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('volumechange', handleVolumeChange);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('playing', handlePlaying);


    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('volumechange', handleVolumeChange);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('playing', handlePlaying);
    };
  }, [debouncedShowControls]);

  useEffect(() => { // Handle initial controls visibility
    if (!isPlaying) {
      debouncedShowControls();
    }
  }, [isPlaying, debouncedShowControls]);


  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isEnded) videoRef.current.currentTime = 0;
    videoRef.current.paused || videoRef.current.ended ? videoRef.current.play() : videoRef.current.pause();
  };

  const handleVolumeButtonClick = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    if (videoRef.current.muted) {
      videoRef.current.volume = 0;
    } else {
      videoRef.current.volume = lastVolumeRef.current > 0 ? lastVolumeRef.current : 0.1;
    }
  };

  const handleVolumeBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    videoRef.current.muted = newVolume === 0;
    if (newVolume > 0) lastVolumeRef.current = newVolume;
  };

  const handleSeekBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current || isNaN(duration) || duration === 0) return;
    videoRef.current.currentTime = parseFloat(e.target.value);
  };
  
  const handleSeekBarMouseDown = () => {
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
  };

  const handleSeekBarMouseUp = () => {
    if (isPlaying && !isEnded) {
      debouncedShowControls();
    }
  };


  const toggleFullscreen = () => {
    if (!playerContainerRef.current) return;
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen().catch(err => console.error(`Fullscreen error: ${err.message}`));
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        screen.orientation?.lock('landscape').catch(err => console.warn("Could not lock to landscape:", err));
      } else {
        screen.orientation?.unlock().catch(err => console.warn("Could not unlock orientation:", err));
      }
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);


  const playPauseIcon = isEnded ? ICONS.replay : isPlaying ? ICONS.pause : ICONS.play;
  const volumeIcon = isMuted || volume === 0 ? ICONS.volMute : volume < 0.5 ? ICONS.volMid : ICONS.volUp;
  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={playerContainerRef}
      className="relative w-full aspect-video bg-black rounded-lg shadow-2xl overflow-hidden group"
      onMouseEnter={debouncedShowControls}
      onMouseMove={debouncedShowControls}
      onMouseLeave={() => { 
        if (isPlaying && !isEnded && document.activeElement?.tagName !== 'INPUT') { 
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
                if (playerContainerRef.current) playerContainerRef.current.style.cursor = 'none';
            }, 300);
        }
      }}
    >
      <video ref={videoRef} className="w-full h-full object-contain" playsInline preload="metadata"></video>

      {isLoading && (
        <div id="loadingSpinner" className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        </div>
      )}

      <div
        id="videoControls"
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 text-white transition-opacity duration-300 ease-in-out flex flex-col space-y-2 z-10 ${
          showControls ? 'opacity-100' : 'opacity-0'
        } ${isFullscreen ? 'pb-5' : ''}`}
      >
        <div className="relative w-full h-3 flex items-center">
           <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[6px] bg-white/30 rounded-full">
                <div 
                    id="seekBarProgressFill" 
                    className="bg-red-500 h-full rounded-full pointer-events-none"
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
          <input
            type="range"
            id="seekBar"
            value={currentTime}
            max={duration || 0}
            step="0.1"
            onChange={handleSeekBarChange}
            onMouseDown={handleSeekBarMouseDown}
            onMouseUp={handleSeekBarMouseUp}
            className="absolute w-full h-full opacity-0 z-10 cursor-pointer [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:bg-red-500 [&::-moz-range-thumb]:bg-red-500 [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-moz-range-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-moz-range-thumb]:border-white"
            aria-label="Seek bar"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={togglePlayPause} className="p-1.5 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" aria-label={isPlaying ? 'Pause' : 'Play'}>
              {playPauseIcon}
            </button>
            <div className="flex items-center group/volume">
              <button onClick={handleVolumeButtonClick} className="p-1.5 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" aria-label={isMuted ? 'Unmute' : 'Mute'}>
                {volumeIcon}
              </button>
              <input
                type="range"
                id="volumeBar"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeBarChange}
                className="w-0 group-hover/volume:w-20 h-2 transition-all duration-200 opacity-0 group-hover/volume:opacity-100 ml-1 
                           [&::-webkit-slider-runnable-track]:bg-white/30 [&::-webkit-slider-runnable-track]:h-[6px] [&::-webkit-slider-runnable-track]:rounded-full
                           [&::-moz-range-track]:bg-white/30 [&::-moz-range-track]:h-[6px] [&::-moz-range-track]:rounded-full
                           [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:bg-red-500 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:border
                           [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:bg-red-500 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:border"
                aria-label="Volume control"
              />
            </div>
            <div className="text-xs sm:text-sm font-medium">
              <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={toggleFullscreen} className="p-1.5 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50" aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}>
              {isFullscreen ? ICONS.fullExit : ICONS.full}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHlsPlayer;
