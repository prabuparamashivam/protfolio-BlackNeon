import Awards from "./Awards";
import { LanguagesBar } from "./LanguagesBar";
import { Contact } from "./Contact";

export default function ProfileSection() {
  return (
    <section id="resume" className="bg-black px-4 md:px-12 py-16 scroll-mt-24">
      <div className="md:mx-10 mx-auto space-y-6">

        <Awards />
        <LanguagesBar />
        <Contact />

        {/* Download Resume Button */}
        <div className="flex justify-center pt-4">
          <a
            href="/resume/LINGAPRABHU_S_RESUME.pdf"
            download
            className="
              inline-flex items-center justify-center
              px-8 py-3
              rounded-full
              bg-[#e4f65a]
              text-black
              font-semibold
              text-sm
              shadow-[0_0_20px_rgba(57,255,20,0.6)]
              hover:shadow-[0_0_30px_rgba(57,255,20,0.9)]
              transition
            "
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
