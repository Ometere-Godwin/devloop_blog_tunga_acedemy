import { useEffect, useState } from "react";
import BaseBlog from "./BaseBlog";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/run-1.jpg",
    "/images/run-2.jpg",
    "/images/run-3.jpg",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col my-32">
      <div className="relative w-full max-w-4xl mx-auto flex flex-col">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full "
              />
            ))}
          </div>
        </div>

        <div>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full left-7 absolute bottom-7 ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <BaseBlog
        text="RUNNING THROUGH CHICAGO"
        date="February 1, 2015"
        subText="2 Comments"
        quoteName="by clare smith"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Fusce at risus at lacus laoreet mollis sed id elit. 
        Integer bibendum lobortis velit, eleifend commodo dui facilisis nec. 
        Aliquam mi sapien, ultrices a ultrices non, sodales ut diam. Fusce semper risus eu magna placerat pulvinar. 
        Nullam ac odio non ligula semper auctor. Fusce semper risus eu magna placerat pulvinar."
        quote="“There are always two people in every picture: the photographer and the viewer.”"
        description2="Nullam ac odio non ligula semper auctor. Fusce semper risus eu magna placerat pulvinar. 
        Nullam ac odio non ligula semper auctor. Aenean at dui dui, non scelerisque nisi. 
        Morbi ullamcorper dapibus nisl, ullamcorper fringilla eros pulvinar et."
      />
    </div>
  );
}
