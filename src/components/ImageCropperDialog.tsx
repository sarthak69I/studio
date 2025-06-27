
'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from '@/hooks/use-toast';
import { Loader2, Crop, Camera } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import ReactCrop, { centerCrop, makeAspectCrop, type Crop as CropType } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { updateUserProfile } from '@/lib/firebase';
import type { User } from 'firebase/auth';

interface ImageCropperDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: User;
  onUploadComplete: () => void;
}

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop({ unit: '%', width: 90 }, aspect, mediaWidth, mediaHeight),
    mediaWidth,
    mediaHeight
  );
}

export default function ImageCropperDialog({ open, onOpenChange, user, onUploadComplete }: ImageCropperDialogProps) {
  const { toast } = useToast();
  // Cropper state
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<CropType>();
  const [completedCrop, setCompletedCrop] = useState<CropType>();
  const [isLoading, setIsLoading] = useState(false);
  
  // Camera state
  const [showCamera, setShowCamera] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  // Refs
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Effect to request and handle camera permissions
  useEffect(() => {
    if (showCamera && open) {
      const getCameraPermission = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          setHasCameraPermission(true);
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Error accessing camera:', error);
          setHasCameraPermission(false);
          toast({
            variant: 'destructive',
            title: 'Camera Access Denied',
            description: 'Please enable camera permissions in your browser settings to use this feature.',
          });
          setShowCamera(false); // Fallback to upload view
        }
      };
      getCameraPermission();

      // Cleanup function to stop camera stream when component unmounts or view changes
      return () => {
        if (videoRef.current && videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
        }
      };
    }
  }, [showCamera, open, toast]);


  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 4 * 1024 * 1024) { // 4MB size limit
        toast({ variant: "destructive", title: "Image Too Large", description: "Please select an image smaller than 4MB." });
        return;
      }
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
      reader.readAsDataURL(file);
    }
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 1));
  };
  
  const handleCapture = () => {
    if (videoRef.current && hasCameraPermission) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUri = canvas.toDataURL('image/jpeg');
        setImgSrc(dataUri);
        setShowCamera(false);
      } else {
        toast({ variant: "destructive", title: "Capture Error", description: "Could not process the selfie." });
      }
    }
  };

  const handleSaveCrop = async () => {
    if (!completedCrop || !imgRef.current) {
        toast({ variant: "destructive", title: "Crop Error", description: "Could not process the crop. Please try again." });
        return;
    }

    setIsLoading(true);
    const canvas = document.createElement('canvas');
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    
    const targetWidth = 96; 
    canvas.width = targetWidth;
    canvas.height = targetWidth;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        toast({ variant: "destructive", title: "Canvas Error", description: "Could not get canvas context." });
        setIsLoading(false);
        return;
    }

    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;

    ctx.drawImage(
      imgRef.current,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      targetWidth,
      targetWidth
    );

    const base64Image = canvas.toDataURL('image/jpeg', 0.85);

    try {
        await updateUserProfile(user, user.displayName || '', base64Image);
        toast({ title: "Avatar Updated!", description: "Your new profile picture has been saved." });
        onUploadComplete();
        handleClose();
    } catch (error: any) {
        console.error("Update profile failed:", error);
        if (error.code === 'auth/invalid-profile-attribute') {
             toast({ variant: "destructive", title: "Upload Failed", description: "The cropped image is still too large. Please try a smaller or simpler image." });
        } else {
             toast({ variant: "destructive", title: "Update Failed", description: error.message || "Could not update your avatar." });
        }
    } finally {
        setIsLoading(false);
    }
  };

  const handleClose = () => {
    setImgSrc('');
    setCrop(undefined);
    setCompletedCrop(undefined);
    setShowCamera(false);
    setHasCameraPermission(false);
    if(fileInputRef.current) fileInputRef.current.value = '';
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogDescription>
            {showCamera ? 'Position yourself and capture your selfie.' : 'Choose a file or take a selfie to use as your new avatar. (Max 4MB)'}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            {!imgSrc && !showCamera && (
                <div className="flex flex-col gap-4">
                    <Input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        onChange={onSelectFile}
                    />
                     <div className="relative flex items-center">
                        <div className="flex-grow border-t border-muted"></div>
                        <span className="flex-shrink mx-4 text-muted-foreground text-sm">OR</span>
                        <div className="flex-grow border-t border-muted"></div>
                    </div>
                     <Button variant="outline" onClick={() => setShowCamera(true)}>
                        <Camera className="mr-2 h-4 w-4" />
                        Take a selfie
                    </Button>
                </div>
            )}

            {showCamera && (
                <div className="space-y-4">
                    <video ref={videoRef} className="w-full aspect-video rounded-md bg-muted" autoPlay muted playsInline />
                    <div className="flex justify-between items-center">
                        <Button variant="outline" onClick={() => setShowCamera(false)} disabled={isLoading}>
                            Back to Upload
                        </Button>
                        <Button onClick={handleCapture} disabled={!hasCameraPermission || isLoading}>
                            <Camera className="mr-2 h-4 w-4" />
                            Capture Photo
                        </Button>
                    </div>
                     {!hasCameraPermission && (
                         <Alert variant="destructive">
                            <AlertTitle>Camera Access Required</AlertTitle>
                            <AlertDescription>
                                Please allow camera access to use this feature. You may need to refresh the page after granting permission.
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            )}

            {imgSrc && !showCamera && (
                <div className="flex justify-center bg-muted rounded-md p-2">
                    <ReactCrop
                        crop={crop}
                        onChange={c => setCrop(c)}
                        onComplete={c => setCompletedCrop(c)}
                        aspect={1}
                        minWidth={100}
                        circularCrop
                    >
                        <img
                            ref={imgRef}
                            alt="Crop preview"
                            src={imgSrc}
                            onLoad={onImageLoad}
                            style={{ maxHeight: '60vh' }}
                        />
                    </ReactCrop>
                </div>
            )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSaveCrop} disabled={!completedCrop || isLoading || showCamera}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Crop className="mr-2 h-4 w-4" />}
            Save Avatar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
