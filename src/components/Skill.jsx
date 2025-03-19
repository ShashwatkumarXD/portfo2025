import React from "react";
import mongo from "/public/mongo.svg";

const Skill = () => {
  return (
    <div className="h-40 bg-gray-200 hidden md:flex overflow-hidden relative">
      <div className="flex items-center justify-center animate-scroll">
        <ul className="flex flex-row items-center gap-20 min-w-max">
          {/* Images List - Duplicated for Seamless Scrolling */}
          {[
            { src: mongo, size: "w-44 h-44" },
            { src: "/react.svg", size: "w-20 h-20" }, // React is smaller
            { src: "/wordpress.svg", size: "w-44 h-44" },
            { src: "/node.svg", size: "w-44 h-44" },
            { src: "/tailwind.svg", size: "w-20 h-20" },
            { src: "/jquery.svg", size: "w-44 h-44" },
            { src: "/nextjs.svg", size: "w-20 h-20" },
            { src: "/mysql.svg", size: "w-28 h-28" },
            { src: "/github.svg", size: "w-20 h-20" }
          ].map((item, index) => (
            <li key={index} className="flex-shrink-0">
              <img src={item.src} className={`${item.size} filter grayscale opacity-60`} alt="Tech Logo" />
            </li>
          ))}

          {/* Duplicate for Infinite Loop */}
          {[
            { src: mongo, size: "w-44 h-44" },
            { src: "/react.svg", size: "w-20 h-20" }, // React is smaller
            { src: "/wordpress.svg", size: "w-44 h-44" },
            { src: "/node.svg", size: "w-44 h-44" },
            { src: "/tailwind.svg", size: "w-20 h-20" },
            { src: "/jquery.svg", size: "w-44 h-44" },
            { src: "/nextjs.svg", size: "w-20 h-20" },
            { src: "/mysql.svg", size: "w-28 h-28" },
            { src: "/github.svg", size: "w-20 h-20" }
          ].map((item, index) => (
            <li key={`dup-${index}`} className="flex-shrink-0">
              <img src={item.src} className={`${item.size} filter grayscale opacity-60`} alt="Tech Logo" />
            </li>
          ))}
        </ul>
      </div>

      {/* Tailwind CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            animation: scroll 15s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default Skill;

