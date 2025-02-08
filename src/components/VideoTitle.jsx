export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>

      <div>
        <button className="bg-white text-black hover:bg-gray-500 text-lg px-12 py-2 font-bold">
          ▶Play
        </button>
        <button className="bg-white  hover:bg-gray-500  text-black text-lg px-12 py-2 ml-4 font-bold">
          More info
        </button>
      </div>
    </div>
  );
};
