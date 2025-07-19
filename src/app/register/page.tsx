'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { signUpWithEmail, signInWithGoogle } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { Loader2, UserPlus } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { Separator } from '@/components/ui/separator';

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.9992 10.2195H12.2492V13.8015H17.4392C17.1552 15.894 15.8432 17.589 13.8992 18.7845V21.4965H17.2912C19.7432 19.3395 21.2112 16.0905 21.2112 12.219C21.2112 11.511 21.1332 10.845 20.9992 10.2195Z" fill="#4285F4"/>
    <path d="M12.2492 22.0005C15.1112 22.0005 17.5192 21.0495 19.3492 19.4685L16.0342 16.9485C15.0442 17.5995 13.7722 18.0495 12.2492 18.0495C9.44324 18.0495 7.07324 16.1415 6.20324 13.6395H2.70724V16.218C4.50224 19.7205 8.04524 22.0005 12.2492 22.0005Z" fill="#34A853"/>
    <path d="M6.20327 13.6395C5.97827 12.9885 5.85827 12.2805 5.85827 11.541C5.85827 10.8015 5.97827 10.0935 6.20327 9.4425V6.864H2.70727C1.94327 8.376 1.50027 10.0215 1.50027 11.541C1.50027 13.0605 1.94327 14.706 2.70727 16.218L6.20327 13.6395Z" fill="#FBBC05"/>
    <path d="M12.2492 5.031C13.7272 5.031 15.0052 5.5395 16.0222 6.51L19.4142 3.1185C17.5132 1.377 15.1052 0.333008 12.2492 0.333008C8.04524 0.333008 4.50224 2.613 2.70724 6.1155L6.20324 8.694C7.07324 6.192 9.44324 5.031 12.2492 5.031Z" fill="#EA4335"/>
  </svg>
);

const signUpSchema = z.object({
  displayName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isVerified, setIsVerified] = React.useState(false);

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { displayName: "", email: "", password: "" },
  });

  React.useEffect(() => {
    if (!authLoading && user) {
      router.replace('/');
    }
  }, [user, authLoading, router]);

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    setIsLoading(true);
    setError(null);
    try {
      await signUpWithEmail(values.email, values.password, values.displayName);
      toast({
        title: "Account Created!",
        description: "Welcome to E-Leak! You are now signed in.",
      });
      router.push('/');
    } catch (err: any) {
      setError(err.message || "Failed to create account.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      toast({
        title: "Sign In Successful!",
        description: "Welcome to E-Leak!",
      });
      router.push('/');
    } catch (err: any) {
       setError(err.message || "Failed to sign in with Google.");
    } finally {
       setIsLoading(false);
    }
  };

  const handleVerificationSuccess = () => setIsVerified(true);
  const handleVerificationExpired = () => setIsVerified(false);

  if (authLoading || user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-md animate-fadeInUp-custom">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2"><UserPlus />Create an Account</CardTitle>
          <CardDescription>Join E-Leak for free to track your progress and more.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <>
                  <GoogleIcon />
                  <span className="ml-2">Sign up with Google</span>
                </>
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="displayName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl><Input placeholder="name@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl><Input type="password" placeholder="At least 6 characters" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-center py-2">
                  <Turnstile
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                    onSuccess={handleVerificationSuccess}
                    onExpire={handleVerificationExpired}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading || !isVerified}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Account
                </Button>
              </form>
            </Form>
          </div>
          {error && <p className="text-sm text-destructive text-center pt-4">{error}</p>}
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-muted-foreground">
          <p>Already have an account?&nbsp;</p>
          <Link href="/signin" className="text-primary hover:underline font-medium">Sign In</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
