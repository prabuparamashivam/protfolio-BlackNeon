import { skillsData } from "./data/skillsData";

export default function Highlights() {
  return (
    <section className="bg-black px-4 md:px-12 py-16">
      <div className="md:mx-10 mx-auto">

        <h2 className="text-white text-3xl font-bold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Languages */}
          <div className="md:col-span-2 bg-[#28282b] rounded-3xl p-6">
            <h3 className="text-white text-xl font-semibold mb-6">
              Languages
            </h3>

            <div className="grid grid-cols-3 gap-6">
              {skillsData.languages.map((lang) => (
                <div key={lang.name} className="flex flex-col items-center">
                  <img src={lang.logo} alt={lang.name} className="h-10 mb-2" />
                  <span className="text-gray-300 text-sm">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="md:col-span-2 bg-[#28282b] rounded-3xl p-6">
            <h3 className="text-white text-xl font-semibold mb-6">
              Frameworks
            </h3>

            <div className="grid grid-cols-3 gap-6">
              {skillsData.frameworks.map((fw) => (
                <div key={fw.name} className="flex flex-col items-center">
                  <img src={fw.logo} alt={fw.name} className="h-10 mb-2" />
                  <span className="text-gray-300 text-sm">{fw.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="bg-[#28282b] rounded-3xl p-6">
            <h3 className="text-white text-xl font-semibold mb-6">
              Databases
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {skillsData.databases.map((db) => (
                <div key={db.name} className="flex flex-col items-center">
                  <img src={db.logo} alt={db.name} className="h-10 mb-2" />
                  <span className="text-gray-300 text-sm">{db.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Concepts */}
          <div className="md:col-span-3 bg-[#28282b] rounded-3xl p-6">
            <h3 className="text-white text-xl font-semibold mb-4">
              Tools & Concepts
            </h3>

            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-sm text-gray-300 border border-white/10 rounded-full px-4 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}