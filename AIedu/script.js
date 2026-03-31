const curriculum = {
  beginner: {
    title: "初級コース",
    description: "AIの基本概念、生成AIの使い方、プロンプトの考え方、安全な活用方法までを、業務イメージと一緒に学ぶ入門プログラムです。",
    audience: "AIに初めて触れる方、業務での使い方をイメージしたい方",
    goal: "AIの基本を理解し、簡単な生成AI活用を自力で試せる状態になる",
    sessions: [
      {
        title: "AIとは何かを知る",
        summary: "AI、機械学習、生成AIの違いをやさしく整理します。",
        topic: "AIの種類と身近な活用事例",
        goal: "日常や業務の中でAIが使われる場面を説明できる"
      },
      {
        title: "生成AIの基本操作",
        summary: "チャット型AIの基本的な使い方と質問の仕方を学びます。",
        topic: "入力方法、会話の流れ、回答の見方",
        goal: "生成AIに対して簡単な依頼を出せる"
      },
      {
        title: "良いプロンプトの形",
        summary: "欲しい答えを引き出すための依頼文の作り方を扱います。",
        topic: "目的、条件、出力形式の伝え方",
        goal: "短くても意図が伝わるプロンプトを書ける"
      },
      {
        title: "文章作成を試す",
        summary: "メール、議事録、要約など文章作成の補助に使います。",
        topic: "文章生成とリライト",
        goal: "文章作成をAIに部分的に任せられる"
      },
      {
        title: "アイデア出しに使う",
        summary: "企画案や改善案を広げるための使い方を体験します。",
        topic: "ブレインストーミング支援",
        goal: "AIから複数の視点を引き出せる"
      },
      {
        title: "情報整理と要約",
        summary: "長い文章や複数情報を整理する方法を確認します。",
        topic: "要点抽出、箇条書き化、比較整理",
        goal: "情報の読み取り負荷を下げられる"
      },
      {
        title: "注意点を学ぶ",
        summary: "誤情報、機密情報、著作権などの基本的な注意点を学びます。",
        topic: "AI利用時のリスクとマナー",
        goal: "安全にAIを使うための判断ができる"
      },
      {
        title: "仕事での活用場面",
        summary: "日々の定型業務にどう組み込めるかを考えます。",
        topic: "メール、資料作成、調査補助への適用",
        goal: "自分の業務に合う活用案を1つ以上挙げられる"
      },
      {
        title: "簡単な改善サイクル",
        summary: "試した結果を見てプロンプトを改善する流れを身につけます。",
        topic: "試行、評価、改善の繰り返し",
        goal: "一度で終わらずAI出力を改善できる"
      },
      {
        title: "初級のまとめ",
        summary: "ここまでの学びを振り返り、明日からの使い方を定めます。",
        topic: "振り返りと個人活用プラン作成",
        goal: "自分向けのAI活用スタートプランを作れる"
      }
    ]
  },
  advanced: {
    title: "上級コース",
    description: "AIを業務改善や企画推進に組み込む視点で、評価、設計、運用ルール、チーム展開まで扱う実践プログラムです。",
    audience: "AIをすでに試したことがあり、業務活用を深めたい方",
    goal: "AI活用を個人レベルからチーム・業務レベルへ広げる設計ができる",
    sessions: [
      {
        title: "活用テーマの選定",
        summary: "成果が出やすい業務課題を見つけ、AI適用候補を整理します。",
        topic: "課題抽出と優先順位付け",
        goal: "AIで改善すべきテーマを具体化できる"
      },
      {
        title: "高度なプロンプト設計",
        summary: "役割設定、制約条件、ステップ分解を使った精度向上を学びます。",
        topic: "構造化プロンプト設計",
        goal: "複雑な依頼でも安定した出力を引き出せる"
      },
      {
        title: "出力品質の評価",
        summary: "AIの回答を評価する観点と確認フローを整えます。",
        topic: "正確性、再現性、実用性の確認",
        goal: "AI出力の良し悪しを基準付きで判断できる"
      },
      {
        title: "業務フローへの組込み",
        summary: "既存の仕事の流れにAIを入れる際の分担を設計します。",
        topic: "人とAIの役割分担",
        goal: "AIを無理なく組み込んだ業務フローを描ける"
      },
      {
        title: "会議と資料の高度活用",
        summary: "議事録整理、論点抽出、提案資料のたたき台作成を扱います。",
        topic: "会議支援と資料作成効率化",
        goal: "会議後作業を大幅に短縮する設計ができる"
      },
      {
        title: "ナレッジ整備",
        summary: "社内知見やルールをAIで活かしやすい形に整理します。",
        topic: "FAQ、手順、ナレッジの構造化",
        goal: "AIが扱いやすい情報資産の形を理解する"
      },
      {
        title: "リスク管理の実践",
        summary: "利用ルール、確認責任、情報管理の設計を深めます。",
        topic: "ガバナンスと運用ルール整備",
        goal: "安全性を担保した運用案を作れる"
      },
      {
        title: "チーム展開の進め方",
        summary: "個人活用をチームに広げるための導入手順を考えます。",
        topic: "教育、共有、定着化の進め方",
        goal: "小さく始めて広げる導入計画を作れる"
      },
      {
        title: "成果の見える化",
        summary: "時間削減や品質向上などの効果測定方法を整理します。",
        topic: "KPI設定と効果検証",
        goal: "AI活用の成果を説明できる"
      },
      {
        title: "上級のまとめ",
        summary: "実践計画を最終整理し、次の実装アクションへつなげます。",
        topic: "運用計画と実行ロードマップ",
        goal: "現場導入に向けた次の一歩を明確にできる"
      }
    ]
  }
};

const storageKey = "ai-education-progress";
const defaultProgress = {
  beginner: Array(curriculum.beginner.sessions.length).fill(false),
  advanced: Array(curriculum.advanced.sessions.length).fill(false)
};

let activeLevel = "beginner";
let progress = loadProgress();

const elements = {
  tabs: document.querySelectorAll(".tab-button"),
  heroStats: document.getElementById("hero-stats"),
  courseTitle: document.getElementById("course-title"),
  courseDescription: document.getElementById("course-description"),
  courseAudience: document.getElementById("course-audience"),
  courseGoal: document.getElementById("course-goal"),
  progressLabel: document.getElementById("progress-label"),
  progressCount: document.getElementById("progress-count"),
  progressFill: document.getElementById("progress-fill"),
  sessionGrid: document.getElementById("session-grid"),
  sessionTemplate: document.getElementById("session-card-template"),
  resetButton: document.getElementById("reset-progress")
};

renderHeroStats();
renderCourse();
bindEvents();

function bindEvents() {
  elements.tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activeLevel = tab.dataset.level;
      renderCourse();
    });
  });

  elements.resetButton.addEventListener("click", () => {
    progress = structuredClone(defaultProgress);
    persistProgress();
    renderHeroStats();
    renderCourse();
  });
}

function renderHeroStats() {
  const totalSessions = curriculum.beginner.sessions.length + curriculum.advanced.sessions.length;
  const completedSessions = [...progress.beginner, ...progress.advanced].filter(Boolean).length;
  const totalMinutes = totalSessions * 30;
  const completedMinutes = completedSessions * 30;
  const stats = [
    { value: `${totalSessions}回`, label: "総セッション数" },
    { value: `${completedMinutes} / ${totalMinutes}分`, label: "学習済み時間" },
    { value: `${Math.round((completedSessions / totalSessions) * 100)}%`, label: "全体進捗" }
  ];

  elements.heroStats.innerHTML = "";
  stats.forEach((stat) => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `<strong>${stat.value}</strong><span>${stat.label}</span>`;
    elements.heroStats.appendChild(card);
  });
}

function renderCourse() {
  const course = curriculum[activeLevel];
  const completedCount = progress[activeLevel].filter(Boolean).length;
  const percent = Math.round((completedCount / course.sessions.length) * 100);

  elements.tabs.forEach((tab) => {
    const selected = tab.dataset.level === activeLevel;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });

  elements.courseTitle.textContent = course.title;
  elements.courseDescription.textContent = course.description;
  elements.courseAudience.textContent = course.audience;
  elements.courseGoal.textContent = course.goal;
  elements.progressLabel.textContent = `進捗 ${percent}%`;
  elements.progressCount.textContent = `${completedCount} / ${course.sessions.length} 回完了`;
  elements.progressFill.style.width = `${percent}%`;

  elements.sessionGrid.innerHTML = "";
  course.sessions.forEach((session, index) => {
    const fragment = elements.sessionTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".session-card");
    const badge = fragment.querySelector(".session-badge");
    const checkbox = fragment.querySelector(".session-check");

    badge.textContent = `${activeLevel === "beginner" ? "BEGINNER" : "ADVANCED"} ${String(index + 1).padStart(2, "0")}`;
    fragment.querySelector(".session-title").textContent = session.title;
    fragment.querySelector(".session-summary").textContent = session.summary;
    fragment.querySelector(".session-topic").textContent = session.topic;
    fragment.querySelector(".session-goal").textContent = session.goal;

    checkbox.checked = progress[activeLevel][index];
    card.classList.toggle("is-complete", checkbox.checked);
    card.style.animationDelay = `${index * 35}ms`;

    checkbox.addEventListener("change", () => {
      progress[activeLevel][index] = checkbox.checked;
      persistProgress();
      card.classList.toggle("is-complete", checkbox.checked);
      renderHeroStats();
      updateProgressOnly();
    });

    elements.sessionGrid.appendChild(fragment);
  });
}

function updateProgressOnly() {
  const course = curriculum[activeLevel];
  const completedCount = progress[activeLevel].filter(Boolean).length;
  const percent = Math.round((completedCount / course.sessions.length) * 100);
  elements.progressLabel.textContent = `進捗 ${percent}%`;
  elements.progressCount.textContent = `${completedCount} / ${course.sessions.length} 回完了`;
  elements.progressFill.style.width = `${percent}%`;
}

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved) {
      return structuredClone(defaultProgress);
    }

    return {
      beginner: normalizeProgress(saved.beginner, curriculum.beginner.sessions.length),
      advanced: normalizeProgress(saved.advanced, curriculum.advanced.sessions.length)
    };
  } catch {
    return structuredClone(defaultProgress);
  }
}

function normalizeProgress(value, expectedLength) {
  if (!Array.isArray(value)) {
    return Array(expectedLength).fill(false);
  }

  return Array.from({ length: expectedLength }, (_, index) => Boolean(value[index]));
}

function persistProgress() {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}