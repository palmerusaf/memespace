import NotFoundPage from "../page";
import memeList from "../../../components/memelist.json";
import { isInvalidPage } from "../../../components/PageNav/PageUtils";
interface Props {
  params: { id: string };
}

export default function DynamicNewMemePage({ params }: Props) {
  if (isInvalidPage(params.id)) return <NotFoundPage />;

  return <div className="flex">{params.id}</div>;
}

function getMemeSegment(params: type) {}
