import type { Metadata } from 'next';
import Script from 'next/script';
import { AppProviders } from '@/context';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Raleway, Londrina_Shadow } from 'next/font/google';
import { ClerkProvider} from"@clerk/nextjs";
import { Header } from "@/components/Header";
import { AuthInfo } from '@/components/AuthInfo';

export const londrinaSh = Londrina_Shadow({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-londrina',
    });
  
    export const raleway = Raleway({
    subsets: ['latin'],
  display: 'swap',
   variable: '--font-raleway',	
    });

const metadata: Metadata = {
  title: '8zense.com',
  description: 'LandingPage for startup 8zense.com',
  keywords: [
    'Awesome Readme',
    'Awesome Profile',
    'Github Profile',
    'Github Readme'
  ]
};

export default function RootLayout({
  children                                                          
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Script
        id="clarity-script"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jtekf5auph");`
        }}
      />
      <body>
        <AppProviders>
        <Header>
              <AuthInfo />
            </Header>
          <main className= {raleway.className}>{children}</main></AppProviders>
        <Analytics />
      </body>
    </html>
    </ClerkProvider>
  );
}
