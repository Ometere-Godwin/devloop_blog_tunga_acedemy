import BaseCard from "../components/BaseCard";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-hero sm:w-full lg:w-full h-screen md:w-full  object-cover text-white bg-cover"></div>
      <div className="gap-2 flex items-center justify-center my-10 text-[rgb(115,113,113)] ">
        <div className="w-6 bg-[rgb(115,113,113)] h-[0.8px] font-[16px]" />
        <span>Our Articles</span>
        <div className="w-6 bg-[rgb(115,113,113)] h-[0.8px] font-[16px]" />
      </div>

      <div className="overflow-hidden w-full grid md:grid-cols-3 grid-cols-1 gap-8 items-center justify-center">
        <BaseCard
          image="images/Lollipop.jpg"
          text="LOLLIPOP"
          date="FEBRUARY 2, 2015"
        />

        <BaseCard
          image="images/apothecary.jpg"
          text="THE APOTHECARY"
          date="JANUARY 3, 2015"
        />

        <BaseCard
          image="images/flowers.jpg"
          text="THE FLOWERS"
          date="JANUARY 25, 2015"
        />

        <BaseCard
          image="images/sun.jpg"
          text="THE SUNNY DAY"
          date="JANUARY 21, 2015"
        />

        <BaseCard
          image="images/meeting.jpg"
          text="THE MEETING"
          date="JANUARY 2, 2015"
        />

        <BaseCard
          image="images/bridge.jpg"
          text="THE BRIDGE"
          date="DECEMBER 31, 2014"
        />
      </div>
      {/* Carousel Images */}
      <div className="bg-gray-100 w-full flex flex-col items-center justify-center">
        <Carousel />
      </div>
    </div>
  );
}
