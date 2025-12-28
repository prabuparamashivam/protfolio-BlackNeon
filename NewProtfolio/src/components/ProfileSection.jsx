import Awards from "./Awards";
import { LanguagesBar } from "./LanguagesBar";

export default function ProfileSection() {
  return (
    <section className="bg-black px-4 md:px-12 py-15">
      <div className="max-w-6xl mx-auto space-y-6">
        <Awards />
        <LanguagesBar />
      </div>
    </section>
  );
}
