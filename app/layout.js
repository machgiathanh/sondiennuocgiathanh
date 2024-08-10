import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sơn Điện Nước Gia Thành",
  description: "Sơn Điện Nước Số 1 Tại Móng Cái",
};

export default function RootLayout({ children }) {

  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
