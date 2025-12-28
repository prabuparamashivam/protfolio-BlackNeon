import { awardsData } from "./data/awardsData";

export default function Awards() {
  return (
    <div className="bg-[#28282b] w-full rounded-3xl px-8 py-6">

      {/* Title */}
      <h3 className="text-white text-xl font-semibold mb-4">
        Awards & Achievements – {awardsData.organization}
      </h3>

      {/* Content */}
      <div className="space-y-4">
        {awardsData.items.map((item, index) => (
          <div key={item.year}>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-gray-400 text-sm min-w-[60px]">
                {item.year}
              </span>

              <span className="text-gray-300 text-sm leading-relaxed">
                {item.awards.join(", ")}
              </span>
            </div>

            {index !== awardsData.items.length - 1 && (
              <div className="mt-4 h-px bg-white/10" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
