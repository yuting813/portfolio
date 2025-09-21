import React from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "../assets/profile.webp";

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-start to-brand-end"
      aria-labelledby="hero-title"
    >
      <div className="container-max section-padding pt-10 md:pt-12 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="my-6">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden ring-2 ring-rose-100 shadow">
              <img
                src={profileImg}
                alt="Tina Hu 的大頭照"
                className="absolute inset-0 w-full h-full object-cover"
                width={128} // 固有尺寸，避免 CLS
                height={128}
                loading="eager" // 首屏圖：優先載入
                decoding="async"
                fetchPriority="high" // 提示瀏覽器提高優先級
              />
            </div>
          </div>

          {/* Main Content */}
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            你好，我是
            <span className="text-primary-600 block mt-2">
              前端工程師 Tina Hu
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            專注 React 與 TypeScript，
            <br />
            透過 MERN 課程平台與 Netflix Clone 專案—
            <br />
            將需求轉化為易維護程式碼與流暢用戶體驗的能力。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="btn-primary"
              aria-label="查看我的專案作品"
            >
              查看專案作品
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              aria-label="前往聯絡方式"
            >
              聯絡我
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="https://github.com/yuting813"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              title="GitHub"
            >
              <Github size={24} aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/tina-hu-frontend/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>

            <a
              href="mailto:tinahuu321@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-primary-600 transition-colors"
              title="Email"
            >
              <Mail size={24} aria-hidden="true" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            type="button"
            className="mx-auto block motion-safe:animate-bounce hover:text-primary-500 transition-colors"
            onClick={scrollToNextSection}
            aria-label="向下滾動到關於我"
          >
            <ChevronDown
              size={32}
              className="text-gray-400 hover:text-primary-500"
              aria-hidden="true"
            />
          </button>
          {/* 對減少動作使用者停用動畫 */}
          <style>{`
            @media (prefers-reduced-motion: reduce) {
              .motion-safe\\:animate-bounce { animation: none !important; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Hero;
