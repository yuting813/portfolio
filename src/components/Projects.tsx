import { ExternalLink, Github } from "lucide-react";
import netflixImg from "../assets/netflix.webp";
import mernImg from "../assets/mern.webp";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights: string[];
  accessHint?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "MERN 課程平台",
      description:
        "以「權限驅動 UI」為核心的全端專案。前端集中管理 auth / role 狀態，確保不同身分在初始化、切換與錯誤情境下，UI 行為一致且可預測。",
      image: mernImg,
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Mongoose",
      ],
      liveUrl: "https://course.tinahu.dev/",
      githubUrl: "https://github.com/yuting813/mern-project",
      featured: true,
      highlights: [
        "權限與 auth 狀態集中管理，避免 UI 元件各自判斷",
        "角色切換時，UI 顯示與導頁流程可預期、不閃爍",
        "表單驗證邏輯模組化，前後端規則一致",
        "API 錯誤集中處理，避免錯誤狀態分散在畫面各處",
      ],
      accessHint: "🔐 需登入 · 提供學生帳號示範（教師角色於面試說明與 Demo）",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "以狀態可預測性與 UX 邊界情境為目標的前端專案，處理 auth、訂閱狀態與非同步資料載入下的 UI 顯示順序。",

      image: netflixImg,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "TMDB API",
      ],
      liveUrl: "https://stream.tinahu.dev/",
      githubUrl: "https://github.com/yuting813/project-_netflix-clone",
      featured: true,
      highlights: [
        "auth / subscription 狀態作為 UI 的單一判斷來源",
        "loading / empty / error state 明確區分，避免畫面跳動",
        "圖片與資料載入順序設計，降低 CLS",
        "modal 顯示與背景內容狀態分離，避免 UI 行為交錯",
      ],
      accessHint: "🔐 需登入 · 測試帳號請見專案 README",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              專案作品
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              以下是我近期完成的一些專案，展示了我在不同技術領域的能力
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2 ml-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Project Highlights */}
                  {project.highlights && (
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        主要功能：
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.accessHint && (
                    <p className="my-4 text-xs text-gray-500">
                      {project.accessHint}
                    </p>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/yuting813"
              className="btn-secondary inline-flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              <span>查看更多專案</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
