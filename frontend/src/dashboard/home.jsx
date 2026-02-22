import linkedinDarkIcon from "../assets/svg/linkedin-dark.svg";
import twitterDarkIcon from "../assets/svg/twitter-dark.svg";
import youtubeDarkIcon from "../assets/svg/yt-dark.svg";
import githubDarkIcon from "../assets/svg/github-dark.svg";
import whatsappIcon from "../assets/svg/whatsapp.svg";

function Home() {
  const resumeUrl =
    "https://1drv.ms/b/c/d9ef4d7cc45fdf1a/IQBcImFpzsMURoI2PmUosgb-AXN5Y3U-lpBZE6DnBYJY8X8?e=CjsKN7";

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0b1a33] text-white flex items-center justify-center">
      {/* MAIN CONTENT */}
      <div className="px-[50px] w-full flex justify-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Hi, I’m Eghove Ovie O’Neil
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            I’m a Backend and Data Engineer with a strong mathematical
            foundation, focused on building scalable APIs, data pipelines, and
            intelligent systems. I design backend architectures that power
            real-world applications while transforming complex datasets into
            reliable, production-ready solutions.
          </p>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md font-semibold transition"
          >
            Resume
          </a>
        </div>
      </div>

      {/* SOCIAL SIDEBAR */}
      <div className="hidden lg:flex flex-col gap-4 absolute left-6 top-1/2 -translate-y-1/2 bg-white rounded-xl p-3 shadow-lg">
        <a
          href="https://www.linkedin.com/in/neville369/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinDarkIcon}
            alt="LinkedIn"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </a>

        <a href="https://x.com/NHazlith" target="_blank" rel="noreferrer">
          <img
            src={twitterDarkIcon}
            alt="Twitter"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </a>

        <a
          href="https://www.youtube.com/@eghoveovie4575"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={youtubeDarkIcon}
            alt="YouTube"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </a>

        <a
          href="https://github.com/Neville369"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={githubDarkIcon}
            alt="GitHub"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </a>
        <a href="https://wa.me/2348027732305" target="_blank" rel="noreferrer">
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="w-6 h-6 hover:scale-110 transition"
          />
        </a>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-[26px] h-[42px] border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-[4px] h-[8px] bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
