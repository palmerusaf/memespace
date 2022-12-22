"use client";
import React, { useState } from "react";
import styles from "./EditMemeModal.module.css";

interface EditMemeProps {
  id: string | null;
  topText?: string;
  bottomText?: string;
}
export interface WithModalProps {
  openModal: ({}: EditMemeProps) => void;
  props: any;
}

const withMemeModal =
  (WrappedComponent: React.FC<WithModalProps>) => (incomingProps: any) => {
    const [meme, setMeme] = useState<EditMemeProps>({ id: null });

    const MemeModal = () => {
      const close = () => setMeme({ id: null });
      return (
        <div
          className="flex absolute top-0 left-0 z-50 w-screen h-screen justify-center items-center transition-opacity  bg-opacity-40 bg-black"
          onClick={close}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={"w-1/2 h-1/2 text-black bg-white " + styles.popIn}
          >
            {meme.id}
          </div>
        </div>
      );
    };

    return (
      <>
        {meme.id && <MemeModal />}
        <WrappedComponent openModal={setMeme} props={incomingProps} />
      </>
    );
  };

export default withMemeModal;
