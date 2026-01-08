"use client";

import Slider from "react-slick";
import Image from "next/image";

const Screenshots = () => {
  const screenshots = [
    {
      id: 1,
      src: "/screenshots/screenshot-1.jpg",
      alt: "Home Screen",
      title: "Home Screen",
    },
    {
      id: 2,
      src: "/screenshots/screenshot-2.jpg",
      alt: "AI-powered symptom diagnosis interface",
      title: "Symptom Diagnosis",
    },
    {
      id: 3,
      src: "/screenshots/screenshot-3.jpg",
      alt: "Period tracking dashboard",
      title: "Period Tracking",
    },
    {
      id: 4,
      src: "/screenshots/screenshot-4.jpg",
      alt: "Lab report analysis",
      title: "Lab Report Analysis",
    },
    {
      id: 5,
      src: "/screenshots/screenshot-5.jpg",
      alt: "Sleep music player",
      title: "Sleep & Relaxation",
    },
    {
      id: 6,
      src: "/screenshots/screenshot-6.jpg",
      alt: "Mental health tools and resources",
      title: "Mental Health",
    },
    {
      id: 7,
      src: "/screenshots/screenshot-7.jpg",
      alt: "First aid guidance",
      title: "First Aid",
    },
  ];

  // react-slick carousel config
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // show 2 slides on desktop
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true, // 🔥 auto scroll
    autoplaySpeed: 3000, // 🔥 3 seconds
    pauseOnHover: true, // pause autoplay when user hovers
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="screenshots"
      className="py-16 md:py-24 px-4 bg-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          App Experience
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Explore Jachao's intuitive interface designed for seamless health
          management
        </p>

        <Slider {...settings}>
          {screenshots.map((screenshot) => (
            <div key={screenshot.id} className="px-2">
              <div className="bg-gradient-to-b from-rose-900 to-pink-800 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center">
                <div className="relative w-full h-[480px] flex justify-center items-center bg-black">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
                <h3 className="font-bold text-lg text-center py-4">
                  {screenshot.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Screenshots;
