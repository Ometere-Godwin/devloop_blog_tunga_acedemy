interface BaseCardProps {
  image: string;
  text: string;
  date: string;
}

export default function BaseCard({ image, text, date }: BaseCardProps) {
  return (
    <div className="flex flex-col mx-6 w-full ">
      <div className="group relative overflow-hidden">
        <img src={image} alt="Lollipop" />
        <div className="cursor-pointer absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </div>

      <div className="flex flex-col items-center my-10 font-medium text-[16px]">
        <span className="cursor-pointer hover:text-red-600">{text}</span>
        <span className="cursor-pointer hover:text-red-600">{date}</span>
      </div>
    </div>
  );
}
