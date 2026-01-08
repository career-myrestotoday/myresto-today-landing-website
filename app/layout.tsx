import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import VisitorTracker from "@/components/visitor-tracker"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "myResto Today - AI-Powered Restaurant Management Platform",
  description:
    "From POS to Plate – The ultimate SaaS platform for cafes, restaurants, and cloud kitchens. Streamline operations, boost sales, and enhance customer experience with AI.",
  generator: "v0.app",
  keywords: [
    "restaurant management",
    "POS system",
    "restaurant tech",
    "AI dining",
    "foodtech",
    "cloud kitchen",
    "QR ordering",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Favicon and apple-touch icon using remote logo PNG */}
        <link rel="icon" href="https://myrestotoday.io/03_images/logo.png" />
        <link rel="apple-touch-icon" href="https://myrestotoday.io/03_images/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Atma:wght@300;400;500;600;700&family=Boogaloo&family=Hedvig+Letters+Sans&display=swap"
          rel="stylesheet"
        />
        {/* Zoho SalesIQ tracking widget (as requested) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || { widgetcode:"siq06f129202543cc65520ff359b263ed273468931c984c5201a9ab742355ace97c", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`,
          }}
        />
        <script src="https://cdn.chatsimple.ai/ai-loader.js" defer></script>
        <script dangerouslySetInnerHTML={{ __html: `window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}` }} />
        <script id="zsiqscript" defer src="https://salesiq.zohopublic.in/widget?wc=siq06f129202543cc65520ff359b263ed273468931c984c5201a9ab742355ace97c"></script>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <VisitorTracker />
        <Analytics />
      </body>
    </html>
  )
}
