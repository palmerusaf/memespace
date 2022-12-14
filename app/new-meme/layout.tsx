import PageNav from "../../components/PageNav";

function NewMemeLayout({ children }: { children: React.ReactNode }) {
  // 37 pages and 27 memes per page = 999 memes from apimeme.com
  return (
    <div className="text-blue-500">
      <PageNav />
      {children}
    </div>
  );
}

export default NewMemeLayout;
