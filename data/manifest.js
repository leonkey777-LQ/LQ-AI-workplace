// ============================================================================
// 糖玩 AI 实验室 · 模块化课程注册表 (data/manifest.js)
// 说明：courses.html v3.0 会按以下顺序依次加载子模块；
// 任意单个文件出错均会被自动隔离，不会导致全站白屏！
// ============================================================================
window.COURSE_MANIFEST = {
  version: "3.0",
  updatedAt: "2026-11-24",
  categories: [
    { id: "L0",  label: "⚡ L0 周末破冰沙龙",            alwaysShow: true },
    { id: "A",   label: "💼 班型A：AI职场提效班",         alwaysShow: true },
    { id: "B",   label: "🎬 班型B：AIGC自媒体副业班",     alwaysShow: true },
    { id: "C",   label: "💻 班型C：Vibe Coding创客班",    alwaysShow: true },
    { id: "B2B", label: "🏢 L3 唐山B端企业内训专题",      alwaysShow: true },
    { id: "L4",  label: "🚀 L4 青少年AI科创与英语营",     alwaysShow: false }
  ],
  files: [
    "data/l0_salon.js",
    "data/l1_work.js",
    "data/l1_aigc.js",
    "data/l1_vibe.js",
    "data/l3_b2b.js",
    "data/l4_teen.js"
  ]
};
