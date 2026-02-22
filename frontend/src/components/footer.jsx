import linkedinIcon from "../assets/png/linkedin-ico.png";
import githubIcon from "../assets/png/github-ico.png";
import twitterIcon from "../assets/png/twitter-ico.png";
import youtubeIcon from "../assets/png/yt-ico.png";
import whatsappIcon from "../assets/svg/whatsapp2.svg";

function Footer() {
  return (
    <footer className="w-full bg-[#0b1a33] text-white mt-0">
      <div className="px-[50px] py-14 flex flex-col gap-10">
        {/* UPPER */}
        <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-white/10 pb-10">
          {/* LEFT — Social */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Social
            </h2>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/neville369/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://github.com/Neville369"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="Github"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>

              <a href="https://x.com/NHazlith" target="_blank" rel="noreferrer">
                <img
                  src={twitterIcon}
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
                  src={youtubeIcon}
                  alt="Youtube"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
              <a
                href="https://wa.me/2348027732305"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-6 h-6 hover:scale-110 transition"
                />
              </a>
            </div>
          </div>

          {/* RIGHT — About */}
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Eghove Ovie O'Neil
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              I’m a Backend and Data Engineer with a strong mathematical
              foundation, focused on building scalable APIs, data pipelines, and
              intelligent systems. I design backend architectures that power
              real-world applications while transforming complex datasets into
              reliable, production-ready solutions.
            </p>
          </div>
        </div>

        {/* LOWER */}
        <div className="text-center text-sm text-gray-400 pt-6">
          © {new Date().getFullYear()} . Made by{" "}
          <a
            href="index.html"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            Eghove Ovie O'Neil
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
