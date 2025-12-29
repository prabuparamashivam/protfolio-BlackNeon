import { contactData } from "./data/contactData";

export function Contact() {
  return (
    <div className="bg-[#28282b] w-full rounded-3xl px-8 py-6">

      <h3 className="text-white text-xl font-semibold mb-4">
        Contact
      </h3>

      <div className="flex flex-wrap gap-6">
        {contactData.map((contact) => (
          <div
            key={contact.name}
            className="flex items-center gap-3"
          >
            <img className="w-6 h-6  object-cover cursor-pointer transition-transform duration-150 ease-in-out active:scale-90 hover:scale-95"
              src={contact.logo}
              alt={contact.name}
              onClick={() => window.open(contact.value, "_blank")}
            />
          </div>
        ))}
      </div>

    </div>
  );
}
