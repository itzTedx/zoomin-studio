// "use client";

// import { useState } from "react";
// import ServiceItems from "./service-items";
// import ServiceModal from "./service-modal";

// const projects = [
//   {
//     title: "Candid Photography",
//     src: "c2montreal.png",
//     color: "#000000",
//   },
//   {
//     title: "Candid Videography",
//     src: "officestudio.png",
//     color: "#8C8C8C",
//   },
//   {
//     title: "Pre-Wedding Shoots",
//     src: "locomotive.png",
//     color: "#EFE8D3",
//   },
//   {
//     title: "Traditional Photography",
//     src: "silencio.png",
//     color: "#706D63",
//   },
//   {
//     title: "Traditional Videography",
//     src: "silencio.png",
//     color: "#706D63",
//   },
// ];

// export default function Services() {
//   const [modal, setModal] = useState({ active: false, index: 0 });

//   return (
//     <section className="mx-auto flex items-center justify-center">
//       <div className="mx-auto flex w-[1000px] flex-col items-center justify-center">
//         {projects.map((project, index) => {
//           return (
//             <ServiceItems
//               index={index}
//               title={project.title}
//               setModal={setModal}
//               key={index}
//             />
//           );
//         })}
//       </div>
//       <ServiceModal modal={modal} projects={projects} />
//     </section>
//   );
// }

import React from "react";

export default function Services() {
  return <div>Services</div>;
}
