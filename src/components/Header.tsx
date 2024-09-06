import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-gray-200 sticky h-[80px] z-20 top-0 ">
      <div className="mx-20 ">
        <div className="flex justify-between items-center">
          <div className="w-10">
            <Link
              to={"/"}
              className="text-[rgb(115,113,113)] text-[28px] font-medium leading-10"
            >
              DEVLOOP BLOG
            </Link>
          </div>
          <div>
            <ul className="md:flex gap-6 items-center hidden">
              <a href="/">
                <li className="cursor-pointer text-[16px]">HOME</li>
              </a>
              <a href="/">
                <li className="cursor-pointer text-[16px]">ABOUT ME</li>
              </a>
              <a href="/">
                <li className="cursor-pointer text-[16px]">DROPDOWN</li>
              </a>
              <a href="/">
                <li className="cursor-pointer text-[16px]">BLOG</li>
              </a>
              <a href="/">
                <li className="cursor-pointer text-[16px]">CONTACT ME</li>
              </a>

              <a href="/">
                <li className="text-red-500 text-[16px]">
                  <FaSearch />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
