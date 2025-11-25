import { useEffect, useRef, useState } from "react";

export const ProjectsSection = () => {
  // Each project now has multiple images that can be cycled with arrows
  const projects = [
    {
      id: 1,
      title: "SLEEPBOX",
      description: "Award Winning Sleep Pod Designed and Built by Our Team.",
      images: [
        "/DSC_4358.jpg",
        "/bo-hotel-5-680x495.jpg",
        "/DSC_4297.jpg",
        "/IMG_0035.jpg",
        "/IMG_9826.jpg",
      ],
    },
    {
      id: 2,
      title: "Luxury Tiny Homes",
      description: "1000+ Units Delivered By Our Manufacturing Partners",
      images: [
        "/auxbox1.jpeg",
        "/aux2.jpg",
        "/aux3.jpg",
        "/aux4.jpg",
        "/aux5.jpg",
      ],
    },
  ];

  // Track the currently visible image index per project id
  const [projectImageIndex, setProjectImageIndex] = useState<Record<number, number>>({});

  const setPrevImage = (projectId: number, totalImages: number) => {
    setProjectImageIndex((prev) => {
      const currentIndex = prev[projectId] ?? 0;
      const nextIndex = (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const setNextImage = (projectId: number, totalImages: number) => {
    setProjectImageIndex((prev) => {
      const currentIndex = prev[projectId] ?? 0;
      const nextIndex = (currentIndex + 1) % totalImages;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  return (
    <section
      className="w-full py-16 lg:py-32"
      style={{ backgroundColor: '#0b1c26' }}
      role="region"
      aria-labelledby="projects-heading"
    >
      <div className="px-4 sm:px-6 lg:pr-16 lg:pr-24 mb-6 lg:mb-8 lg:ml-8 lg:ml-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <header className="mb-6 lg:mb-0 text-center lg:text-left">
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight"
            >
              Our Team of Award Winning Architects' Past Work
            </h2>
          </header>


        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-6 sm:gap-2 lg:gap-2 px-4 sm:px-6 lg:ml-8 lg:ml-16 lg:pr-8 lg:pr-16">
        {projects.map((project) => {
          const total = project.images.length;
          const currentIndex = projectImageIndex[project.id] ?? 0;
          const currentImage = project.images[currentIndex];

          return (
            <article
              key={project.id}
              className={`w-full sm:${project.id === 1 ? 'w-[80%]' : 'w-[20%]'} text-center sm:text-left`}
            >
              <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[500px] bg-gray-200 overflow-hidden group">
                <img
                  src={currentImage}
                  alt={`${project.title} image ${currentIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Prev Arrow */}
                <button
                  type="button"
                  aria-label={`Previous image for ${project.title}`}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-black/30 text-white/80 group-hover:bg-white group-hover:text-black focus:outline-none focus:ring-2 focus:ring-white/80 rounded-none transition-all duration-300 z-20"
                  onClick={() => setPrevImage(project.id, total)}
                  style={{ zIndex: 20 }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 18l-6-6 6-6" strokeWidth="2" />
                  </svg>
                </button>

                {/* Next Arrow */}
                <button
                  type="button"
                  aria-label={`Next image for ${project.title}`}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-black/30 text-white/80 group-hover:bg-white group-hover:text-black focus:outline-none focus:ring-2 focus:ring-white/80 rounded-none transition-all duration-300 z-20"
                  onClick={() => setNextImage(project.id, total)}
                  style={{ zIndex: 20 }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 18l6-6-6-6" strokeWidth="2" />
                  </svg>
                </button>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 pointer-events-none" />
                <div className="pointer-events-none absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full">
                    <div className="bg-gradient-to-t from-black/70 to-transparent -m-6 p-6 pb-8">
                      <h3 className="font-medium text-white text-xl lg:text-2xl leading-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-white/80 text-sm lg:text-base">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}; 