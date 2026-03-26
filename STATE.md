# Bayes Global Website - State Snapshot

**最后更新：** 2026-03-26 23:45 GMT+8  
**当前版本：** c8baa83  
**部署状态：** 开发中 (localhost:3000)

---

## 🟢 已完成

### 核心功能
- [x] 首页 (Home) - 客户端落地页，包含服务介绍、覆盖区域、表单
- [x] 供应商页面 (Supplier) - 招募合作伙伴的独立落地页
- [x] 洞察列表页 (Insights) - 市场调研文章列表
- [x] 洞察详情页 (Insights/[slug]) - 文章阅读页
- [x] 合作伙伴优势页 (Supplier/Partner)
- [x] 合作伙伴要求页 (Supplier/Requirements)
- [x] 申请表单页 (Supplier/Apply)

### 技术架构
- [x] Next.js 14.1.0 App Router
- [x] TypeScript + Tailwind CSS
- [x] 响应式设计 (移动端适配)
- [x] 固定导航栏 + 智能占位方案

### 关键修复 (2026-03-26)
- [x] **供应商页面顶部白边问题** - 通过无损重构彻底解决
  - 移除根布局硬编码 `pt-20`
  - 在 Header 组件中添加智能占位 `<div className="h-20">`
  - 清理供应商布局的 `-mt-20` 脏代码
- [x] **洞察列表页/详情页顶部白边** - 同上方案统一修复

---

## 🟡 待办

### 功能完善
- [ ] 申请表单对接 Formspree 或其他后端服务
- [ ] 添加更多洞察文章
- [ ] 多语言支持 (i18n)
- [ ] SEO 优化 (meta tags, sitemap)

### 部署上线
- [ ] Vercel 部署配置
- [ ] 自定义域名绑定
- [ ] 生产环境构建测试

### 性能优化
- [ ] 图片优化 (Next/Image)
- [ ] 代码分割优化
- [ ] Lighthouse 评分提升

---

## 📝 技术债务

- 根布局的 `<main>` 使用了 `flex-1 flex flex-col min-h-screen`，需确保所有子页面兼容
- Header 组件的占位 div 高度硬编码为 `h-20` (80px)，如修改 Header 高度需同步更新

---

## 🔗 相关资源

- GitHub: https://github.com/Griffin102/bayes-global-website
- 本地开发: http://localhost:3000
- 供应商页面: http://localhost:3000/supplier
- 洞察列表: http://localhost:3000/insights
