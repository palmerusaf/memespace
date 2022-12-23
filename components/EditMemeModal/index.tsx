"use client";
import React, { useState } from "react";
import styles from "./EditMemeModal.module.css";

interface EditMemeProps {
  id: string;
  topText?: string;
  bottomText?: string;
}
export interface WithModalProps {
  openModalWith: ({}: EditMemeProps) => void;
  props: any;
}

const withMemeModal =
  (WrappedComponent: React.FC<WithModalProps>) => (incomingProps: any) => {
    const [meme, setMeme] = useState<EditMemeProps | null>(null);
    // const [meme, setMeme] = useState<EditMemeProps | null>({ id: "10-Guy" });

    const MemeModal = () => {
      if (!meme) return <></>;

      const close = () => setMeme(null);
      const title = meme.id.replaceAll("-", " ");

      return (
        <div
          className={
            "flex absolute top-0 left-0 z-50 w-screen h-screen justify-center items-center bg-blend-overlay backdrop-blur-sm"
          }
          onClick={close}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={
              "flex flex-col items-center shadow-2xl w-full mx-2 p-4 h-3/4 bg-white rounded-lg" +
              " " +
              styles.ppIn
            }
          >
            <h1 className="font-bold">{title}</h1>
            <input type="text" />
            <span className="flex justify-evenly w-full">
              <button
                className={
                  "px-2 py-0.5  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-slate-500 font-medium"
                }
              >
                Preview
              </button>
              <a
                href={`https://knowyourmeme.com/search?context=entries&sort=relevance&q=${title}`}
                target="_blank"
                rel="noreferrer noopener"
                className={
                  "px-2 py-0.5  text-center bg-blue-600 rounded-full border-2 border-black text-black hover:text-white hover:-translate-y-0.5 duration-300 shadow-md hover:shadow-slate-500 font-medium"
                }
              >
                Origin Story
              </a>
            </span>
          </div>
        </div>
      );
    };

    return (
      <>
        {meme && <MemeModal />}
        <WrappedComponent openModalWith={setMeme} props={incomingProps} />
      </>
    );
  };

export default withMemeModal;
