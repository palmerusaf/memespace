import NavBar from "./nav-bar";

export default function NavBarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row-reverse h-screen">
      <div className="overflow-scroll h-screen mb-16 md:mb-0 md:ml-48 md:w-full">
        {children}
      </div>
      <div className="shadow-xl fixed bottom-0 w-screen h-16 md:left-0 md:top-0 md:w-48 md:h-screen">
        <NavBar />
      </div>
    </div>
  );
}
