import NavLink from "./nav-link";

export default function NavBar() {
  return (
    <div className="bg-blue-700  w-full h-full">
      <nav className="pt-5 md:pt-12">
        <ul className="flex flex-row md:flex-col px-1 md:px-3 font-bold text-gray-900 text-center text-sm md:text-base">
          <NavLink href="/profile">Profile</NavLink>
          <NavLink href="/new-meme/1">New Meme</NavLink>
          <NavLink href="/friends-list">Friends List</NavLink>
        </ul>
      </nav>
    </div>
  );
}
