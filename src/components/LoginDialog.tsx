
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { signUpWithEmail, signInWithEmail } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from "@/components/ui/alert";
import ReCAPTCHA from "react-google-recaptcha";
import { Turnstile } from '@marsidev/react-turnstile';
import { useIsMobile } from '@/hooks/use-mobile';


interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const signUpSchema = z.object({
  displayName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const signInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, { message: "Password is required." }),
});

export default function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isVerified, setIsVerified] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const isMobile = useIsMobile();

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { displayName: "", email: "", password: "" },
  });

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSignUpSubmit = async (values: z.infer<typeof signUpSchema>) => {
    setIsLoading(true);
    setError(null);
    try {
      await signUpWithEmail(values.email, values.password, values.displayName);
      toast({
        title: "Account Created!",
        description: "Welcome to E-Leak! You are now signed in.",
      });
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || "Failed to create account.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSignInSubmit = async (values: z.infer<typeof signInSchema>) => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithEmail(values.email, values.password);
       toast({
        title: "Sign In Successful!",
        description: "Welcome back to E-Leak!",
      });
      onOpenChange(false);
    } catch (err: any) {
      setError(err.message || "Failed to sign in.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Reset forms and errors when dialog is closed
  React.useEffect(() => {
    if (!open) {
      signUpForm.reset();
      signInForm.reset();
      setError(null);
      setIsLoading(false);
      setIsVerified(false);
      recaptchaRef.current?.reset();
    }
  }, [open, signUpForm, signInForm]);

  const handleVerificationSuccess = () => {
    setIsVerified(true);
  };

  const handleRecaptchaExpired = () => {
    setIsVerified(false);
  };

  const VerificationWidget = () => (
    <div className="flex justify-center py-2">
      {isMobile ? (
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={handleVerificationSuccess}
          onExpired={handleRecaptchaExpired}
        />
      ) : (
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={handleVerificationSuccess}
          onExpire={handleRecaptchaExpired}
        />
      )}
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
      <DialogContent 
        className="sm:max-w-md rounded-xl"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold">Welcome to E-Leak</DialogTitle>
          <DialogDescription>
            Sign in or create an account to get started.
          </DialogDescription>
        </DialogHeader>

        <Alert variant="destructive" className="my-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-xs sm:text-sm">
                If you are a new user, please use the 'Sign Up' tab. If you have an existing account, use the 'Sign In' tab.
            </AlertDescription>
        </Alert>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          <TabsContent value="signin" className="space-y-4 pt-4">
             <Form {...signInForm}>
                <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4">
                   <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                         <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                         <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="••••••••" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <VerificationWidget />
                    <Button type="submit" className="w-full" disabled={isLoading || !isVerified}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                    </Button>
                </form>
             </Form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 pt-4">
             <Form {...signUpForm}>
                <form onSubmit={signUpForm.handleSubmit(onSignUpSubmit)} className="space-y-4">
                   <FormField
                      control={signUpForm.control}
                      name="displayName"
                      render={({ field }) => (
                         <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                   <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                         <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="name@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                         <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="At least 6 characters" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <VerificationWidget />
                    <Button type="submit" className="w-full" disabled={isLoading || !isVerified}>
                         {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Create Account
                    </Button>
                </form>
             </Form>
          </TabsContent>
        </Tabs>
        
        {error && <p className="text-sm text-destructive text-center pt-2">{error}</p>}

      </DialogContent>
    </Dialog>
  );
}
