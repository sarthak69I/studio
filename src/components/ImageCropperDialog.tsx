'use client';

import React, { useState, useRef } from 'react';
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
import { Loader2, Crop } from 'lucide-react';
import ReactCrop, { centerCrop, makeAspectCrop, type Crop as CropType } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { updateUserProfile } from '@/lib/firebase'; // Removed uploadAvatar
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
  const [imgSrc, setImgSrc] = useState('');
  const [crop, setCrop] = useState<CropType>();
  const [completedCrop, setCompletedCrop] = useState<CropType>();
  const [isLoading, setIsLoading] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
  
  const handleSaveCrop = async () => {
    if (!completedCrop || !imgRef.current) {
        toast({ variant: "destructive", title: "Crop Error", description: "Could not process the crop. Please try again." });
        return;
    }

    setIsLoading(true);
    const canvas = document.createElement('canvas');
    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    
    // For better quality on high-res devices, let's limit the canvas size
    const targetWidth = 256;
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

    const base64Image = canvas.toDataURL('image/jpeg', 0.9);

    try {
        // Instead of uploading to storage, we pass the data URL directly to the user profile
        await updateUserProfile(user, user.displayName || '', base64Image);

        toast({ title: "Avatar Updated!", description: "Your new profile picture has been saved." });
        onUploadComplete();
        handleClose();
    } catch (error: any) {
        console.error("Update profile failed:", error);
        toast({ variant: "destructive", title: "Update Failed", description: error.message || "Could not update your avatar." });
    } finally {
        setIsLoading(false);
    }
  };

  const handleClose = () => {
    setImgSrc('');
    setCrop(undefined);
    setCompletedCrop(undefined);
    if(fileInputRef.current) fileInputRef.current.value = '';
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Profile Picture</DialogTitle>
          <DialogDescription>
            Select and crop an image to use as your new avatar. (Max 4MB)
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={onSelectFile}
          />
          {imgSrc && (
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
          <Button onClick={handleSaveCrop} disabled={!completedCrop || isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Crop className="mr-2 h-4 w-4" />}
            Save Avatar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
