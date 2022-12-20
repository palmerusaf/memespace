import { FunctionComponent } from "react";

interface MemeSelCardProps {
  memeName: string;
}

const MemeSelCard: FunctionComponent<MemeSelCardProps> = ({ memeName }) => {
  return <div className="">{memeName}</div>;
};

export default MemeSelCard;
