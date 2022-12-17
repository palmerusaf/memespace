import { FunctionComponent } from "react";

interface DynamicNewMemePageProps {
  [x: string]: any;
  props: any;
}

const DynamicNewMemePage: FunctionComponent<DynamicNewMemePageProps> = ({
  params,
}) => {
  return <div>index = {params.id}</div>;
};

export default DynamicNewMemePage;
