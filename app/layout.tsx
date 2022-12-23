import Image from "next/image";
import "./globals.css";
import NavBarWrapper from "@ui/NavBarWrapper";
import Logo from "@ui/logo/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <header className="fixed top-0 h-14 md:h-16 md:z-50 bg-blue-700 w-full flex justify-center">
          <Image src={Logo} width={350} alt="logo" />
        </header>
        <NavBarWrapper>{children}</NavBarWrapper>
      </body>
    </html>
  );
}
