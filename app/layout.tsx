import "./globals.css";
import NavBarWrapper from "../components/NavBarWrapper";
import Logo from "../components/logo/logo.png";

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
          <img src={Logo.src} alt="logo" className="h-full"/>
        </header>
        <NavBarWrapper>{children}</NavBarWrapper>
      </body>
    </html>
  );
}
