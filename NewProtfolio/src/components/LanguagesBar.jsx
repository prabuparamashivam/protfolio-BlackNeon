import { languagesData } from "./data/languagesData";

export function LanguagesBar() {
  return (
    <div className="bg-[#28282b] w-full rounded-3xl px-8 py-6">

      <h3 className="text-white text-xl font-semibold mb-4">
        Languages
      </h3>

      <div className="flex flex-wrap gap-6">
        {languagesData.map((lang) => (
          <div
            key={lang.name}
            className="flex items-center gap-3"
          >
            <img
              src={lang.flag}
              alt={lang.name}
              className="w-6 h-6 rounded-full object-cover"
            />

            <span className="text-gray-300 text-sm">
              {lang.name}
              <span className="text-gray-400">
                {" "}({lang.level})
              </span>
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
