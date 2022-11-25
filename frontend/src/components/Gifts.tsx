type GiftsProps = {
  name: string;
  btnName: string;
};

export default function Gifts({ name, btnName }: GiftsProps) {
  return (
    <div className="">
      <div className="flex items-end h-full bg-hero-image6 bg-center bg-cover bg-no-repeat">
        <div className="flex gap-4 mb-5 mx-9 px-5 py-5 flex-col w-48 h-32  bg-slate-400 mix-blend-luminosity">
          <h1>{name}</h1>
          <button className="font-bold bg-black text-white w-36 p-3 hover:bg-white hover:text-black">
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
}
