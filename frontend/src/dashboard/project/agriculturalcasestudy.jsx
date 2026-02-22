import agricDashboardMainImage from "../../assets/jpeg/agric_dashboard_main.png";

function AgriculturalCaseStudy({ onNavigate }) {
  const tools = [
    "React",
    "Tailwind CSS",
    "FastAPI",
    "SQL Server",
    "Python",
    "ARIMA",
    "SARIMA",
    "GARCH",
    "Pandas",
    "Statsmodels",
  ];

  return (
    <>
      {/* HERO */}
      <section className="w-full min-h-[60vh] bg-[#0b1a33] text-white flex items-center">
        <div className="px-[50px] w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agricultural Data Analysis
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              This page contains the case study of the Agricultural Data
              Analysis project, including the project overview, objective, tools
              used, and live links to the platform.
            </p>

            {/* Replace the link below with your real live link / repo link */}
            <a
              href="https://github.com/Neville369/AgricProject"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-8 py-3 font-semibold transition"
            >
              Project Link
            </a>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="w-full bg-[#08162c] text-white py-20">
        <div className="px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/20 p-4">
              {/* Replace with your project image */}
              <img
                src={agricDashboardMainImage}
                alt="Agricultural Data Analysis Project"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* CONTENT */}
            <div className="space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Agricultural Data Analysis is a full-stack commodity price
                  forecasting platform built to help users analyze historical
                  food commodity prices and predict future trends. The system
                  combines a React dashboard for interactive analytics (charts,
                  model controls, and CSV export) with a FastAPI backend
                  connected to SQL Server, where historical commodity data is
                  stored and queried.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  The backend runs time-series forecasting models (ARIMA/SARIMA)
                  for price prediction and GARCH models for volatility
                  estimation. It returns forecast ranges, validation metrics
                  (MAE/RMSE), and model diagnostics to support decision-making
                  for analysts and stakeholders.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  The dataset contains prices for{" "}
                  <strong className="text-white">five</strong> different food
                  commodities sourced from{" "}
                  <strong className="text-white">
                    NBS (National Bureau of Statistics)
                  </strong>
                  , enabling comparison across commodity types, time periods,
                  and forecast behavior.
                </p>
              </div>

              {/* Objective */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Objective</h2>

                <p className="text-gray-300 leading-relaxed mb-4">
                  The objective of this project is to build a reliable and
                  interpretable forecasting tool that supports market monitoring
                  and planning by transforming raw commodity price records into
                  insights and predictions.
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="text-white">Centralize Data:</strong>{" "}
                    Store and manage historical commodity prices in SQL Server
                    for structured querying and analysis.
                  </li>
                  <li>
                    <strong className="text-white">Analyze Trends:</strong>{" "}
                    Provide interactive charts and exploration tools to
                    understand seasonality, spikes, and long-term price
                    movement.
                  </li>
                  <li>
                    <strong className="text-white">Forecast Prices:</strong> Use
                    ARIMA/SARIMA to generate future price forecasts with
                    confidence ranges.
                  </li>
                  <li>
                    <strong className="text-white">Estimate Volatility:</strong>{" "}
                    Apply GARCH models to assess volatility and risk patterns
                    over time.
                  </li>
                  <li>
                    <strong className="text-white">Evaluate Models:</strong>{" "}
                    Report MAE/RMSE and diagnostics to validate model
                    reliability and compare performance.
                  </li>
                  <li>
                    <strong className="text-white">Enable Export:</strong> Allow
                    users to export results and forecasts to CSV for reporting
                    and external analysis.
                  </li>
                </ul>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Feel free to check out the platform using the project link.
                </p>
              </div>

              {/* Tools */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">See Live</h2>
                <div className="flex flex-wrap gap-4">
                  {/* Replace with your real links */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold transition"
                  >
                    Project Link
                  </a>

                  <button
                    type="button"
                    onClick={() => onNavigate("project")}
                    className="inline-flex items-center justify-center rounded-md border border-white/20 hover:bg-white/10 px-7 py-3 font-semibold transition"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
            {/* END CONTENT */}
          </div>
        </div>
      </section>
    </>
  );
}

export default AgriculturalCaseStudy;
