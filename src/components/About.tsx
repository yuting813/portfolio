import { Code, Zap, Wrench, ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: "前端開發",
      description:
        "React、TypeScript、React Router；元件化設計、狀態管理與 RWD 實作",
    },
    {
      icon: <Zap size={24} />,
      title: "性能與體驗優化",
      description:
        "Lazy loading、Skeleton、圖片策略（<picture>/srcset）、CLS/Lighthouse 指標提升",
    },
    {
      icon: <Wrench size={24} />,
      title: "工程化與可維護性",
      description:
        "ESLint/Prettier、語義化 Commit、Git Flow；模組化權限與表單驗證",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "API 串接與權限管理",
      description:
        "RESTful API、Axios 攔截器與錯誤處理、JWT 登入、角色/權限（RBAC）渲染",
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "SCSS",
    "Git",
    // "Webpack",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              關於我
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              從採購到前端：兩個專案驗證——把需求拆成可維護的前端與可量化的體驗
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                我的故事
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  我過去在採購領域工作，最有成就感的是把需求拆解、控管風險並準時交付。
                  這份經驗啟發我轉職前端，開始系統化自學 React 與
                  TypeScript（透過 Udemy 全端課程打底），
                  希望把流程與數據驅動的方法帶進產品開發、直接改善使用者體驗。
                </p>
                <p>
                  我把學到的內容延伸到實作，完成兩個 side project。 在{" "}
                  <strong>MERN 課程平台</strong>{" "}
                  中，實作登入與角色權限（RBAC）分流、表單驗證模組化與 API
                  串接； 在 <strong>Netflix Clone</strong>{" "}
                  中，解決卡片滾動邏輯與圖片策略以降低 <strong>CLS</strong>。
                  我用 <strong>Lighthouse/CLS</strong> 驗證優化成效，並以
                  <strong>
                    {" "}
                    Git Flow、語義化 Commit、ESLint/Prettier（本地）＋ Vercel PR
                    Preview/自動部署
                  </strong>
                  規範流程，確保程式碼可維護且成果可驗證。
                </p>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                核心技能
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-primary-600 mb-3">{skill.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              技術棧
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
