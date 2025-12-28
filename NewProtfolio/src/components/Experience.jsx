import React from "react";

export default function Experience() {
  return (
    <section className="bg-black px-4 md:px-12 py-14">
      <div className="relative max-w-6xl mx-auto">

        {/* EXPERIENCE LABEL */}
              {/* EXPERIENCE LABEL */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-4 z-10">
<span className="text-white text-3xl font-bold mb-10 -translate-y-15">
  Experience
</span>
        </div>

        {/* Center vertical line */}
  <div className="hidden md:block absolute left-1/2 top-10 h-[calc(100%-2.5rem)] w-1 -translate-x-1/2 bg-white rounded-full" />


        <div className="flex flex-col gap-16">
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
  <div className="bg-[#28282b] rounded-3xl p-6 md:w-[90%]">
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
    role: "Associate Consultant",
    company: "Infosys",
    period: "July 2024 – Present",
    points: [
      "Optimized APIs and stored procedures by separating region-specific logic, improving overall API performance by 60%.",
      "Designed and deployed Azure Function Apps using HTTP and Timer triggers for production workloads.",
      "Handled live environment deployments, monitoring, and performance tuning."
    ],
  },
  {
    align: "right",
    role: "Associate Business Analyst",
    company: "Infosys",
    period: "Nov 2022 – July 2024",
    points: [
      "Built scalable .NET Core APIs and WebSocket services for real-time vehicle and IoT communication.",
      "Optimized database queries and telemetry processing pipelines, reducing response time by 25%.",
      "Implemented Azure Function Apps integrated with Cosmos DB for high-throughput event ingestion."
    ],
  },
  {
    align: "left",
    role: "Junior Software Engineer",
    company: "Firstsource",
    period: "July 2020 – Nov 2022",
    points: [
      "Developed WPF and Windows Forms applications integrated with SQL Server for enterprise workflows.",
      "Built and deployed ASP.NET Web APIs using IIS and Azure Blob Storage.",
      "Collaborated with cross-functional teams to deliver stable production-ready desktop and web solutions."
    ],
  },
];

