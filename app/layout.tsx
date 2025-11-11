import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Friday Deal - FervoGear SFI-5 Race Suit + FREE Gloves | Save $451",
  description: "Limited time Black Friday offer: Premium Double Layer SFI-5 Nomex Race Suit + FREE Matching Gloves. Save $451 this weekend only. Fully customizable, 3.5 week turnaround.",
  keywords: "race suit, fire suit, Nomex suit, SFI-5, custom race suit, black friday, racing gear, FervoGear",
  openGraph: {
    title: "Black Friday: Save $451 on FervoGear SFI-5 Race Suit + FREE Gloves",
    description: "Premium Double Layer SFI-5 Nomex Race Suit. Fully customizable. Limited quantities.",
    images: ["https://fervogear.com/wp-content/uploads/2025/10/Helloween.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance: Preconnect to external domains */}
        <link rel="preconnect" href="https://fervogear.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fast.wistia.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fervogear.com" />
        <link rel="dns-prefetch" href="https://fast.wistia.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KD6XP3V');`}
        </Script>

        {/* Google Analytics - Property 1 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5JTMZK0ZTC"
          strategy="afterInteractive"
        />
        <Script id="ga-script-1" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5JTMZK0ZTC');
          `}
        </Script>

        {/* Google Analytics - Property 2 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FCPL13PK7S"
          strategy="afterInteractive"
        />
        <Script id="ga-script-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FCPL13PK7S');
          `}
        </Script>

        {/* Facebook Pixel with Conversion API (Dual Tracking) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            // Prevent double initialization
            if (!window._fbPixelInitialized) {
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              // Initialize with Advanced Matching
              fbq('init', '921267035733504', {
                em: '', // Will be populated if user provides email
              });

              fbq('track', 'PageView');

              // Also send to server (Conversion API)
              fetch('/api/facebook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  eventName: 'PageView',
                  eventData: {
                    eventSourceUrl: window.location.href,
                    fbp: document.cookie.match(/(_fbp=)([^;]*)/)?.[2] || '',
                    fbc: document.cookie.match(/(_fbc=)([^;]*)/)?.[2] || '',
                  }
                })
              }).catch(err => console.log('CAPI Error:', err));

              window._fbPixelInitialized = true;
            }
          `}
        </Script>

        {/* Plausible Analytics */}
        <Script
          defer
          data-domain="fervogear.com"
          src="https://plausible.nafran.com/js/script.file-downloads.outbound-links.tagged-events.js"
          strategy="afterInteractive"
        />

        {/* GTM Noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KD6XP3V"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
