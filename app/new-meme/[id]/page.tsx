import Image from "next/image";
import NotFoundPage from "../page";
import memeList from "../../../components/memelist.json";
import {
  isInvalidPage,
  getMemeEndPoints,
} from "../../../components/PageNav/PageUtils";
import { use } from "react";

interface Props {
  params: { id: string };
}

export default function DynamicNewMemePage({ params }: Props) {
  if (isInvalidPage(params.id)) return <NotFoundPage />;

  const pageNum: number = parseInt(params.id);
  const endPoints = getMemeEndPoints(pageNum);
  const memeSubList = memeList.slice(endPoints.start, endPoints.end);

  return (
    <div>
      <h1 className="text-center font-bold text-lg m-2">Select Your Meme</h1>
      <div className="w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] overflow-scroll">
        {memeSubList.map((meme) => (
          <MemeSelCard meme={meme} />
        ))}
      </div>
    </div>
  );
}

function MemeSelCard({ meme }: { meme: string }) {
  const title = meme.replaceAll("-", " ");
  return (
    <div className="flex justify-between bg-white flex-col m-2 rounded-lg p-2 shadow-md">
      <h2 className="text-ellipsis overflow-hidden text-center font-medium underline">
        {title}
      </h2>
      <Image
        src={`https://apimeme.com/thumbnail?name=${meme}`}
        alt={title}
        className="w-full rounded-md shadow-lg my-2"
        width={100}
        height={100}
      />
      <button className="px-3 py-1  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500 font-medium">
        Select
      </button>
    </div>
  );
}
