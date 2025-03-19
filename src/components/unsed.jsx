// import React from 'react'
// import mongo from '/public/mongo.svg'

// function Skill() {
//     return (
//         <div>
//             {/* --------------------------------------------------------------------------------------------------- */}
//             <div className='h-40 bg-gray-200 hidden md:flex justify-center items-center'>
//                 <ul className='flex flex-row justify-center items-center gap-44'>
//                     <li>
//                         <a>
//                             <img src={mongo} className='w-44 h-44 filter grayscale-[90%] opacity-60' />
//                         </a>
//                     </li>
//                     <li>
//                         <a>
//                             <img src='/react.svg' className='w-16 h-16 filter grayscale-[90%] opacity-90' />
//                         </a>
//                     </li>
//                     <li>
//                         <a>
//                             <img src='/wordpress.svg' className='w-44 h-44 filter grayscale-[90%] opacity-60' />
//                         </a>
//                     </li>
//                     <li>
//                         <a>
//                             <img src='/node.svg' className='w-44 h-44 filter grayscale-[90%] opacity-60' />
//                         </a>
//                     </li>
//                 </ul>

//             </div>

//         </div>
//     )
// }

// export default Skill


// import React from "react";
// import mongo from "/public/mongo.svg";

// const Skill = () => {
//   return (
//     <div className="h-40 bg-gray-200 hidden md:flex overflow-hidden relative">
//       <div className="flex items-center justify-center animate-scroll">
//         <ul className="flex flex-row items-center gap-20 min-w-max">
//           {/* Images List - Duplicated for Seamless Scrolling */}
//           {[mongo, "/react.svg", "/wordpress.svg", "/node.svg"].map((src, index) => (
//             <li key={index} className="flex-shrink-0">
//               <img src={src} className="w-44 h-44 filter grayscale opacity-60" alt="Tech Logo" />
//             </li>
//           ))}
//           {[mongo, "/react.svg", "/wordpress.svg", "/node.svg"].map((src, index) => (
//             <li key={`dup-${index}`} className="flex-shrink-0">
//               <img src={src} className="w-44 h-44 filter grayscale opacity-60" alt="Tech Logo" />
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Tailwind CSS Animation */}
//       <style>
//         {`
//           @keyframes scroll {
//             from { transform: translateX(0); }
//             to { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             display: flex;
//             animation: scroll 10s linear infinite;
//             width: max-content;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Skill;

