"use client";
import React, { useState } from "react";
import styles from "./EditMemeModal.module.css";

type ModalButtonProps = {
  memeId: string;
} & JSX.IntrinsicElements["button"];

export interface WithModalProps {
  ModalButton: React.FC<ModalButtonProps>;
  props: any;
}

const withMemeModal =
  (WrappedComponent: React.FC<WithModalProps>) => (incomingProps: any) => {
    const [meme, setMeme] = useState<null | string>(null);

    const ModalButton = (pProps: ModalButtonProps) => {
      const { memeId, ...props } = pProps;
      props.onClick = () => setMeme(memeId);
      return <button {...props}></button>;
    };

    const MemeModal = () => {
      const close = () => setMeme(null);
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
            {meme}
          </div>
        </div>
      );
    };

    return (
      <>
        {meme && <MemeModal />}
        <WrappedComponent ModalButton={ModalButton} props={incomingProps} />
      </>
    );
  };

export default withMemeModal;
