"use client";
import styles from "./EditMemeModal.module.css";
import { useRouter } from "next/navigation";
import { FC } from "react";
interface EditMemeModalProps {
  memeId: string;
}

const EditMemeModal: FC<EditMemeModalProps> = ({ memeId }) => {
  const router = useRouter();
  return (
    <div
      className="flex absolute top-0 left-0 z-50 w-screen h-screen justify-center items-center transition-opacity  bg-opacity-40 bg-black"
      onClick={(e) => {
        router.back();
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={"w-1/2 h-1/2 text-black bg-white " + styles.popIn}
      >
        {memeId}
      </div>
    </div>
  );
};

export default EditMemeModal;
