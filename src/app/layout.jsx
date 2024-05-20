import { Inter } from "next/font/google";
import "./globals.css";
import { MuiRtlProvider } from "@/context/MuiRtlContext";
import Header from "@/components/header/Header";
// import Footer from "@/components/footer/Footer";



import dynamic from "next/dynamic";



const inter = Inter({ subsets: ["latin"] });


const Footer = dynamic(()=> import('@/components/footer/Footer') , {ssr:false})

export const metadata = {
  title: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی - ویدبین",
  description: "سرویس اشتراک ویدیویی سیستم های حفاظتی و نظارتی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <MuiRtlProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </MuiRtlProvider>
    </html>
  );
}
