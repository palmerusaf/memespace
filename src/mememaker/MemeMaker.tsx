export const MemeMaker = () => {
  const memeMakerAPI =
    "http://cors-anywhere.herokuapp.com/http://alpha-meme-maker.herokuapp.com/";

  return <ButtonField />;

  function ButtonField() {
    return (
      <div className="flex justify-between ">
        <button className="bg-blue-400 text-white py-1 px-2">Edit Meme</button>
        <button>Browse Memes</button>
      </div>
    );
  }
};
