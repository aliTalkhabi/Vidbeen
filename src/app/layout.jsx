
import dynamic from "next/dynamic";
import "./globals.css";
import { MuiRtlProvider } from "@/context/MuiRtlContext";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { ApiProvider } from "@/context/ApiContext";







const Footer = dynamic(() => import('@/components/Footer/Footer'), { ssr: false })

// export const metadata = {
//   title: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی - ویدبین",
//   description: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی",
// };



export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
      </head>
      <MuiRtlProvider >
        <ApiProvider >
          <body>
            <Header />
            <main>
              <Breadcrumb />
              {children}
            </main>
            <Footer />
          </body>
        </ApiProvider>
      </MuiRtlProvider>
    </html>
  );
}
