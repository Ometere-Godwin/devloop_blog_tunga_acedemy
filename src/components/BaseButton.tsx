import { MouseEvent } from "react";
import { Link } from "react-router-dom";

interface BaseButtonProps {
  buttonText?: string;
  text: string;
  handleEngagement: (event: MouseEvent<HTMLButtonElement>) => void;
  savedBlog: string;
  savedText: string;
}

export default function BaseButton({
  savedBlog,
  savedText,
  buttonText,
  handleEngagement,
}: BaseButtonProps) {
  return (
    <div className="flex flex-col gap-4">
      <Link to={"#"}>
        <button
          onClick={(e) => handleEngagement(e)}
          className="text-red-400 border-[2px] border-red-300 rounded-full py-1 px-2 w-[10em] hover:text-[rgb(64,77,96)] hover:border-[rgb(64,77,96)] font-medium
          "
        >
          {buttonText}
        </button>
      </Link>

      <div className="flex flex-col gap-5">
        <p className="uppercase">saved:</p>
        <Link to={"#"}>
          <p>{savedBlog}</p>
          <p>{savedText}</p>
        </Link>
      </div>
    </div>
  );
}
