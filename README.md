# 個人作品集網站

這是一個使用 React + Vite + TypeScript + Tailwind CSS 構建的現代化個人作品集網站。

## 技術棧

- **前端框架**: React 18
- **構建工具**: Vite
- **語言**: TypeScript
- **樣式**: Tailwind CSS
- **圖標**: Lucide React
- **部署**: 支援 Vercel、Netlify、GitHub Pages

## 快速開始

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 構建生產版本
```bash
npm run build
```

### 預覽生產版本
```bash
npm run preview
```

## 頁面內容

1. **個人資訊**: 修改 `src/components/Hero.tsx` 中的個人介紹
2. **關於我**: 編輯 `src/components/About.tsx` 中的技能和經歷
3. **專案作品**: 在 `src/components/Projects.tsx` 中添加您的專案
4. **聯絡資訊**: 更新 `src/components/Contact.tsx` 和 `src/components/Footer.tsx` 中的聯絡方式

## 部署

### Vercel
1. 將代碼推送到 GitHub
2. 在 Vercel 中導入項目
3. 自動部署完成

### Netlify
1. 將代碼推送到 GitHub
2. 在 Netlify 中連接 GitHub 倉庫
3. 設置構建命令: `npm run build`
4. 設置發布目錄: `dist`

### GitHub Pages
1. 啟用 GitHub Actions
2. 推送代碼到 main 分支
3. 自動部署到 GitHub Pages
