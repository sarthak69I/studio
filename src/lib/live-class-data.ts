
'use client';

// This file centralizes all live class details.
// It is imported by the new unified /live page.

const getDailyClassTimes = (now: Date, hour: number, minute: number, duration: number) => {
    let startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0);
    let endTime = new Date(startTime.getTime() + duration * 60 * 1000);

    // If class END time for today has already passed, schedule for tomorrow
    if (now.getTime() > endTime.getTime()) {
        startTime.setDate(startTime.getDate() + 1);
        endTime.setDate(endTime.getDate() + 1);
    }
    
    return { start: startTime, end: endTime };
};

export const courseLiveDetails: Record<string, any> = {
  '1': { // Science
    pageTitle: "11th Science",
    class1Subject: "Physics",
    class2Subject: "",
    classTimeLabel: "5:00 PM - 8:OO PM",
    classTimeLabel2: "8:00 PM - 9:30 PM", 
    class1LiveStreamUrl: 'https://dga9kme080o0w.cloudfront.net/out/v1/4c919c218c124ad1bc7ca946be5c1a53/index_4.m3u8',
    class2LiveStreamUrl: '',
    class1Visible: false,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 0, 180), // 5:00 PM for 1.5h
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 0, 90),// 8:00 PM for 1.5h
  },
  '2': { // Commerce
    pageTitle: "11th Commerce",
    class1Subject: "Accounts",
    class2Subject: "Economics",
    classTimeLabel: "5:00 PM - 6:30 PM",
    classTimeLabel2: "8:00 PM - 9:30 PM",
    class1LiveStreamUrl: 'https://d133w6ldrek1er.cloudfront.net/out/v1/ca26d3ff165b4e07a358b55f5455cd98/index_4.m3u8',
    class2LiveStreamUrl: 'https://d133w6ldrek1er.cloudfront.net/out/v1/c923787f6b3b40cbbfbdc51d2d76e51e/index_4.m3u8',
    class1Visible: false,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 0, 90),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 0, 90),
  },
  '3': { // Aarambh (Class 10)
    pageTitle: "10th Aarambh",
    class1Subject: " Science",
    class2Subject: "Mathematics",
    classTimeLabel: "5:00 PM - 6:30 PM",
    classTimeLabel2: "8:00 PM - 9:30 PM",
    class1LiveStreamUrl: 'https://d133w6ldrek1er.cloudfront.net/out/v1/f15d86916b1f404baeb09967b920d86a/index_4.m3u8',
    class2LiveStreamUrl: 'https://dga9kme080o0w.cloudfront.net/out/v1/5c7cfedca3df4fc99ea383b5f2e6a7a8/index_4.m3u8',
    class1Visible: false,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 0, 90),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 0, 90),
  },
  '4': { // Aarambh (Class 9)
    pageTitle: "9th Aarambh",
    class1Subject: "Mathematics",
    class2Subject: "",
    classTimeLabel: "5:00 PM - 6:30 PM",
    classTimeLabel2: "8:00 PM - 9:30 PM", 
    class1LiveStreamUrl: 'https://dga9kme080o0w.cloudfront.net/out/v1/5c7cfedca3df4fc99ea383b5f2e6a7a8/index_4.m3u8', 
    class2LiveStreamUrl: '', 
    class1Visible: false,
    class2Visible: false,
    class1Times: (now: Date) => getDailyClassTimes(now, 17, 0, 90),
    class2Times: (now: Date) => getDailyClassTimes(now, 20, 0, 90),
  }
};
