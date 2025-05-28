
'use client';

import type {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import type {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';
import type {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import type {Badge, BadgeProps} from '@/components/ui/badge';
import type {
  Button,
  ButtonProps,
  buttonVariants,
} from '@/components/ui/button';
import type {Calendar, CalendarProps} from '@/components/ui/calendar';
import type {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type {Checkbox} from '@/components/ui/checkbox';
import type {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from '@/components/ui/form';
import type {Input} from '@/components/ui/input';
import type {Label} from '@/components/ui/label';
import type {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import type {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type {Progress} from '@/components/ui/progress';
import type {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import type {
  ScrollArea,
  ScrollBar,
} from '@/components/ui/scroll-area';
import type {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type {Separator} from '@/components/ui/separator';
import type {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import type {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import type {Skeleton} from '@/components/ui/skeleton';
import type {Slider} from '@/components/ui/slider';
import type {Switch} from '@/components/ui/switch';
import type {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import type {Textarea} from '@/components/ui/textarea';
import type {
  Toast,
  ToastAction,
  ToastActionElement,
  ToastClose,
  ToastDescription,
  ToastProps,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';
import type {Toaster} from '@/components/ui/toaster';
import type {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type {useToast} from '@/hooks/use-toast';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
// Button, ArrowLeft, HomeIcon, ChevronRight are already imported via the type imports above.
// We just need the actual components for usage.
import { Button as ActualButton } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';


const subjectContentMap: { [key: string]: string | string[] } = {
  'Physics': 'Units and Measurement',
  'Chemistry': ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements'],
  'Biology': 'The Living World',
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'],
  'Business Studies': ['Business, Trade & Commerce', 'Forms of Business Organisations'],
  'Accountancy': ['Basic Concepts of Accounts', 'Introduction To accounting'],
  'Economics': 'Economics Content Coming Soon',
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon',
};

export default function SubjectContentPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = typeof params.courseId === 'string' ? params.courseId : '';
  const mode = typeof params.mode === 'string' ? params.mode : '';
  const subjectParam = typeof params.subjectParam === 'string' ? params.subjectParam : '';
  
  const [subjectName, setSubjectName] = React.useState('');
  const [displayedContent, setDisplayedContent] = React.useState<string | string[] | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    if (subjectParam) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);
        const content = subjectContentMap[decodedSubjectName] || `Content for ${decodedSubjectName} Coming Soon`;
        setDisplayedContent(content);
      } catch (e) {
        console.error("Failed to decode subject param:", e);
        const fallbackName = "Invalid Subject";
        setSubjectName(fallbackName);
        setDisplayedContent(`Content for '${subjectParam}' could not be loaded due to a decoding error.`);
      }
    } else {
      setSubjectName('Unknown Subject');
      setDisplayedContent('No subject specified in URL.');
    }
  }, [subjectParam]);

  React.useEffect(() => {
    if (isMounted && subjectName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      let pageTitleSegment = subjectName;
      // If displayedContent is a string and represents a single topic (not a coming soon message), use it for the title.
      // If it's an array, the subjectName itself is a better title segment.
      if (typeof displayedContent === 'string' && !displayedContent.includes('Coming Soon') && !displayedContent.includes('could not be loaded')) {
        pageTitleSegment = displayedContent;
      }
      document.title = `${pageTitleSegment} - ${modeText} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Subject Content | E-Leak';
    }
  }, [isMounted, subjectName, mode, displayedContent]);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const renderCard = (item: string, index: number) => {
    const cardContent = (
      <div 
        className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md 
                   transform opacity-0 animate-fadeInUp-custom
                   transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold">{item}</span>
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode} for {subjectName}
        </p>
      </div>
    );

    // Specific link for "Some Basic Concepts of Chemistry"
    if (subjectName === 'Chemistry' && item === 'Some Basic Concepts of Chemistry') {
      return (
        <Link 
          key={index} 
          href={`/courses/${courseId}/content/${mode}/${encodeURIComponent(subjectName)}/${encodeURIComponent(item)}/lectures`}
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </Link>
      );
    }

    // For other items, or items that don't have a special link (render as non-clickable for now)
    return (
      <div 
        key={index}
        className="w-full max-w-md block mb-6 cursor-default" 
      >
        {cardContent}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
        <header className="flex items-center justify-between mb-8 w-full max-w-4xl mx-auto">
          <ActualButton variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </ActualButton>
          <Link href="/" passHref>
            <ActualButton variant="outline" size="lg" className="rounded-lg">
              <HomeIcon className="mr-2 h-5 w-5" />
              Home
            </ActualButton>
          </Link>
        </header>

        <main className="flex-grow flex flex-col justify-start items-center pt-10 md:pt-16 w-full">
          {subjectName && subjectName !== 'Unknown Subject' && subjectName !== 'Invalid Subject' && (
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              {subjectName} <span className="capitalize">{mode}</span>
            </h1>
          )}
          
          {displayedContent ? (
            Array.isArray(displayedContent) ? (
              displayedContent.map((item, index) => renderCard(item, index))
            ) : (
              // Handle single string content (including "Coming Soon" messages)
              (typeof displayedContent === 'string' && (displayedContent.includes('Coming Soon') || displayedContent.includes('could not be loaded'))) ? (
                (subjectName === 'Unknown Subject' || displayedContent.includes('could not be loaded')) ? (
                    <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{displayedContent}</p>
                ) : (
                    <p className="text-xl text-muted-foreground">{displayedContent}</p>
                )
              ) : (
                // Render single topic card if it's not a "Coming Soon" type message
                typeof displayedContent === 'string' ? renderCard(displayedContent, 0) : null
              )
            )
          ) : (
            // Fallback for when displayedContent is null (e.g., during initial load or if logic fails)
             subjectName === 'Unknown Subject' || (typeof displayedContent === 'string' && displayedContent && displayedContent.includes('could not be loaded')) ? (
              <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">
                {displayedContent || 'Content could not be loaded.'}
              </p>
            ) : (
              <p className="text-xl text-muted-foreground">Loading content or content not found.</p>
            )
          )}
        </main>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
