# Bayes Global Website

新兴市场定性招募与实地执行专家官方网站

## 🚀 部署说明

### 1. Vercel 部署（推荐）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录 Vercel
vercel login

# 部署到测试环境
cd /root/.openclaw/agents/tudo_agent/projects/bayes-global-website
vercel

# 部署到生产环境
vercel --prod
```

### 2. Formspree 表单配置

1. 访问 https://formspree.io 注册账号
2. 创建新表单，获取表单 ID
3. 更新以下文件中的 `FORMSPREE_URL`：
   - `src/app/client/contact/page.tsx`
   - `src/app/supplier/apply/page.tsx`

替换：
```typescript
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';
```

### 3. 域名配置（后续）

部署完成后，在 Vercel 控制面板添加域名 `bayesglobal.com`

## 📁 项目结构

```
bayes-global-website/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 首页（语言选择）
│   │   ├── client/               # 客户门户（中文）
│   │   │   ├── page.tsx          # 客户首页
│   │   │   ├── about/page.tsx    # 关于我们
│   │   │   ├── services/page.tsx # 服务能力
│   │   │   ├── coverage/page.tsx # 全球网络
│   │   │   └── contact/page.tsx  # 联系我们（带表单）
│   │   └── supplier/             # 供应商门户（英文）
│   │       ├── page.tsx          # 供应商首页
│   │       ├── partner/page.tsx  # 合作优势
│   │       ├── requirements/page.tsx # 合作要求
│   │       └── apply/page.tsx    # 申请表单
│   └── data/
│       ├── zh.json               # 中文文案（可编辑）
│       └── en.json               # 英文文案（可编辑）
├── package.json
└── README.md
```

## ✏️ 文案修改

所有文案都已抽离到 JSON 文件，修改方法：

1. 打开 `src/data/zh.json`（中文）或 `src/data/en.json`（英文）
2. 修改引号内的文字
3. 保存后重新部署：`vercel --prod`

## 🛠️ 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 📧 表单配置

表单使用 Formspree 服务，功能：
- ✅ 邮件直达 griffin@bayesglobal.com
- ✅ 内置防垃圾（hCaptcha）
- ✅ 免费额度：每月 50 次提交

---

**部署完成后，Vercel 会提供测试链接，格式类似：**
`https://bayes-global-website-xxx.vercel.app`
