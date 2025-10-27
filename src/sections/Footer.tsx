import LogoIcon from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoIcon className="h-6 w-6" />
            <div className="font-medium">AI SEO &nbsp;|&nbsp; J2 DevStudio</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center text-center">
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm text-white/70 hover:text-white transition"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-7 lg:flex-1 lg:justify-end">
            <a href="https://x.com/j2devstudio">
              <XSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a href="https://www.facebook.com/J2DevStudio/">
              <InstaSocial className="text-white/40 hover:text-white transition" />
            </a>
            <a href="https://www.youtube.com/@j2devstudio">
              <YTSocial className="text-white/40 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
