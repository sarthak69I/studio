// src/components/adsense-bottom-unit.tsx
import React from 'react';
import Script from 'next/script';

const AdsenseBottomUnit: React.FC = () => {
  return (
    <div className="my-8 w-full flex flex-col items-center" aria-label="Advertisement">
      {/* <!-- 1 s --> */}
      <div className="w-full max-w-5xl px-2 sm:px-4">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-7372814899455347"
          data-ad-slot="5012759691"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <Script id="adsense-push-bottom-unit" strategy="lazyOnload">
        {`(adsbygoogle = window.adsbygoogle || []).push({});`}
      </Script>
    </div>
  );
};

export default AdsenseBottomUnit;
