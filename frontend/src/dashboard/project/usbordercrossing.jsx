import usBorderCrossingMainImage from "../../assets/jpeg/usbordercrossingmain.jpg";

function Usbordercrossing({ onNavigate }) {
  return (
    <>
      {/* HERO */}
      <section className="w-full min-h-[60vh] bg-[#0b1a33] text-white flex items-center">
        <div className="px-[50px] w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              US-Border Crossing Analysis
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              This page contains the case study of the US-Border Crossing
              Analysis project, including the project overview, tools used, and
              live links to the official product.
            </p>

            <a
              href="https://1drv.ms/f/c/d9ef4d7cc45fdf1a/Et6Qvgf6Qn1OlaxpoDeVTksBywOXejWV5WrAXETpJ9T8Cg?e=bvTgl3"
              target="_blank"
              rel="noreferrer"
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
              <img
                src={usBorderCrossingMainImage}
                alt="US Border Crossing Analysis"
                className="w-full h-auto object-contain"
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
                  The dataset contains border crossing traffic data for various
                  U.S. ports along the U.S.-Mexico and U.S.-Canada borders from
                  2021 to 2023. It includes information about crossing types
                  (buses, trucks, pedestrians, personal vehicles), ports of
                  entry, U.S. states, and dates.
                </p>

                <p className="text-gray-300 leading-relaxed mt-4">
                  This dataset provides insights into the flow of goods and
                  people across borders, helping with traffic management,
                  resource allocation, and border security optimization. The
                  analysis identifies trends, busiest ports, and fluctuations
                  across time.
                </p>
              </div>

              {/* Objective */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Objective</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The objective of this project is to analyze border crossing
                  data using SQL queries to uncover patterns and trends in
                  traffic across U.S.-Mexico and U.S.-Canada borders.
                </p>

                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="text-white">Explore Data:</strong>{" "}
                    Understand dataset structure and crossing types.
                  </li>
                  <li>
                    <strong className="text-white">Generate Insights:</strong>{" "}
                    Identify busiest ports, seasonal trends, and yearly
                    comparisons.
                  </li>
                  <li>
                    <strong className="text-white">
                      Optimize Border Traffic:
                    </strong>{" "}
                    Support traffic flow optimization and resource allocation.
                  </li>
                  <li>
                    <strong className="text-white">Enhance SQL Skills:</strong>{" "}
                    Practice complex aggregations and analytical queries.
                  </li>
                </ul>

                <p className="text-gray-300 leading-relaxed mt-4">
                  Feel free to check out the project by visiting the project
                  link.
                </p>
              </div>

              {/* Tools */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-3">
                  {["SQL", "Python", "Tableau", "Excel", "ETL", "ELT"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200"
                      >
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Links */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">See Live</h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://1drv.ms/f/c/d9ef4d7cc45fdf1a/IgDekL4H-kJ9TpWsaaA3lU5LAc2va3r3pktBup_4rA3B7gE?e=0UyvAc"
                    target="_blank"
                    rel="noreferrer"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Usbordercrossing;
