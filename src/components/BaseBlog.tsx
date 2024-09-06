import { Link } from "react-router-dom";
import BaseButton from "./BaseButton";

interface BaseTextProps {
  text: string;
  subText?: string;
  date?: string;
  description?: string;
  quote?: string;
  quoteName?: string;
  description2?: string;
}

export default function BaseBlog({
  text,
  subText,
  description,
  quote,
  quoteName,
  description2,
  date,
}: BaseTextProps) {
  return (
    <div className="bg-white p-12 max-w-4xl">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Link to={"#"} className="hover:text-red-500 font-medium">
            {text}
          </Link>
          <div className="">
            <Link
              to={"#"}
              className="hover:text-red-500 flex gap-2 items-center uppercase font-medium"
            >
              {date}
              <span className="h-1 w-1 rounded-full bg-red-200" />
              <span>{subText}</span>
              <span className="h-1 w-1 rounded-full bg-red-200" />
              <span>{quoteName}</span>
            </Link>
          </div>
          <p className="font-light text-justify">{description}</p>
        </div>
        <div className="flex items-center flex-col my-10 gap-10">
          <div className="flex gap-8">
            <div className="w-[2px] bg-red-400" />
            <div className="flex flex-col gap-7">
              <p className="uppercase text-[33.6px] font-medium text-[rgb(115,113,113)]">
                {quote}
              </p>
              <div className="flex gap-3 items-center">
                <span className="h-[3px] w-6 bg-[rgb(115,113,113)]" />
                <label className="uppercase font-medium text-[rgb(115,113,113)] font-[26.88px]">
                  {quoteName}
                </label>
              </div>
            </div>
          </div>
          <p>{description2}</p>
        </div>

        <BaseButton buttonText="READ MORE" handleEngagement={(e) => void e} />
      </div>
    </div>
  );
}
