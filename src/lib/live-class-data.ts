
'use client';

// This file centralizes all live class details.
// It is imported by the new unified /live page.

const newStreamPlayerBaseUrl = 'https://e-leak-strm.web.app/?url=';

const getDailyClassTimes = (now: Date, hour: number, minute: number, duration: number) => {
    let startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);
    // If class time for today has already passed, schedule for tomorrow
    if (now.getTime() > startTime.getTime() + duration * 60 * 1000) {
        startTime.setDate(startTime.getDate() + 1);
    }
    const endTime = new Date(startTime.getTime() + duration * 60 * 1000);
    return { start: startTime, end: endTime };
};

export const courseLiveDetails: Record<string, any> = {
  '1': { // Science
    pageTitle: "11th Science",
    class1Subject: "MATHEMATICS",
    class2Subject: "PHYSICS",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://www.youtube.com/live/Z4skt0HhfKE?si=PPf2cRBzo8z6mSSC')}`,
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://www.youtube.com/live/61EwLVK3r6Q?si=PkuMmx6BdthY_yhN')}`,
    class1Visible: true,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 1, 300), // 5:01 PM for 5h
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 10, 90),// 8:10 PM for 1.5h
  },
  '2': { // Commerce
    pageTitle: "11th Commerce",
    class1Subject: "MATHEMATICS",
    class2Subject: "BUSINESS STUDIES",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://www.youtube.com/live/Z4skt0HhfKE?si=PPf2cRBzo8z6mSSC')}`,
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d133w6ldrek1er.cloudfront.net/out/v1/4882f3a454494165b396de72e412d7aa/index_4.m3u8')}`,
    class1Visible: true,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 1, 300),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 10, 90),
  },
  '3': { // Aarambh (Class 10)
    pageTitle: "10th Aarambh",
    class1Subject: "SOCIAL SCIENCE",
    class2Subject: "MATHEMATICS",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://www.youtube.com/live/aRVZEq4KuxQ?si=LzIjENjEAr9Nrl_Q')}`,
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://dga9kme080o0w.cloudfront.net/out/v1/5c7cfedca3df4fc99ea383b5f2e6a7a8/index_4.m3u8')}`,
    class1Visible: true,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 1, 300),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 10, 90),
  },
  '4': { // Aarambh (Class 9)
    pageTitle: "9th Aarambh",
    class1Subject: "SCIENCE till 6:40",
    class2Subject: "SST",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d133w6ldrek1er.cloudfront.net/out/v1/f15d86916b1f404baeb09967b920d86a/index_4.m3u8')}`, 
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://dga9kme080o0w.cloudfront.net/out/v1/90ab1354cfcd4c5b83cf78a87d96041e/index_4.m3u8')}`, 
    class1Visible: true,
    class2Visible: true,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 1, 300),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 10, 90),
  }
};
