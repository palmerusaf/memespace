import NotFoundPage from "../page";
interface Props {
  params: { id: string };
}

export default function DynamicNewMemePage({ params }: Props) {
  const pageOutOfRange = (index: number): boolean => index < 1 || index > 37;
  const isInvalidPage =
    Number.isNaN(parseInt(params.id)) || pageOutOfRange(parseInt(params.id));
  if (isInvalidPage) return <NotFoundPage />;

  return <div className="flex">{params.id}</div>;
}
