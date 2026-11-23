// ============================================================================
// 糖玩 AI 实验室 · 互动演示大厅注册表 (data/demos_registry.js)
// 说明：每次在 demos/ 目录新增单文件小工具，只需在此数组追加一条记录，
// lab.html 即可自动渲染卡片、分类筛选、模拟手机预览与微信分享二维码。
// ============================================================================
window.DEMO_REGISTRY = [
  {
    id: "test",
    title: "唐山打工人 AI 提效潜力 1 分钟诊断页",
    subtitle: "5 题互动测评 + ECharts 五维效率雷达图 + 个性化提效处方",
    category: "试水引流",
    status: "ready",
    url: "demos/test.html",
    icon: "fa-solid fa-radar",
    accent: "emerald",
    tags: ["小红书微试水", "ECharts雷达图", "零推销感"],
    lessonRef: "L0-01 / A-01",
    desc: "专为在职蓄水期低调线上试水打造：用户 1 分钟勾选日常办公痛点，实时生成每周可释放工时、5 维 AI 杠杆雷达图与免费提效工具处方，支持一键复制测评文案。"
  },
  {
    id: "lucky",
    title: "唐山周末吃啥 / 去哪玩赛博抽签器",
    subtitle: "物理减速老虎机 + 自定义加店 + 纯 Canvas 礼花特效",
    category: "沙龙炫技",
    status: "ready",
    url: "demos/lucky.html",
    icon: "fa-solid fa-dice",
    accent: "amber",
    tags: ["L0沙龙核武", "3分钟建站演示", "离线可跑"],
    lessonRef: "L0-01 / C-01",
    desc: "内置唐山本地美食与周末游玩池，支持现场观众临时添加新店名并持久化存储，点击抽签触发加减速滚动与零依赖礼花动效，手机微信扫码即玩。"
  },
  {
    id: "quote",
    title: "30 秒同城商业服务智能报价器",
    subtitle: "多模块勾选联动 + 组合 9 折自动计算 + 配置单一键复制",
    category: "商业样板",
    status: "planned",
    url: "demos/quote.html",
    icon: "fa-solid fa-calculator",
    accent: "blue",
    tags: ["Vibe Coding C-03", "本地商家代开发", "LocalStorage"],
    lessonRef: "C-03",
    desc: "替代密密麻麻的 Excel 报价单：客户在微信内像点外卖一样勾选服务模块，底部总价实时联动与满项打折，支持一键复制定制配置单。"
  },
  {
    id: "boss-bi",
    title: "老板离线经营决策驾驶舱 (Local BI)",
    subtitle: "拖拽本地 Excel/CSV 纯内存解析 + ECharts 双图大屏",
    category: "B端签单",
    status: "planned",
    url: "demos/boss-bi.html",
    icon: "fa-solid fa-chart-line",
    accent: "indigo",
    tags: ["B2B-05 财务内训", "断网零泄密", "替代万元BI"],
    lessonRef: "B2B-05",
    desc: "专为唐山制造工厂与连锁门店打造：财务把脱敏汇总表拖进浏览器，纯本地内存渲染营收柱状图、毛利趋势线与异常预警表，数据绝不上传云端。"
  },
  {
    id: "rag-viz",
    title: "RAG 零幻觉知识库原理可视化模拟器",
    subtitle: "拖动相似度阈值滑块，直观对比 AI 何时胡编、何时精准标出处",
    category: "教学教具",
    status: "planned",
    url: "demos/rag-viz.html",
    icon: "fa-solid fa-brain",
    accent: "cyan",
    tags: ["A-04 / B2B-04", "政企演示教具", "交互动画"],
    lessonRef: "A-04 / B2B-04",
    desc: "用可视化交互把晦涩的向量切片与召回阈值（0.5–0.9）变成直观演示：现场拖动阈值滑块，一眼看懂为什么调高阈值能彻底消灭大模型幻觉。"
  },
  {
    id: "b2b-roi",
    title: "唐山企业 AI 降本增效 ROI 算账器",
    subtitle: "输入岗位人数与月薪，实时推演年省人工费与回本周期曲线",
    category: "B端签单",
    status: "planned",
    url: "demos/b2b-roi.html",
    icon: "fa-solid fa-coins",
    accent: "amber",
    tags: ["老板私享会", "防砍价核武", "ECharts曲线"],
    lessonRef: "B2B-01",
    desc: "B 端谈单破除老板压价的硬核工具：现场输入外贸/客服/财务团队人数与月均薪资，自动算出部署 AI 智能体后的年度净省成本与回本天数。"
  },
  {
    id: "prompt-diff",
    title: "“去 AI 味”公文对比与提示词工坊",
    subtitle: "分屏高亮流水账 / AI 套话 / 四维精修版，点击查看禁用词解析",
    category: "教学教具",
    status: "planned",
    url: "demos/prompt-diff.html",
    icon: "fa-solid fa-file-pen",
    accent: "purple",
    tags: ["职场班 A-01", "体制内公文", "互动教学"],
    lessonRef: "A-01",
    desc: "专为职场提效班第 1 讲设计的课堂教具：高亮标出“赋能、抓手、闭环”等高频塑料词汇，支持一键切换对比精修前后的政企公文质感。"
  },
  {
    id: "ielts-star",
    title: "AI 口语与面试 STAR 三层追问卡片",
    subtitle: "抽题计时器 + 剥洋葱三层追问展开 + 评分红黑榜自检",
    category: "教学教具",
    status: "planned",
    url: "demos/ielts-star.html",
    icon: "fa-solid fa-comments",
    accent: "rose",
    tags: ["雅思双基因", "HR面试 B2B-07", "口语伴学"],
    lessonRef: "B2B-07 / L4",
    desc: "融合国际学校雅思口语考官与企业 STAR 面试法：随机抽取高频考题，展开三层深度追问逻辑，同时服务企业 HR 面试与英语听说训练。"
  }
];
