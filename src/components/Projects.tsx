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
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "MERN Stack 全端應用",
      description:
        "使用 MongoDB、Express.js、React 和 Node.js 構建的全端網頁應用程式。展示了完整的前後端開發能力，包含 RESTful API 設計、資料庫操作和用戶界面開發。",
      image: mernImg,
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "JWT",
        "Mongoose",
      ],
      liveUrl: "https://mern-project-ivory.vercel.app/",
      githubUrl: "https://github.com/yuting813/mern-project",
      featured: true,
      highlights: [
        "RESTful API 設計與實作",
        "MongoDB 資料庫設計",
        "JWT 身份驗證系統",
        "CRUD 操作完整實現",
        "前後端分離架構",
      ],
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "使用 React 和現代前端技術重現 Netflix 的用戶界面和核心功能。包含電影瀏覽、用戶註冊、用戶認證、響應式設計等功能。採用 TMDb API 獲取真實電影數據，實現完整的串流媒體平台體驗。",
      image: netflixImg,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "TMDB API",
      ],
      liveUrl: "https://project-netflix-clone-two.vercel.app/",
      githubUrl: "https://github.com/yuting813/project-_netflix-clone",
      featured: true,
      highlights: [
        "訂閱付費機制",
        "響應式設計，支援多種設備",
        "用戶認證與個人資料管理",
        "影片分類瀏覽與我的清單",
        "影片預告片播放",
      ],
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
