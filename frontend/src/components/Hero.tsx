export default function Hero() {
  return (
    <section className="grid grid-cols-3 h-128 ">
      <div className="flex flex-col gap-5 bg-slate-200 p-10">
        <div className="pt-20">
          <h1 className="text-3xl">Wake up</h1>
          <h1 className="font-bold text-4xl">Dress up</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="font-bold bg-black text-white w-36 p-3 hover:bg-white hover:text-black">
          Shop now
        </button>
      </div>
      <div className="bg-hero-image2 bg-center bg-cover bg-no-repeat"></div>
      <div className="bg-hero-image8 bg-center bg-cover bg-no-repeat"></div>
    </section>
  );
}
