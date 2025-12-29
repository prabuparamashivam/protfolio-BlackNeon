import { projectsData } from "./data/projectsData";

export default function Project() {
  return (
    <section id="project" className="bg-black px-4 md:px-12 py-16 scroll-mt-24">
      <div className="md:mx-10 mx-auto">

        <h2 className="text-white text-3xl font-bold mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`
                bg-[#28282b] rounded-3xl p-6 text-white
                ${project.colSpan || ""}
              `}
            >
              <h3
                className={
                  project.featured
                    ? "text-2xl font-semibold"
                    : "text-lg font-semibold"
                }
              >
                {project.title}
              </h3>
              <span
                className="grid-rows-2 text-xs px-3 py-1 rounded-full font-medium"
                style={{ backgroundColor: "#e4f65a", color: "#000" }}
              >
                {project.company}
              </span>

              <p className="mt-3 text-gray-300 text-sm text-justify">
                {project.description}
              </p>

              {project.tech && (
                <div className="mt-4 text-sm text-gray-400">
                  {project.tech}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
