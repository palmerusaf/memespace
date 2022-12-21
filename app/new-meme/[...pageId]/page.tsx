"use client";
import { useState } from "react";
import Image from "next/image";
import { LoadingHorse, ErrorHorse } from "../../../imgs/gifs";
import NotFoundPage from "./NotFound";
import memeList from "../../../components/memelist.json";
import withMemeModal, {
  WithModalProps,
} from "../../../components/EditMemeModal";
import {
  isInvalidPage,
  getMemeEndPoints,
} from "../../../components/PageNav/PageUtils";

interface PageProps extends WithModalProps {
  props: { params: { pageId: string } };
}

function ImageWithErrorHandle(props: { title: string; meme: string }) {
  const pImgSrc = `https://apimeme.com/thumbnail?name=${props.meme}`;
  const [imgSrc, setImgSrc] = useState(pImgSrc);
  return (
    <Image
      src={imgSrc}
      alt={props.title}
      className="w-full rounded-md shadow-lg my-2"
      width={100}
      height={100}
      placeholder="blur"
      blurDataURL={LoadingHorse.src}
      onError={() => {
        setImgSrc(ErrorHorse.src);
      }}
    />
  );
}

const DynamicNewMemePage = ({ props, ModalButton }: PageProps) => {
  const { pageId } = props.params;

  if (isInvalidPage(pageId)) return <NotFoundPage />;

  const pageNum: number = parseInt(pageId);
  const endPoints = getMemeEndPoints(pageNum);
  const memeSubList = memeList.slice(endPoints.start, endPoints.end);

  return (
    <div>
      <h1 className="text-center font-bold text-lg m-2">Select Your Meme</h1>
      <div className="w-full h-full grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] overflow-scroll">
        {memeSubList.map((meme) => {
          const title = meme.replaceAll("-", " ");
          return (
            <div
              key={meme}
              className="flex justify-between bg-white flex-col m-2 rounded-lg p-2 shadow-md"
            >
              <h2 className="text-ellipsis overflow-hidden text-center font-medium underline">
                {title}
              </h2>
              <ImageWithErrorHandle title={title} meme={meme} />
              <ModalButton
                memeId={meme}
                className="px-3 py-1  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-1 duration-300 shadow-md hover:shadow-slate-500 font-medium"
              >
                Select
              </ModalButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withMemeModal(DynamicNewMemePage);
