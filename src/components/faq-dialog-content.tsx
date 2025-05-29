
// src/components/faq-dialog-content.tsx
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqDialogContent() {
  return (
    <div className="py-4 space-y-4 text-sm max-h-[60vh] overflow-y-auto">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
          <AccordionContent>
            You can enroll by clicking the "Enroll Now" button on any course card from the homepage. This will take you to the course-specific page where you can access content.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Where can I find the class timetable?</AccordionTrigger>
          <AccordionContent>
            Each course card on the homepage has a "Time Table" button. Clicking it will open a dialog showing the schedule for that course.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are the live classes recorded?</AccordionTrigger>
          <AccordionContent>
            Yes, after a live class session concludes, the recorded video lectures are typically made available in the "Video" section under the respective course and topic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How do I switch between light and dark mode?</AccordionTrigger>
          <AccordionContent>
            You can toggle the theme using the "Enable Light Mode" / "Enable Dark Mode" option available in the main menu (accessible via the icon in the top-right corner).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How can I watch the live class videos?</AccordionTrigger>
          <AccordionContent>
           Click on the "Enroll Now" button of any course, then click on the "JOIN LIVE CLASS" button. If a class is live, the video player will appear. If it's upcoming, a countdown will be shown.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Where can I find notes for the lectures?</AccordionTrigger>
          <AccordionContent>
            On the course enrollment page, select the "Notes" mode. Then, choose your subject and topic. If notes are available for specific lectures, they will be listed, and you can click to view/download them.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger>How do I get class updates?</AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">To get all class updates, please join our Telegram channel and subscribe to our YouTube channels:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Join on Telegram:
                <Link href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Telegram
                </Link>
              </li>
              <li>
                Subscribe on YouTube (Main):
                <Link href="https://youtube.com/@prarambh-free?si=jT5p0zC1qYfDd-pR" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Main Channel
                </Link>
              </li>
              <li>
                Subscribe on YouTube (Backup):
                <Link href="https://youtube.com/@nexttoppers-backup?si=GP3sqWU8fmCa8EQL" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                  Backup Channel
                </Link>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
