import "./output.css";
import NavBarWrapper from "../components/NavBarWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <NavBarWrapper>{children}</NavBarWrapper>
      </body>
    </html>
  );
}
