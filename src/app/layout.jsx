import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { MuiRtlProvider } from "@/context/MuiRtlContext";
import Header from "@/components/header/Header";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { ApiProvider } from "@/Context/ApiContext";

const Footer = dynamic(() => import('@/components/footer/Footer'), { ssr: false })

export const metadata = {
  title: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی - ویدبین",
  description: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی",
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <MuiRtlProvider>
        <ApiProvider>
          <body >
            <Header />
            <Breadcrumb />
            {children}
            <Footer />
          </body>
        </ApiProvider>
      </MuiRtlProvider>
    </html>
  );
}
