import LogoPic from "./logo/logo.png";

interface Props {
  page: string;
}

function ComingSoon({ page }: Props) {
  return (
    <div className="flex flex-col bg-blue-800 justify-center items-center w-full h-full">
      <Image src={LogoPic} alt="Logo" className="mx-2" />
      <div className="text-white font-extrabold text-xl">
        {page} Page Coming soon...
      </div>
    </div>
  );
}

export default ComingSoon;
