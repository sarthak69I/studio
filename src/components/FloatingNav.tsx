
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookCopy, Radio, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import LoginDialog from './LoginDialog';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/my-courses', label: 'My Courses', icon: BookCopy },
    { href: '/live', label: 'Live Classes', icon: Radio },
    { href: '/dashboard', label: 'Profile', icon: User },
];

export default function FloatingNav() {
    const pathname = usePathname();
    const { user, loading } = useAuth();
    const [isLoginDialogOpen, setIsLoginDialogOpen] = React.useState(false);

    const handleProtectedLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!loading && !user && (href === '/my-courses' || href === '/dashboard')) {
            e.preventDefault();
            setIsLoginDialogOpen(true);
        }
    };

    return (
        <>
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
                <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg p-2">
                    <nav className="flex items-center justify-around">
                        {navItems.map((item) => {
                            const isActive = (item.href === '/' && pathname === '/') || (item.href !== '/' && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => handleProtectedLinkClick(e, item.href)}
                                    className={cn(
                                        "flex flex-col items-center justify-center text-center w-16 h-16 rounded-full transition-colors duration-200",
                                        isActive
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:bg-muted"
                                    )}
                                >
                                    <item.icon className="h-6 w-6 mb-1" />
                                    <span className="text-xs font-medium">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
            <LoginDialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen} />
        </>
    );
}

