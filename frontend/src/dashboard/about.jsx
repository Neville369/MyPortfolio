function About() {
  const skillGroups = [
    {
      title: "Programming Competencies",
      skills: [
        "Python",
        "R",
        "Java",
        "C++",
        "HTML",
        "CSS",
        "ETL",
        "ELT",
        "Web Scrapping",
        "Data Extraction",
        "Data Mining",
        "App Development",
      ],
    },
    {
      title: "Technical Tools & Technologies",
      skills: [
        "Talend",
        "Excel",
        "Tableau",
        "SQLite",
        "MySQL",
        "Android Studio",
        "Bubble",
        "Business Model Canvas",
        "Inventory Management",
      ],
    },
    {
      title: "Interpersonal & Communication Skills",
      skills: [
        "Logical Thinking",
        "Critical Reasoning",
        "Communication",
        "Leadership",
        "Mentorship",
        "Calculus",
        "Real Analysis",
        "Abstract Algebra",
        "Mathematical Method",
      ],
    },
  ];

  return (
    <section id="about" className="w-full bg-[#08162c] text-white py-20">
      <div className="px-[50px]">
        {/* Heading */}
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-5">Get to know me!</h3>

            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                I was born in{" "}
                <strong className="text-white">Congo-Brazzaville</strong> to a
                Congolese mother and a Nigerian father, which gave me the gift
                of bilingualism—I'm fluent in both English and French, although
                I primarily write in English.
              </p>

              <p>
                From a young age, I’ve been drawn to puzzles and board games
                like <strong className="text-white">chess</strong>,{" "}
                <strong className="text-white">Monopoly</strong>, and{" "}
                <strong className="text-white">Scrabble</strong>, excelling at
                them and nurturing my problem-solving skills. My favorite
                subject in primary school was{" "}
                <strong className="text-white">mathematics</strong>, and this
                passion continued into secondary school, where I joined the
                science department and discovered programming. My first
                programming language was{" "}
                <strong className="text-white">C++</strong>, which I taught
                myself using <strong className="text-white">SoloLearn</strong>.
              </p>

              <p>
                Over time, I expanded my interests to{" "}
                <strong className="text-white">cryptography</strong>,{" "}
                <strong className="text-white">blockchain</strong>, and{" "}
                <strong className="text-white">forex trading</strong>. When I
                began my university studies for a{" "}
                <strong className="text-white">BTech</strong> in{" "}
                <strong className="text-white">Mathematics</strong>, I decided
                to pursue a career in{" "}
                <strong className="text-white">Data engineering</strong>.
                Drawing from my passion for creating algorithms and unraveling
                challenges, I became fascinated with building processes to{" "}
                <strong className="text-white">extract</strong>,{" "}
                <strong className="text-white">transform</strong>, and{" "}
                <strong className="text-white">load</strong> data across systems
                efficiently.
              </p>

              <p>
                Today, I combine my strong foundation in mathematics, logical
                thinking, and programming expertise to tackle complex data
                challenges and create innovative solutions that drive insights
                and impact.
              </p>

              <p>
                I also like sharing content related to the stuff that I have
                learned over the years in{" "}
                <strong className="text-white">GitHub</strong> so it can help
                other people. Feel free to connect or follow me on{" "}
                <a
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  rel="noreferrer"
                  href="https://linkedin.com/in/rammcodes"
                  target="_blank"
                >
                  Linkedin
                </a>{" "}
                and{" "}
                <a
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  rel="noreferrer"
                  href="https://github.com/Neville369"
                  target="_blank"
                >
                  Github
                </a>{" "}
                where I post useful content related to Data Engineering and
                Programming.
              </p>

              <p>
                I'm open to <strong className="text-white">Job</strong>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to{" "}
                <strong className="text-white">contact</strong> me.
              </p>
            </div>

            <a
              href="mailto:ovieghove0000@gmail.com"
              className="inline-flex mt-8 items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 px-7 py-3 font-semibold transition"
            >
              Contact
            </a>
          </div>

          {/* Right */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-5">My Skills</h3>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-base font-semibold text-white mb-3">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-sm bg-white/10 border border-white/10 text-gray-200 hover:bg-white/15 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
