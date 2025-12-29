import { educationData } from "./data/educationData";

export default function Education() {
  return (
    <section className="bg-black px-4 md:px-12 py-16">
      <div className="md:mx-10 mx-auto">

        {/* Page Title */}
        <h2 className="text-white text-3xl font-bold mb-10">
          Education
        </h2>

        {/* Big Card */}
        <div className="bg-[#28282b] rounded-3xl px-8 py-6">

          {educationData.map((item, index) => (
            <div key={item.id} className="py-6">

              {/* Institution + Year */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-white text-lg font-medium">
                  {item.institution}
                </h3>

                <span className="text-gray-400 text-sm mt-2 md:mt-0">
                  {item.year}
                </span>
              </div>

              {/* Mild separator (except last item) */}
              {index !== educationData.length - 1 && (
                <div className="mt-6 h-px bg-white/10" />
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
