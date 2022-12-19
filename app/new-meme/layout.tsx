import PageNav from "../../components/PageNav/PageNav";

function NewMemeLayout({ children }: { children: React.ReactNode }) {
  // 37 pages and 27 memes per page = 999 memes from apimeme.com
  return (
    <div className="h-full -z-10">
      <div className="h-full overflow-scroll bg-gray-300  pb-10">
        {children}
      </div>
      <div className="flex justify-center w-full fixed bottom-16 md:bottom-2 mb-2">
        <PageNav />
      </div>
    </div>
  );
}

export default NewMemeLayout;
