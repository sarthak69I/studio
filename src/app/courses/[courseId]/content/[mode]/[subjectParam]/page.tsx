
import type { Metadata, ResolvingMetadata } from 'next';
import SubjectContentClient from '@/components/subject-content-client';
// Removed scienceCourseContent, etc. imports if not directly used by generateMetadata here,
// but they might be needed if generateMetadata were to lookup subject names, etc.
// For now, assuming metadata generation primarily relies on params.

const courseDisplayNamesForMetadata: Record<string, string> = {
  '1': "Science Batch (Class 11)",
  '2': "Commerce Batch (Class 11)",
  '3': "Aarambh Batch (Class 10)",
  '4': "Aarambh Batch (Class 9)",
};

const getModeText = (mode: string) => {
    switch (mode) {
        case 'notes': return 'Notes';
        case 'video': return 'Video Lectures';
        case 'dpp': return 'DPPs';
        default: return 'Content';
    }
};

export async function generateMetadata(
  { params }: { params: { courseId: string; mode: string; subjectParam: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { courseId, mode, subjectParam } = params;

  let subjectName = "Unknown Subject";
  try {
    subjectName = decodeURIComponent(subjectParam);
  } catch (e) {
    console.error("Error decoding subjectParam for metadata:", e);
  }

  const courseName = courseDisplayNamesForMetadata[courseId] || `Course ${courseId}`;
  const modeText = getModeText(mode);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app";

  const pageTitle = `${subjectName} ${modeText} | ${courseName} | E-Leak`;
  const pageDescription = `Access ${modeText.toLowerCase()} for ${subjectName} in the ${courseName} on E-Leak. Enhance your learning with comprehensive study materials and lectures.`;

  const keywordsBase = [
    `${courseName} ${subjectName}`,
    `${subjectName} ${modeText}`,
    `E-Leak ${subjectName}`,
    courseName,
    "online learning",
    `E-Leak ${courseName}`,
  ];
  if (courseName.includes("Class 11")) keywordsBase.push("Class 11");
  if (courseName.includes("Class 10")) keywordsBase.push("Class 10");
  if (courseName.includes("Class 9")) keywordsBase.push("Class 9");
  if (subjectName.toLowerCase() === "physics") keywordsBase.push("Physics");
  if (subjectName.toLowerCase() === "chemistry") keywordsBase.push("Chemistry");
  if (subjectName.toLowerCase() === "mathematics") keywordsBase.push("Maths");
  if (subjectName.toLowerCase() === "biology") keywordsBase.push("Biology");
  if (subjectName.toLowerCase() === "english") keywordsBase.push("English Learning");
  if (subjectName.toLowerCase() === "accountancy") keywordsBase.push("Accountancy Basics");
  if (subjectName.toLowerCase() === "business studies") keywordsBase.push("Business Studies Online");
  if (subjectName.toLowerCase() === "economics") keywordsBase.push("Economics Lectures");
  if (subjectName.toLowerCase() === "social science") keywordsBase.push("Social Studies");

  const uniqueKeywords = Array.from(new Set(keywordsBase.map(kw => kw.trim()).filter(Boolean)));
  const canonicalUrl = `${BASE_URL}/courses/${courseId}/content/${mode}/${subjectParam}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: uniqueKeywords.slice(0, 7),
    alternates: {
      canonical: canonicalUrl,
    },
    // Example of inheriting and adding Open Graph details
    // openGraph: {
    //   ...((await parent).openGraph || {}), // Inherit from parent
    //   title: pageTitle,
    //   description: pageDescription,
    //   url: canonicalUrl,
    //   // Consider adding specific images for subjects if available
    // },
  };
}

// This is now a Server Component.
// It renders the SubjectContentClient component which contains the client-side logic.
export default function SubjectPage() {
  return <SubjectContentClient />;
}
