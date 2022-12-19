import Link from "next/link";
import LogoPic from "../../components/logo/logo.png";

function NotFoundPage() {
  return (
    <div className="flex flex-col bg-blue-800 justify-center items-center w-full h-full">
      <img src={LogoPic} alt="Logo" className="mx-2" />
      <div className="text-white font-extrabold text-xl">Page Not Found</div>
      <Link
        className="px-2 py-1 mt-2 text-center bg-blue-600 text-white rounded-full border-2 border-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500"
        href="/new-meme/1"
      >
        Go To Beginning
      </Link>
    </div>
  );
}

export default NotFoundPage;
