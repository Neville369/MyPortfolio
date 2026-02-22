import agricDashboardImage from "../assets/jpeg/agric_dashboard.png";
import usBorderCrossingImage from "../assets/jpeg/usbordercrossing.jpg";

function Project({ onNavigate }) {
  const projects = [
    {
      title: "Agricultural Data Analysis",
      image: agricDashboardImage,
      desc: (
        <>
          AgricProject is a full-stack commodity analytics and forecasting
          platform that predicts agricultural market prices and volatility. It
          combines a React dashboard frontend with a FastAPI backend to let
          users select commodities, define training/testing periods, tune
          <strong className="text-white">ARIMA/SARIMA</strong> and
          <strong className="text-white">GARCH</strong> parameters, and generate
          forward forecasts with confidence intervals. The system stores
          historical commodity prices in SQL Server, serves forecasting APIs,
          and visualizes results through interactive charts, model metrics
          (MAE/RMSE), and exportable CSV reports. It is designed to support
          data-driven planning by turning historical market data into actionable
          short- to medium-term price and risk insights.
        </>
      ),
      section: "agriculturalcasestudy",
    },
    {
      title: "US-Border Crossing Analysis",
      image: usBorderCrossingImage,
      desc: (
        <>
          The analysis of the U.S. border crossing data was conducted using{" "}
          <strong className="text-white">SQLite</strong> for efficient data
          storage, querying, and management.{" "}
          <strong className="text-white">Tableau</strong> was used for data
          visualization, enabling the creation of interactive dashboards to
          analyze trends, identify patterns, and present insights clearly.
          Together, these tools facilitated the exploration and interpretation
          of complex border traffic data.
        </>
      ),
      section: "usbordercrossing",
    },
  ];

  return (
    <section id="projects" className="w-full bg-[#08162c] text-white py-20">
      <div className="px-[50px]">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {projects.map((p) => (
            <div
              key={p.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20 p-3">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl font-semibold">{p.title}</h3>

                <p className="mt-4 text-gray-300 leading-relaxed">{p.desc}</p>

                {p.section ? (
                  <button
                    type="button"
                    onClick={() => onNavigate(p.section)}
                    className="inline-flex mt-7 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold transition"
                  >
                    Case Study
                  </button>
                ) : (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex mt-7 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold transition"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
