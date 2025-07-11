// src/components/EditProfileDialog.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Camera } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { updateUserProfile } from '@/lib/firebase';
import ImageCropperDialog from '@/components/ImageCropperDialog';

const profileSchema = z.object({
  displayName: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  stateCity: z.string().max(50).optional(),
});

export default function EditProfileDialog({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
    const { toast } = useToast();
    const { user, userData } = useAuth();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isCropperOpen, setIsCropperOpen] = React.useState(false);

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            displayName: userData?.displayName || user?.displayName || "",
            stateCity: userData?.stateCity || "",
        },
    });
    
    useEffect(() => {
        form.reset({
            displayName: userData?.displayName || user?.displayName || "",
            stateCity: userData?.stateCity || "",
        });
    }, [userData, user, form, open]);


    const onSubmit = async (values: z.infer<typeof profileSchema>) => {
        if (!user) {
            toast({ variant: "destructive", title: "Not Authenticated" });
            return;
        }
        setIsLoading(true);
        try {
            await updateUserProfile(user, {
                displayName: values.displayName,
                stateCity: values.stateCity,
            });
            toast({
                title: "Profile Updated!",
                description: "Your changes have been saved.",
            });
            onOpenChange(false);
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Update Failed",
                description: error.message || "Could not update your profile.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Edit Your Profile</DialogTitle>
                        <DialogDescription>
                            Update your display name, location, and profile picture.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center gap-4 py-4">
                        <Avatar className="h-20 w-20">
                           <AvatarImage src={userData?.photoURL || user?.photoURL || ''} alt={userData?.displayName || 'User'} />
                           <AvatarFallback className="text-2xl bg-muted">{userData?.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" onClick={() => setIsCropperOpen(true)}>Change Photo</Button>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="displayName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Display Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="stateCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State/City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Haryana/Faridabad" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit" disabled={isLoading} className="w-full">
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Save Changes
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
            <ImageCropperDialog
                open={isCropperOpen}
                onOpenChange={setIsCropperOpen}
                onUploadComplete={() => {
                    setIsCropperOpen(false);
                }}
            />
        </>
    );
};
