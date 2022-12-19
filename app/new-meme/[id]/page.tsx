import NotFoundPage from "../page";
interface Props {
  params: { id: string };
}

export default function DynamicNewMemePage({ params }: Props) {
  const outOfRange = (index: number): boolean => index < 1 || index > 37;
  if (!Number.isInteger(params.id) || outOfRange(parseInt(params.id))) {
    return <NotFoundPage />;
  }
  return <div className="flex">{params.id}</div>;
}
