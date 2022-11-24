type CardNameProps = {
  name: string;
};

export default function CategoryCard({ name }: CardNameProps) {
  return (
    <div className="flex bg-hero-image8 h-56 w-72 bg-center bg-cover bg-no-repeat rounded-lg m-5">
      <div className="flex justify-center items-center w-32 h-9 m-3 bg-slate-400 mix-blend-luminosity rounded-lg">
        <p>{name}</p>
      </div>
    </div>
  );
}
