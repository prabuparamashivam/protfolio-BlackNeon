import React from "react";

export default function Experience() {
  return (
    <section className="bg-black px-4 md:px-12 py-14">
      <div className="relative max-w-1xl mx-auto">

        {/* EXPERIENCE LABEL */}
        {/* EXPERIENCE LABEL */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-4 z-10">
          <span className="text-white text-3xl font-bold mb-10 -translate-y-15">
            Experience
          </span>
        </div>

        {/* Center vertical line */}
        <div className="hidden md:block absolute left-1/2 top-10 h-[calc(100%-2.5rem)] w-1 -translate-x-1/2 bg-white rounded-full" />


        <div className="flex place-self-center flex-col gap-16">
          {experienceData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}


const TimelineItem = ({ align, role, company, period, points }) => {
  const isLeft = align === "left";



  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] items-start">

      {/* LEFT SIDE */}
      <div className={`${isLeft ? "block" : "hidden md:block"}`}>
        {isLeft && (
          <Card
            align={align}
            role={role}
            company={company}
            period={period}
            points={points}
          />
        )}
      </div>

      {/* CENTER (branch + dot) */}
      <div className="relative hidden md:flex justify-center">
        <div className="absolute top-8 flex items-center">
          <div className="w-4 h-4 rounded-full bg-white shadow-md" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={`${!isLeft ? "block" : "hidden md:block"}`}>
        {!isLeft && (
          <Card
            align={align}
            role={role}
            company={company}
            period={period}
            points={points}
          />
        )}

      </div>

    </div>
  );
};


const Card = ({ align, role, company, period, points }) => (
  <div className="bg-[#28282b] place-self-center rounded-3xl p-6 md:w-[90%]">
    <Header
      align={align}
      role={role}
      company={company}
      period={period}
    />
    <Content points={points} />
  </div>
);


const Header = ({ align, role, company, period }) => {
  const isRight = align === "right";

  return (
    <div className="mb-4 flex items-start justify-between">

      {/* LEFT SIDE */}
      {isRight ? (
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ backgroundColor: "#e4f65a", color: "#000" }}
        >
          {company}
        </span>
      ) : (
        <div>
          <h3 className="text-white text-lg">{role}</h3>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      )}

      {/* RIGHT SIDE */}
      {isRight ? (
        <div className="text-right">
          <h3 className="text-white text-lg">{role}</h3>
          <p className="text-gray-400 text-sm">{period}</p>
        </div>
      ) : (
        <span
          className="text-xs px-3 py-1 rounded-full font-medium"
          style={{ backgroundColor: "#e4f65a", color: "#000" }}
        >
          {company}
        </span>
      )}

    </div>
  );
};

const Content = ({ points }) => (
  <ul className="list-disc pl-5 text-white text-base leading-relaxed space-y-2 text-justify">
    {points.map((point, index) => (
      <li key={index}>{point}</li>
    ))}
  </ul>
);

const experienceData = [
  {
    align: "left",
    role: "Senior Associate Consultant",
    company: "Infosys",
    period: "July 2025 – Present",
    points: [
      "Collaborated with the architecture team to redesign vehicle IoT data flow, replacing legacy SAJ to- Cosmos architecture with an Event Hub–Druid–PostgreSQL-based solution.",
      "Spearheaded the migration from Cosmos DB to Imply Druid and PostgreSQL, reducing operational costs and improving data read performance by 30–40%.",
      "Built Azure Function Apps triggered by Event Hub to process and segregate incoming IoT data streams for downstream analytics.",
      "Designed and implemented Druid-based database schema that listens to Event Hub topics, enabling real-time ingestion and optimized querying.",
      "Developed backend logic and web app components to retrieve and display Druid DB data in frontend UI grids with high responsiveness.",
      "Enabled PostgreSQL as an alternative storage system for processed vehicle data to support reporting and compliance use cases.",
      "Built a CDC-driven event pipeline with SQL CDC, Event Hub, Redis, and Druid, cutting data latency by ~60% and maintaining near real-time consistency; implemented in JavaScript and deployed on Kubernetes with YAML configuration and logging."
    ],
  },
  {
    align: "right",
    role: "Associate Consultant",
    company: "Infosys",
    period: "Nov 2024 – July 2025",
    points: [
      "Reduced API latency by 20% and improved system efficiency by 30% through API and SP optimization.",
      "Boosted API throughput by 60% by re-structuring region-specific stored procedures, cutting logic overhead.",
      "Led the architecture of Azure Function Apps (HTTP, Timer, Event Hub, and Service Bus) for real-time telemetry ingestion (\~50,000+ messages/day).",
      "Increased processing speed by 40% for vehicle data using Redis-backed caching and workload segregation.",
      "Applied secure secret handling using Azure Key Vault across environments.",
      "Managed large file ingestion via Blob Storage, reducing manual handling by 80%.",
      "Implemented JavaScript Event Hub triggered Functions for event stream parsing with <150ms execution.",
      "Integrated CI/CD pipelines using Azure DevOps, cutting deployment time by 70%.",
      "Mentored junior developers in backend design and code review processes.",
      "Collaborated with 3+ cross-functional teams in Agile sprints to deploy features bi-weekly."
    ],
  },
  {
    align: "left",
    role: "Associate Business Analyst",
    company: "Infosys",
    period: "November 2022 – July 2024",
    points: [
      "Created and deployed WebSocket-enabled APIs in .NET Core for real-time IoT messaging.",
      "Improved telemetry storage throughput by 45% via Cosmos DB optimization techniques.",
      "Implemented function-based IoT workflows, reducing maintenance resolution times by 40%.",
      "Led migration of vehicle data ingestion to an event-driven model, boosting reliability by 35%."
    ],
  },
  {
    align: "right",
    role: "Junior Software Engineer",
    company: "Firstsource",
    period: "July 2020 – November 2022",
    points: [
      "Developed WPF/Windows Forms apps and backend APIs for high-volume reporting systems.",
      "Reduced report generation time by 30% through SP refactoring and pagination logic.",
      "Implemented Azure Blob Storage for dynamic document storage supporting 100+ daily uploads."
    ],
  },
];

