const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

const LOCALES = {
  zh: {
    header: { email: 'Email' },
    nav: { home: 'Home', works: 'Works', harness: 'Harness', knowledge: 'Knowledge', articles: 'Articles', contact: 'Contact' },
    hero: {
      kicker: 'AI 产品经理 · Agent 工作流架构 · 知识系统策展',
      title: '把业务、知识与 Agent 编织成一束 <span class="gold-word">GoldenWave</span>。',
      sub: '我关注的不是把 AI 当成演示工具，而是让模型、知识库、业务规则、人机协同和验证闭环一起进入真实工作流。',
      ctaHarness: 'View Harness',
      ctaWorks: 'Selected Works',
      readoutA: 'L0 Preference',
      readoutB: 'L1/L2 Knowledge',
      readoutC: 'L3 Project Memory',
      panelTitle: 'From product judgment to executable systems.',
      panelDesc: 'A quiet interface for AI products, business agents, knowledge assets, and reusable workflows.'
    },
    metric: {
      product: { label: 'Product Experience', desc: 'AIGC / 视频 / 直播 / 社区 / XR' },
      ai: { label: 'Business AI', value: '托管', desc: '教育直播课 Agent 与人机协同' },
      knowledge: { label: 'Knowledge Asset', desc: '实体、概念、方法与综合页持续沉淀' },
      loop: { label: 'Operating Loop', desc: 'Read / Execute / Signal / Tune 的个人协作回路' }
    },
    quote: { text: '好的 AI 产品不是替代人，而是让人的判断力、经验和品味可以被系统放大。' },
    works: {
      label: 'Selected Works · 2017—2026',
      title: '代表作品。',
      desc: '把经历压缩成四条主线：业务 AI 托管、Agent 配置平台、AIGC 视频与 XR、以及可复用的个人知识系统。',
      items: [
        { title: '直播课 AI 托管', desc: '企微私聊、电话外呼、SOP 路由、人工接管和 Badcase 调优组成的业务 Agent 系统。', time: '2024—Now', tag: 'AI Agent · Ops' },
        { title: 'Agent Config Studio', desc: '让业务方管理智能体、SOP、知识库、测试、版本、灰度与质量反馈。', time: '2026', tag: 'Product · LLM' },
        { title: 'Personal Agent Harness', desc: '串联个人知识库、项目仓库、Git 远端与多 Agent 调度的冷启动协作回路。', time: '2026', tag: 'Knowledge · Workflow' },
        { title: 'AIGC Video & XR', desc: '从一帧秒创、数字人到 VR 内容分发，把生成式内容带入真实业务场景。', time: '2017—2024', tag: 'Video · XR' }
      ]
    },
    harness: {
      label: 'Agent Harness',
      title: '我的个人协作系统。',
      desc: '核心目标是让任意 Agent 在任意根目录冷启动，30 秒内知道自己在哪、能做什么、不能动什么，并把状态变化显式写入事件流。'
    },
    map: {
      personal: { title: '个人知识库', desc: '偏好、方法、实体页、综合页与 daily 反馈入口。' },
      team: { title: '团队知识源', desc: '业务原件、PRD、SOP、Prompt 与一线服务知识。' },
      multica: { title: 'Multica 调度', desc: 'Issue、Autopilot、@mention 与任务生命周期。' },
      desktop: { title: 'Hermes / ZChat / Claude Code', desc: '日常扫描、方案对话、编码执行分工协作。' },
      project: { title: '项目仓库', desc: 'AGENTS.md、docs、代码、验证和远端 Git 记录。' }
    },
    flows: {
      ai: { title: 'AI 托管业务流', desc: '消息预处理、主 Agent 路由、子 Agent 执行、工具调用、老师可见与 Badcase 回归测试。' },
      kb: { title: '知识库维护流', desc: 'inbox 摄入、frontmatter、实体/概念/综合页、INDEX 巡检和 stale 归档。' },
      skill: { title: 'Skill 自进化流', desc: '把 Skill 文档当作可验证资产，用 rollout、reflection、edit、validation 小步更新。' },
      pm: { title: '产品方案生产流', desc: '从上下文检索、PRD、技术方案、任务拆解到多 Agent 执行与复盘沉淀。' }
    },
    knowledge: {
      label: 'Knowledge & Signals',
      title: '知识库与品味。',
      desc: '你的个人知识库已经形成清晰主题：Agent 基础设施、记忆系统、Skill 编排、AI 托管业务和服务系统机制。网站应该把这些沉淀展示成可被理解的思想地图。',
      mapTitle: 'Knowledge Map',
      signalTitle: 'Wave Signals',
      links: ['Agent Harness Engineering', 'Agent Memory Systems', 'Self-Evolving Skills', 'Managed AI Ops'],
      signals: ['AI 产品从演示走向运营系统', 'Skill 是模型外部的能力资产', '知识库是个人与 Agent 的共同记忆', '产品经理的新能力是编排可验证闭环'],
      gatewayLabel: 'GoldenWave Notes',
      gatewayTitle: '进入知识分享文章库',
      gatewayAction: 'Read Signals'
    },
    contact: {
      label: 'Collaboration',
      title: '有 AI 工作流想法？聊聊吧。',
      desc: '适合找我聊：AI Agent 产品设计、教育业务 AI 托管、企业知识库 / 工作流自动化、AIGC 视频与个人知识系统搭建。',
      email: 'Email Me'
    },
    footer: { copyright: '© 2026 GoldenWave Asia', tagline: 'AI products, workflow systems and knowledge assets.' }
  },
  en: {
    header: { email: 'Email' },
    nav: { home: 'Home', works: 'Works', harness: 'Harness', knowledge: 'Knowledge', articles: 'Articles', contact: 'Contact' },
    hero: {
      kicker: 'AI Product Manager · Agent Workflow Architect · Knowledge Systems Curator',
      title: 'Weaving business, knowledge, and Agents into one <span class="gold-word">GoldenWave</span>.',
      sub: 'I care less about AI as a demo and more about putting models, knowledge bases, business rules, human collaboration, and validation loops into real workflows.',
      ctaHarness: 'View Harness',
      ctaWorks: 'Selected Works',
      readoutA: 'L0 Preference',
      readoutB: 'L1/L2 Knowledge',
      readoutC: 'L3 Project Memory',
      panelTitle: 'From product judgment to executable systems.',
      panelDesc: 'A quiet interface for AI products, business agents, knowledge assets, and reusable workflows.'
    },
    metric: {
      product: { label: 'Product Experience', desc: 'AIGC / video / live streaming / community / XR' },
      ai: { label: 'Business AI', value: 'Managed AI', desc: 'Education live-class Agents with human-in-the-loop operations' },
      knowledge: { label: 'Knowledge Asset', desc: 'Entities, concepts, methods, and synthesis pages' },
      loop: { label: 'Operating Loop', desc: 'A personal Read / Execute / Signal / Tune collaboration loop' }
    },
    quote: { text: 'A good AI product does not replace people; it amplifies human judgment, experience, and taste through systems.' },
    works: {
      label: 'Selected Works · 2017—2026',
      title: 'Selected Works.',
      desc: 'Four clear threads: managed business AI, Agent configuration platforms, AIGC video and XR, and a reusable personal knowledge system.',
      items: [
        { title: 'Managed Live-Class AI', desc: 'A business Agent system for WeCom, outbound calls, SOP routing, human handoff, and Badcase tuning.', time: '2024—Now', tag: 'AI Agent · Ops' },
        { title: 'Agent Config Studio', desc: 'A product surface for managing Agents, SOPs, knowledge bases, tests, versions, gray releases, and quality feedback.', time: '2026', tag: 'Product · LLM' },
        { title: 'Personal Agent Harness', desc: 'A cold-start collaboration loop across personal knowledge, project repos, Git remotes, and multi-Agent scheduling.', time: '2026', tag: 'Knowledge · Workflow' },
        { title: 'AIGC Video & XR', desc: 'From video generation and digital humans to VR distribution, bringing generative content into real business settings.', time: '2017—2024', tag: 'Video · XR' }
      ]
    },
    harness: {
      label: 'Agent Harness',
      title: 'My Personal Collaboration System.',
      desc: 'The goal is simple: any Agent can cold-start in any root directory and know where it is, what it can do, what it must not touch, and how to signal state changes within 30 seconds.'
    },
    map: {
      personal: { title: 'Personal Knowledge Base', desc: 'Preferences, methods, entity pages, synthesis pages, and daily feedback entry points.' },
      team: { title: 'Team Knowledge Sources', desc: 'Business originals, PRDs, SOPs, prompts, and frontline service knowledge.' },
      multica: { title: 'Multica Scheduling', desc: 'Issues, Autopilot, @mentions, and task lifecycle routing.' },
      desktop: { title: 'Hermes / ZChat / Claude Code', desc: 'Daily scanning, planning conversations, and coding execution split across Agents.' },
      project: { title: 'Project Repositories', desc: 'AGENTS.md, docs, code, validation, and remote Git records.' }
    },
    flows: {
      ai: { title: 'Managed AI Ops Flow', desc: 'Message preprocessing, main-Agent routing, sub-Agent execution, tool calls, teacher visibility, and Badcase regression tests.' },
      kb: { title: 'Knowledge Maintenance Flow', desc: 'Inbox ingest, frontmatter, entity/concept/synthesis pages, INDEX audits, and stale archive rules.' },
      skill: { title: 'Self-Evolving Skill Flow', desc: 'Treating Skill docs as verifiable assets updated through rollout, reflection, edit, and validation gates.' },
      pm: { title: 'Product Planning Flow', desc: 'From context retrieval, PRDs, technical plans, and issue breakdowns to multi-Agent execution and retrospectives.' }
    },
    knowledge: {
      label: 'Knowledge & Signals',
      title: 'Knowledge & Taste.',
      desc: 'The knowledge base has a clear center of gravity: Agent infrastructure, memory systems, Skill orchestration, managed AI operations, and service-system mechanics.',
      mapTitle: 'Knowledge Map',
      signalTitle: 'Wave Signals',
      links: ['Agent Harness Engineering', 'Agent Memory Systems', 'Self-Evolving Skills', 'Managed AI Ops'],
      signals: ['AI products are moving from demos to operating systems', 'Skills are capability assets outside the model', 'A knowledge base is shared memory for people and Agents', 'The new PM capability is orchestrating verifiable loops'],
      gatewayLabel: 'GoldenWave Notes',
      gatewayTitle: 'Enter the Knowledge Signals archive',
      gatewayAction: 'Read Signals'
    },
    contact: {
      label: 'Collaboration',
      title: 'Have an AI workflow idea? Let’s talk.',
      desc: 'Reach out for AI Agent product design, education AI operations, enterprise knowledge/workflow automation, AIGC video, or personal knowledge systems.',
      email: 'Email Me'
    },
    footer: { copyright: '© 2026 GoldenWave Asia', tagline: 'AI products, workflow systems and knowledge assets.' }
  }
};

let currentLang = localStorage.getItem('gw-lang') || detectInitialLanguage();
let pointer = { x: .5, y: .5 };

function detectInitialLanguage() {
  const cookieLang = (document.cookie.match(/(?:^|; )gw-lang=([^;]+)/) || [])[1];
  if (cookieLang) return decodeURIComponent(cookieLang);
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function getPath(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyLang(lang) {
  const locale = LOCALES[lang] || LOCALES.zh;
  currentLang = lang;
  localStorage.setItem('gw-lang', lang);
  document.cookie = `gw-lang=${encodeURIComponent(lang)}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  window.__acceptLanguage = lang === 'zh' ? 'zh-CN' : 'en-US';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getPath(locale, el.dataset.i18n);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const value = getPath(locale, el.dataset.i18nHtml);
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.langSwitch === lang);
  });

  if (window.ScrollTrigger) ScrollTrigger.refresh();
}

document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.langSwitch));
});

applyLang(currentLang);

const waveCanvas = document.getElementById('waveCanvas');
const waveCtx = waveCanvas?.getContext('2d');
let waveTick = 0;

function resizeCanvas(canvas, ctx) {
  if (!canvas || !ctx) return;
  const ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.floor(innerWidth * ratio);
  canvas.height = Math.floor(innerHeight * ratio);
  canvas.style.width = `${innerWidth}px`;
  canvas.style.height = `${innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function drawWave() {
  if (!waveCtx || reduced) return;
  waveTick += .009;
  waveCtx.clearRect(0, 0, innerWidth, innerHeight);

  const plumeBaseY = innerHeight * .72 + (pointer.y - .5) * 38;
  const plumePoint = (progress, plume) => {
    const x = -120 + progress * (innerWidth + 280);
    const arc = Math.pow(progress, 1.45) * innerHeight * .48;
    const flutter = Math.sin(progress * 8 + waveTick * (1.1 + plume * .18)) * (14 - plume * 3);
    const y = plumeBaseY - arc + flutter + plume * 28;
    return { x, y };
  };

  for (let plume = 0; plume < 3; plume += 1) {
    waveCtx.beginPath();
    for (let x = -120; x <= innerWidth + 160; x += 16) {
      const progress = (x + 120) / (innerWidth + 280);
      const y = plumePoint(progress, plume).y;
      if (x === -120) waveCtx.moveTo(x, y);
      else waveCtx.lineTo(x, y);
    }
    const plumeGradient = waveCtx.createLinearGradient(0, 0, innerWidth, 0);
    plumeGradient.addColorStop(0, 'rgba(11,84,255,0)');
    plumeGradient.addColorStop(.28, plume === 0 ? 'rgba(11,84,255,.08)' : 'rgba(189,252,255,.05)');
    plumeGradient.addColorStop(.58, plume === 1 ? 'rgba(255,217,106,.11)' : 'rgba(189,252,255,.06)');
    plumeGradient.addColorStop(.78, plume === 2 ? 'rgba(255,106,0,.13)' : 'rgba(255,159,28,.08)');
    plumeGradient.addColorStop(1, 'rgba(255,106,0,0)');
    waveCtx.strokeStyle = plumeGradient;
    waveCtx.lineWidth = 32 - plume * 10;
    waveCtx.shadowBlur = 28;
    waveCtx.shadowColor = plume === 0 ? 'rgba(11,84,255,.24)' : 'rgba(255,106,0,.18)';
    waveCtx.stroke();
  }
  waveCtx.shadowBlur = 0;

  const particleCount = Math.min(180, Math.floor(innerWidth / 8));
  for (let i = 0; i < particleCount; i += 1) {
    const seed = i * 12.9898;
    const progress = ((i / particleCount) + (Math.sin(seed) * .012) + (waveTick * .012)) % 1;
    if (progress < .12 || progress > .92) continue;
    const plume = i % 3;
    const point = plumePoint(progress, plume);
    const spread = 10 + plume * 6 + Math.sin(seed * 1.7 + waveTick) * 5;
    const px = point.x + Math.sin(seed + waveTick * 1.7) * spread;
    const py = point.y + Math.cos(seed * 1.3 - waveTick) * spread * 1.5;
    const alpha = (plume === 0 ? .045 : plume === 1 ? .06 : .075) * (1 - Math.abs(progress - .58));
    waveCtx.beginPath();
    waveCtx.arc(px, py, plume === 2 ? .9 : .7, 0, Math.PI * 2);
    waveCtx.fillStyle = plume === 0
      ? `rgba(59,117,255,${alpha})`
      : plume === 1
        ? `rgba(189,252,255,${alpha})`
        : `rgba(255,159,28,${alpha})`;
    waveCtx.fill();
  }

  for (let band = 0; band < 5; band += 1) {
    const yBase = innerHeight * (.12 + band * .16) + (pointer.y - .5) * 34;
    waveCtx.beginPath();
    for (let x = -70; x <= innerWidth + 70; x += 12) {
      const pulse = Math.sin(x * .006 + waveTick * 1.7 + band * .8 + pointer.x) * (26 - band * 1.8);
      const micro = Math.sin(x * .019 - waveTick * 1.4 + band) * 7;
      const y = yBase + pulse + micro;
      if (x === -70) waveCtx.moveTo(x, y);
      else waveCtx.lineTo(x, y);
    }
    const gradient = waveCtx.createLinearGradient(0, 0, innerWidth, 0);
    gradient.addColorStop(0, 'rgba(255,106,0,0)');
    gradient.addColorStop(.35, `rgba(255,159,28,${.1 - band * .012})`);
    gradient.addColorStop(.55, `rgba(189,252,255,${.06 - band * .005})`);
    gradient.addColorStop(.72, `rgba(11,84,255,${.05 - band * .004})`);
    gradient.addColorStop(1, 'rgba(255,106,0,0)');
    waveCtx.strokeStyle = gradient;
    waveCtx.lineWidth = band === 0 ? 1.3 : 1;
    waveCtx.stroke();
  }
  requestAnimationFrame(drawWave);
}

resizeCanvas(waveCanvas, waveCtx);
addEventListener('resize', () => resizeCanvas(waveCanvas, waveCtx));
drawWave();

const introLayer = document.getElementById('introLayer');
const introCanvas = document.getElementById('introCanvas');
const introCtx = introCanvas?.getContext('2d');
const introSkip = document.getElementById('introSkip');
const forceIntro = new URLSearchParams(location.search).has('intro');
const shouldPlayIntro = !reduced && (forceIntro || !localStorage.getItem('gw-intro-seen'));
const introState = { w: 0, h: 0, t: 0, impact: 0, zoom: 0, fade: 1, drop: 0, particles: [] };

function resizeIntro() {
  if (!introCanvas || !introCtx) return;
  introState.w = innerWidth;
  introState.h = innerHeight;
  resizeCanvas(introCanvas, introCtx);
  buildIntroParticles();
}

function buildIntroParticles() {
  const cols = Math.min(96, Math.floor(introState.w / 17));
  const rows = Math.min(36, Math.floor(introState.h / 22));
  introState.particles = [];
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      introState.particles.push({
        x: (x + .5) * introState.w / cols,
        y: introState.h * .58 + (y - rows / 2) * 10 + Math.sin(x * .7) * 4,
        a: .16 + Math.random() * .24
      });
    }
  }
}

function drawIntro() {
  if (!introCtx || !introLayer || introLayer.classList.contains('is-hidden')) return;
  const w = introState.w;
  const h = introState.h;
  const cx = w * .52;
  const cy = h * .58;
  introState.t += .016;
  introCtx.clearRect(0, 0, w, h);
  introCtx.save();
  introCtx.globalAlpha = introState.fade;
  introCtx.translate(cx, cy);
  introCtx.scale(1 + introState.zoom * .85, 1 + introState.zoom * .85);
  introCtx.translate(-cx, -cy);
  introCtx.fillStyle = '#050505';
  introCtx.fillRect(0, 0, w, h);

  introState.particles.forEach((p) => {
    const d = Math.hypot(p.x - cx, p.y - cy);
    const envelope = Math.max(0, 1 - Math.abs(d - introState.impact * 540) / 190);
    const lift = Math.sin(d * .038 - introState.impact * 9) * 28 * envelope * introState.impact;
    introCtx.globalAlpha = p.a * introState.fade;
    introCtx.beginPath();
    introCtx.arc(p.x, p.y + lift, 1.05, 0, Math.PI * 2);
    introCtx.fillStyle = 'rgba(255,217,106,.74)';
    introCtx.fill();
  });

  introCtx.globalAlpha = introState.fade;
  for (let i = 0; i < 4; i += 1) {
    const r = Math.max(0, introState.impact * 640 - i * 92);
    if (!r) continue;
    introCtx.beginPath();
    introCtx.arc(cx, cy, r, 0, Math.PI * 2);
    introCtx.strokeStyle = i % 2 === 0
      ? `rgba(255,159,28,${Math.max(0, .34 - i * .06 - introState.impact * .18)})`
      : `rgba(11,84,255,${Math.max(0, .22 - i * .04 - introState.impact * .12)})`;
    introCtx.lineWidth = 1.3 + i * .25;
    introCtx.stroke();
  }

  const waveY = cy + Math.sin(introState.t) * 8;
  introCtx.beginPath();
  for (let x = -80; x < w + 80; x += 12) {
    const y = waveY + Math.sin(x * .009 + introState.t * 1.7) * 30 * introState.impact;
    if (x === -80) introCtx.moveTo(x, y);
    else introCtx.lineTo(x, y);
  }
  const gradient = introCtx.createLinearGradient(0, 0, w, 0);
  gradient.addColorStop(0, 'rgba(11,84,255,0)');
  gradient.addColorStop(.24, 'rgba(11,84,255,.5)');
  gradient.addColorStop(.48, 'rgba(189,252,255,.72)');
  gradient.addColorStop(.66, 'rgba(255,217,106,.82)');
  gradient.addColorStop(.84, 'rgba(255,106,0,.72)');
  gradient.addColorStop(1, 'rgba(255,106,0,0)');
  introCtx.strokeStyle = gradient;
  introCtx.lineWidth = 2 + introState.zoom * 5;
  introCtx.shadowBlur = 28;
  introCtx.shadowColor = 'rgba(255,106,0,.58)';
  introCtx.stroke();

  const dropX = cx - 90 + introState.drop * 90;
  const dropY = -80 + introState.drop * (cy + 80);
  if (introState.drop < 1) {
    introCtx.shadowBlur = 24;
    introCtx.globalAlpha = .95 * introState.fade;
    introCtx.beginPath();
    introCtx.arc(dropX, dropY, 5 + introState.drop * 2, 0, Math.PI * 2);
    introCtx.fillStyle = '#ffd96a';
    introCtx.fill();
  }
  introCtx.restore();
  requestAnimationFrame(drawIntro);
}

function startHeroIntro() {
  if (!window.gsap) {
    document.querySelectorAll('.site-header,.hero .reveal').forEach((el) => { el.style.visibility = 'visible'; });
    return;
  }
  gsap.set('.site-header,.hero .reveal', { autoAlpha: 0, y: 24 });
  gsap.timeline({ defaults: { duration: .75, ease: 'power3.out' } })
    .to('.site-header', { autoAlpha: 1, y: 0, duration: .55 })
    .to('.hero .reveal', { autoAlpha: 1, y: 0, stagger: .12 }, '<.1')
    .from('.orbit-line', { x: -44, autoAlpha: 0, stagger: .08 }, '<.1')
    .from('.orbit-node,.signal-dot', { scale: 0, transformOrigin: 'center', autoAlpha: 0, stagger: .08 }, '<.25');
}

function finishIntro() {
  if (!introLayer) return;
  localStorage.setItem('gw-intro-seen', '1');
  scrollTo(0, 0);
  document.body.classList.remove('intro-active');
  if (!window.gsap) {
    introLayer.classList.add('is-hidden');
    startHeroIntro();
    return;
  }
  gsap.set('#siteShell', { autoAlpha: 0 });
  gsap.to('#siteShell', { autoAlpha: 1, duration: .55, ease: 'power2.out' });
  gsap.to(introLayer, {
    autoAlpha: 0,
    duration: .72,
    ease: 'power2.out',
    onComplete: () => introLayer.classList.add('is-hidden')
  });
  startHeroIntro();
}

function startIntro() {
  if (!introLayer) {
    startHeroIntro();
    return;
  }
  if (!shouldPlayIntro || !window.gsap) {
    introLayer.classList.add('is-hidden');
    document.body.classList.remove('intro-active');
    if (window.gsap) gsap.set('#siteShell', { autoAlpha: 1 });
    startHeroIntro();
    return;
  }
  document.body.classList.add('intro-active');
  resizeIntro();
  drawIntro();
  gsap.timeline({ defaults: { ease: 'power3.inOut' } })
    .to(introState, { drop: 1, duration: 1.05, ease: 'power2.in' }, 0)
    .to(introState, { impact: 1, duration: 1.8, ease: 'power3.out' }, .95)
    .to(introState, { zoom: 1, duration: 1.35, ease: 'power2.inOut' }, 2)
    .to(introState, { fade: 0, duration: .6, ease: 'power2.out', onComplete: finishIntro }, 2.95);
}

introSkip?.addEventListener('click', finishIntro);
addEventListener('resize', resizeIntro);

function setupMotion() {
  if (!window.gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (window.ScrollToPlugin) gsap.registerPlugin(ScrollToPlugin);

  gsap.set('.reveal', { autoAlpha: 0, y: 26 });

  if (window.ScrollTrigger) {
    const generalReveals = gsap.utils.toArray('.reveal').filter((el) => !el.closest('.hero'));
    ScrollTrigger.batch(generalReveals, {
      start: 'top 88%',
      once: true,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: .07,
        duration: .75,
        ease: 'power3.out',
        overwrite: true
      })
    });

    ScrollTrigger.batch('.map-node:not(.reveal)', {
      start: 'top 86%',
      once: true,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        stagger: .08,
        duration: .75,
        ease: 'power3.out',
        overwrite: true
      })
    });

    gsap.to('.flow-path', {
      strokeDashoffset: -220,
      ease: 'none',
      scrollTrigger: {
        trigger: '.harness-map',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    ScrollTrigger.create({
      trigger: '.harness-map',
      start: 'top 70%',
      once: true,
      onEnter: () => gsap.fromTo('.map-core', { scale: .82, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: .8, ease: 'back.out(1.6)' })
    });
  }

  if (!reduced) {
    gsap.to('.orbit-line.main', { x: 18, y: -5, duration: 4.8, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to('.orbit-line.sub,.orbit-line.hair', { x: -14, y: 7, duration: 5.6, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: .2 });
    gsap.to('.signal-dot', { x: 520, y: -54, duration: 4.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
}

function setupCursor() {
  const ring = document.getElementById('cursorRing');
  const soft = document.getElementById('cursorSoft');
  if (!window.gsap || reduced || !ring || !soft) return;

  const ringX = gsap.quickTo(ring, 'x', { duration: .34, ease: 'power3' });
  const ringY = gsap.quickTo(ring, 'y', { duration: .34, ease: 'power3' });
  const softX = gsap.quickTo(soft, 'x', { duration: .62, ease: 'power3' });
  const softY = gsap.quickTo(soft, 'y', { duration: .62, ease: 'power3' });

  addEventListener('pointermove', (event) => {
    pointer = { x: event.clientX / innerWidth, y: event.clientY / innerHeight };
    ringX(event.clientX);
    ringY(event.clientY);
    softX(event.clientX);
    softY(event.clientY);
  });

  document.querySelectorAll('a,button,.workflow-card,.map-node,.work-row').forEach((el) => {
    el.addEventListener('mouseenter', () => gsap.to(ring, { scale: 1.9, opacity: 1, duration: .2, overwrite: true }));
    el.addEventListener('mouseleave', () => gsap.to(ring, { scale: 1, opacity: .72, duration: .2, overwrite: true }));
  });
}

function setupNav() {
  const map = { home: '#top', works: '#works', harness: '#harness', knowledge: '#knowledge', contact: '#contact' };
  const routeLinks = document.querySelectorAll('a[data-route]');

  function setActive(route) {
    routeLinks.forEach((link) => link.classList.toggle('active', link.dataset.route === route));
  }

  routeLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const route = link.dataset.route;
      const selector = map[route];
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;
      event.preventDefault();
      setActive(route);
      if (window.gsap && window.ScrollToPlugin && !reduced) {
        gsap.to(window, { duration: .9, scrollTo: { y: target, offsetY: 92 }, ease: 'power3.inOut' });
      } else {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
      }
      history.replaceState({ route }, '', selector);
    });
  });

  if (window.ScrollTrigger) {
    Object.entries(map).forEach(([route, selector]) => {
      const target = document.querySelector(selector);
      if (!target) return;
      ScrollTrigger.create({
        trigger: target,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => { if (self.isActive) setActive(route); }
      });
    });
  }
}

setupMotion();
setupCursor();
setupNav();
startIntro();
