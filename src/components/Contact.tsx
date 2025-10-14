import React, { useEffect, useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

// 以環境變數切換 API；本機/正式用 .env 與 .env.production 控制
// Contact.tsx
const API_URL =
  import.meta.env.VITE_MAIL_API ||
  (location.hostname.endsWith("tinahu.dev")
    ? "https://api.tinahu.dev/email" // 正式
    : "http://127.0.0.1:8787/email"); // 本機 wrangler dev

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // 成功後 3 秒自動隱藏提示（可保留/可移除）
  useEffect(() => {
    if (submitStatus?.success) {
      const t = setTimeout(() => setSubmitStatus(null), 3000);
      return () => clearTimeout(t);
    }
  }, [submitStatus]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 前端基本驗證（後端仍會再驗一次）
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setIsSubmitting(false);
      setSubmitStatus({ success: false, message: "請輸入有效的 Email" });
      return;
    }
    if (formData.message.trim().length < 10) {
      setIsSubmitting(false);
      setSubmitStatus({ success: false, message: "訊息至少 10 個字 🙏" });
      return;
    }

    // 蜜罐（隱藏欄位，擋 bot）
    const gotcha =
      (e.currentTarget.elements.namedItem("_gotcha") as HTMLInputElement)
        ?.value ?? "";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, _gotcha: gotcha }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "發送失敗，請稍後再試");
      }

      setSubmitStatus({
        success: true,
        message: "感謝您的訊息！我會盡快回覆您。",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        success: false,
        message:
          typeof error?.message === "string"
            ? `發送失敗：${error.message}`
            : "發送失敗，請稍後再試或直接寄信到我的信箱。",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "電子郵件",
      content: "tinahuu321@gmail.com",
      link: "mailto:tinahuu321@gmail.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "位置",
      content: "新北市, 台灣",
      link: "#",
    },
  ];

  // 🔗 社群入口（2~3 個就好）
  const social = [
    {
      href: "https://github.com/yuting813",
      label: "GitHub",
      icon: <Github size={20} />,
    },
    {
      href: "https://www.linkedin.com/in/tina-hu-frontend/",
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
    },
    //  blog/作品集：{ href: "https://your.blog", label: "Blog", icon: <Globe size={20} /> },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              聯絡我
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              有任何工作機會或專案合作或其他問題，歡迎與我聯繫！
            </p>
          </div>

          {/* 12 欄：左 5 / 右 7 */}
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                聯絡資訊
              </h3>
              <p className="text-gray-600 mb-8">
                我很樂意討論新的機會和挑戰。無論是全職工作、專案合作，
                都歡迎與我聯繫。
              </p>

              {/* 卡片區塊 */}
              <div className="space-y-6 rounded-2xl border border-gray-100 p-6 bg-gray-50">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}

                <hr className="border-gray-200" />
                {/* 社群 icon 列（灰階→hover 品牌色） */}
                <div className="flex items-center gap-3">
                  {social.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-500 hover:text-primary-600 hover:border-primary-200 transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                發送訊息
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      電子郵件
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    主題
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    訊息內容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  />
                </div>

                {/* 提示移到按鈕上方（更貼近操作位置） */}
                {submitStatus && (
                  <div
                    role="alert"
                    className={`p-4 rounded-lg transition-all duration-200 ${
                      submitStatus.success
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* 蜜罐（隱藏欄位，擋 bot） */}
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>發送中...</span>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>發送訊息</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
