/* ============================================================
   FATIMAH'S LEARNING HUB — APP LOGIC
   You should not need to edit this file to add content —
   see data.js for videos, facts, and quiz questions.
   ============================================================ */

const STORAGE_KEY = "flh_progress_v2";

const state = {
  name: "",
  level: null,          // "younger" | "older" — chosen at the level gate
  subjectKey: null,      // current subject key, or "professions"
  topicIndex: null,
  quiz: { pool: [], current: 0, answers: [] },
};

/* ---------- Storage helpers ---------- */
function loadProgress() {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : {}; }
  catch (e) { return {}; }
}
function saveProgress(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
}
function progressKey(subjectKey, level, title) {
  return level ? `${subjectKey}:${level}:${title}` : `${subjectKey}:${title}`;
}
function recordScore(subjectKey, level, title, score, total) {
  const all = loadProgress();
  all[state.name] = all[state.name] || {};
  all[state.name][progressKey(subjectKey, level, title)] = { score, total, date: new Date().toISOString() };
  saveProgress(all);
}
function getSavedResult(subjectKey, level, title) {
  const all = loadProgress();
  const forName = all[state.name] || {};
  return forName[progressKey(subjectKey, level, title)] || null;
}

/* ---------- Total topic counts (for the overall progress bar) ---------- */
function totalTopicCount() {
  let n = 0;
  APP_DATA.subjects.forEach(s => { n += s.levels.younger.length + s.levels.older.length; });
  n += APP_DATA.professions.chapters.length;
  return n;
}
function completedTopicCount() {
  const all = loadProgress();
  const forName = all[state.name] || {};
  return Object.keys(forName).length;
}

/* ---------- Helpers ---------- */
function getSubject(key) { return APP_DATA.subjects.find(s => s.key === key); }
function getTopics(subjectKey, level) { return getSubject(subjectKey).levels[level]; }
function el(html) { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; }
function escapeHtml(str) { const d = document.createElement("div"); d.textContent = str; return d.innerHTML; }
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
/* Shuffle a question's options while keeping track of the (new) correct index */
function shuffleQuestion(q) {
  const paired = q.options.map((opt, i) => ({ opt, correct: i === q.answer }));
  const shuffled = shuffle(paired);
  return {
    q: q.q,
    explanation: q.explanation,
    options: shuffled.map(p => p.opt),
    answer: shuffled.findIndex(p => p.correct)
  };
}


/* ---------- Sound + read-aloud ---------- */
let soundOn = (() => { try { return localStorage.getItem("flh_sound") !== "off"; } catch (e) { return true; } })();
let audioCtx = null;
function playSound(kind) {
  if (!soundOn) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const seqs = { tap: [[520, .06]], win: [[523, .12], [659, .12], [784, .22]], try: [[392, .15], [330, .22]] };
    let t = audioCtx.currentTime;
    seqs[kind].forEach(([freq, dur]) => {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = "sine"; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.15, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t); o.stop(t + dur); t += dur;
    });
  } catch (e) {}
}
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/[\u{1F000}-\u{1FFFF}\u2600-\u27BF]/gu, ""));
  u.rate = 0.9; u.lang = "en-US";
  window.speechSynthesis.speak(u);
}
function speakBtn(getText) {
  const b = el(`<button class="speak-btn" title="Read to me" aria-label="Read to me">🔊</button>`);
  b.addEventListener("click", (e) => { e.stopPropagation(); speak(getText()); });
  return b;
}
function updateSoundBtn() {
  const b = document.getElementById("soundBtn");
  if (b) b.textContent = soundOn ? "🔔" : "🔕";
}

/* ---------- Fact of the day ---------- */
function allFacts() {
  const list = [];
  APP_DATA.subjects.forEach(s => ["younger", "older"].forEach(l => s.levels[l].forEach(t => t.fact && list.push(t))));
  APP_DATA.professions.chapters.forEach(t => t.fact && list.push(t));
  return list;
}
function dailyFactCard() {
  const facts = allFacts();
  const day = Math.floor(Date.now() / 86400000);
  const t = facts[day % facts.length];
  const card = el(`
    <div class="daily-card">
      <span class="fact-icon">${t.icon || "💡"}</span>
      <div><strong>Fact of the day</strong><p>${t.fact}</p></div>
    </div>
  `);
  card.appendChild(speakBtn(() => t.fact));
  return card;
}

/* ---------- Certificate ---------- */
function goCertificate(subjectName, backFn) {
  clearMain();
  const today = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  main.appendChild(el(`
    <div class="certificate pop-in">
      <div class="cert-emoji">🏆</div>
      <h2>Certificate of Achievement</h2>
      <p>This is proudly given to</p>
      <div class="cert-name">${escapeHtml(state.name)}</div>
      <p>for completing every topic in</p>
      <div class="cert-subject">${escapeHtml(subjectName)}</div>
      <p class="cert-date">${today} &nbsp;•&nbsp; Fatimah's Learning Hub</p>
      <div class="cert-stars">⭐⭐⭐⭐⭐</div>
    </div>
  `));
  const actions = el(`<div class="result-actions no-print" style="margin-top:18px;"></div>`);
  const printBtn = el(`<button class="btn btn-primary">🖨️ Print certificate</button>`);
  printBtn.addEventListener("click", () => window.print());
  const backBtn = el(`<button class="btn btn-secondary">Back</button>`);
  backBtn.addEventListener("click", backFn);
  actions.appendChild(printBtn); actions.appendChild(backBtn);
  main.appendChild(actions);
  playSound("win");
  launchConfetti(main.querySelector(".certificate"));
}
function certificateButton(subjectName, backFn) {
  const b = el(`<button class="btn btn-primary cert-btn">🎓 Get your certificate!</button>`);
  b.addEventListener("click", () => goCertificate(subjectName, backFn));
  return b;
}

/* ---------- My Scores (grown-up corner) ---------- */
function goScores() {
  clearMain();
  main.appendChild(crumb([{ label: "🏠 Home", onClick: goHome }, { label: "📊 My Scores" }]));
  main.appendChild(el(`<h2>📊 ${escapeHtml(state.name)}'s Scores</h2>`));
  main.appendChild(el(`<p class="topic-desc">A summary for parents and teachers. Scores are saved on this device only.</p>`));
  const saved = (loadProgress()[state.name]) || {};
  const rows = [];
  const add = (label, key) => {
    const r = saved[key];
    rows.push(`<tr><td>${label}</td><td>${r ? `${r.score}/${r.total}` : "—"}</td><td>${r ? new Date(r.date).toLocaleDateString() : ""}</td></tr>`);
  };
  APP_DATA.subjects.forEach(s => ["younger", "older"].forEach(l => s.levels[l].forEach(t =>
    add(`${s.emoji} ${s.name} (${APP_DATA.levels[l].label}): ${t.title}`, progressKey(s.key, l, t.title)))));
  APP_DATA.professions.chapters.forEach(c => add(`${APP_DATA.professions.emoji} Professions: ${c.title}`, progressKey("professions", null, c.title)));
  main.appendChild(renderProgressBar("Topics completed", completedTopicCount(), totalTopicCount()));
  main.appendChild(el(`<div class="scores-wrap"><table class="scores"><thead><tr><th>Topic</th><th>Best/last score</th><th>Date</th></tr></thead><tbody>${rows.join("")}</tbody></table></div>`));
  const reset = el(`<button class="btn btn-secondary" style="margin-top:16px;">Clear ${escapeHtml(state.name)}'s progress</button>`);
  reset.addEventListener("click", () => {
    if (confirm("Clear all saved scores for " + state.name + "? This can't be undone.")) {
      const all = loadProgress(); delete all[state.name]; saveProgress(all); goScores();
    }
  });
  main.appendChild(reset);
}

/* ---------- Gate (name entry) ---------- */
const gate = document.getElementById("gate");
const levelGate = document.getElementById("levelGate");
const app = document.getElementById("app");
const nameInput = document.getElementById("nameInput");
const gateGo = document.getElementById("gateGo");

gateGo.addEventListener("click", () => {
  const val = nameInput.value.trim();
  if (!val) {
    nameInput.style.borderColor = "#EF476F";
    nameInput.placeholder = "Please type your name first!";
    nameInput.focus();
    return;
  }
  state.name = val;
  gate.classList.add("hidden");
  showLevelGate();
});
nameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") gateGo.click(); });

/* ---------- Level gate (must choose before subjects show) ---------- */
function showLevelGate() {
  document.getElementById("levelGreeting").textContent = `Hi, ${state.name}! 👋`;
  const wrap = document.getElementById("levelGateOptions");
  wrap.innerHTML = "";
  Object.values(APP_DATA.levels).forEach(lv => {
    const card = el(`
      <div class="levelgate-option" style="border-color:${lv.color}">
        <div class="emoji">${lv.emoji}</div>
        <h3>${lv.label}</h3>
        <p>${lv.range}</p>
      </div>
    `);
    card.addEventListener("click", () => {
      state.level = lv.key;
      levelGate.classList.add("hidden");
      enterApp();
    });
    wrap.appendChild(card);
  });
  levelGate.classList.remove("hidden");
}

function enterApp() {
  document.getElementById("greetName").textContent = `Hi, ${state.name}! 👋`;
  app.classList.remove("hidden");
  buildNavMenu();
  updateLevelPill();
  goHome();
}

/* ---------- Nav menu ---------- */
const navTrigger = document.getElementById("navTrigger");
const navMenu = document.getElementById("navMenu");
const subjectnav = document.querySelector(".subjectnav");

function buildNavMenu() {
  navMenu.innerHTML = "";
  APP_DATA.subjects.forEach(subj => {
    const item = el(`<button class="navmenu-item"><span>${subj.emoji}</span><span>${subj.name}</span></button>`);
    item.addEventListener("click", () => { subjectnav.classList.remove("open"); goSubject(subj.key); });
    navMenu.appendChild(item);
  });
  const profs = APP_DATA.professions;
  const profItem = el(`<button class="navmenu-item"><span>${profs.emoji}</span><span>${profs.name}</span></button>`);
  profItem.addEventListener("click", () => { subjectnav.classList.remove("open"); goProfessions(); });
  navMenu.appendChild(profItem);
  const scoreItem = el(`<button class="navmenu-item"><span>📊</span><span>My Scores</span></button>`);
  scoreItem.addEventListener("click", () => { subjectnav.classList.remove("open"); goScores(); });
  navMenu.appendChild(scoreItem);
  const playItem = el(`<button class="navmenu-item"><span>🎮</span><span>Play</span></button>`);
  playItem.addEventListener("click", () => { subjectnav.classList.remove("open"); goPlay(); });
  navMenu.appendChild(playItem);
  const badgeItem = el(`<button class="navmenu-item"><span>🏅</span><span>My Badges</span></button>`);
  badgeItem.addEventListener("click", () => { subjectnav.classList.remove("open"); goBadges(); });
  navMenu.appendChild(badgeItem);
}
navTrigger.addEventListener("click", (e) => { e.stopPropagation(); subjectnav.classList.toggle("open"); });
document.addEventListener("click", () => subjectnav.classList.remove("open"));
document.getElementById("brandHome").addEventListener("click", goHome);
const soundBtnEl = document.getElementById("soundBtn");
soundBtnEl.addEventListener("click", () => {
  soundOn = !soundOn;
  try { localStorage.setItem("flh_sound", soundOn ? "on" : "off"); } catch (e) {}
  updateSoundBtn();
  if (soundOn) playSound("tap"); else if ("speechSynthesis" in window) window.speechSynthesis.cancel();
});
updateSoundBtn();

/* ---------- Level pill (click to switch group) ---------- */
function updateLevelPill() {
  const pill = document.getElementById("levelPill");
  pill.textContent = APP_DATA.levels[state.level].label + " ✎";
}
document.getElementById("levelPill").addEventListener("click", () => {
  app.classList.add("hidden");
  showLevelGate();
});

/* ---------- Progress bar component ---------- */
function renderProgressBar(label, done, total, color) {
  const pct = total ? Math.round((done / total) * 100) : 0;
  return el(`
    <div class="progress-wrap">
      <div class="progress-label"><span>${label}</span><span>${done}/${total}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%; ${color ? `background:${color};` : ""}"></div></div>
    </div>
  `);
}


/* ---------- Game + badge storage ---------- */
const GAMES_KEY = "flh_games_v1";
const BADGES_SEEN_KEY = "flh_badges_seen_v1";
function loadGames() { try { return JSON.parse(localStorage.getItem(GAMES_KEY)) || {}; } catch (e) { return {}; } }
function saveGames(d) { try { localStorage.setItem(GAMES_KEY, JSON.stringify(d)); } catch (e) {} }
function recordGameResult(gameId, value) {
  const all = loadGames();
  all[state.name] = all[state.name] || {};
  const prev = all[state.name][gameId];
  all[state.name][gameId] = (prev === undefined) ? value : Math.max(prev, value);
  saveGames(all);
}
function getGameResult(gameId) { const all = loadGames(); return (all[state.name] || {})[gameId]; }

function loadBadgesSeen() { try { return JSON.parse(localStorage.getItem(BADGES_SEEN_KEY)) || {}; } catch (e) { return {}; } }
function saveBadgesSeen(d) { try { localStorage.setItem(BADGES_SEEN_KEY, JSON.stringify(d)); } catch (e) {} }

/* Works out which badges this child has earned right now, from saved progress + games */
function computeEarnedBadges() {
  const earned = new Set();
  const progress = loadProgress()[state.name] || {};
  const scores = Object.values(progress);
  if (scores.length >= 1) earned.add("starter");
  if (scores.some(r => r.score === r.total)) earned.add("perfect-score");

  const subjectBadge = { math: "math-whiz", english: "wordsmith", poems: "storyteller", islamic: "star-student" };
  APP_DATA.subjects.forEach(s => {
    ["younger", "older"].forEach(level => {
      const allDone = s.levels[level].every(t => getSavedResult(s.key, level, t.title));
      if (allDone) earned.add(subjectBadge[s.key]);
    });
  });
  const allProfsDone = APP_DATA.professions.chapters.every(c => getSavedResult("professions", null, c.title));
  if (allProfsDone) earned.add("dream-chaser");

  if (getGameResult("memoryMatch")) earned.add("memory-master");
  const pm = getGameResult("pictureMatch");
  if (pm !== undefined && pm >= Math.ceil(APP_DATA.games.pictureMatch.rounds.length * 0.75)) earned.add("picture-pro");

  return earned;
}

/* Announces any badge earned since we last told this child about it */
function celebrateBadges() {
  const earned = [...computeEarnedBadges()];
  const seenAll = loadBadgesSeen();
  const seen = seenAll[state.name] || [];
  const fresh = earned.filter(id => !seen.includes(id));
  if (fresh.length === 0) return;
  seenAll[state.name] = [...seen, ...fresh];
  saveBadgesSeen(seenAll);
  showBadgeToast(fresh);
}
function showBadgeToast(ids) {
  const badgeMap = Object.fromEntries(APP_DATA.badges.map(b => [b.id, b]));
  const overlay = el(`<div class="badge-toast-overlay"></div>`);
  ids.forEach((id, i) => {
    const b = badgeMap[id];
    if (!b) return;
    const card = el(`
      <div class="badge-toast pop-in" style="animation-delay:${i * 0.15}s">
        <div class="badge-toast-emoji">${b.emoji}</div>
        <div><strong>New badge!</strong><p>${b.name}</p></div>
      </div>
    `);
    overlay.appendChild(card);
  });
  document.body.appendChild(overlay);
  playSound("win");
  launchConfetti(overlay);
  overlay.addEventListener("click", () => overlay.remove());
  setTimeout(() => overlay.remove(), 3800);
}

function badgeShelf() {
  const earned = computeEarnedBadges();
  const wrap = el(`<div class="badge-shelf"></div>`);
  APP_DATA.badges.forEach(b => {
    const has = earned.has(b.id);
    wrap.appendChild(el(`<span class="badge-chip ${has ? "" : "locked"}" title="${b.name}: ${b.description}">${b.emoji}</span>`));
  });
  return wrap;
}

function goBadges() {
  clearMain();
  main.appendChild(crumb([{ label: "🏠 Home", onClick: goHome }, { label: "🏅 My Badges" }]));
  main.appendChild(el(`<h2>🏅 ${escapeHtml(state.name)}'s Badges</h2>`));
  main.appendChild(el(`<p class="topic-desc">Finish topics and play the games in the Play section to unlock more badges!</p>`));
  const earned = computeEarnedBadges();
  const grid = el(`<div class="badge-grid"></div>`);
  APP_DATA.badges.forEach((b, i) => {
    const has = earned.has(b.id);
    grid.appendChild(el(`
      <div class="badge-card ${has ? "earned" : "locked"}" style="animation-delay:${i * 0.05}s">
        <div class="badge-card-emoji">${has ? b.emoji : "🔒"}</div>
        <h4>${b.name}</h4>
        <p>${b.description}</p>
      </div>
    `));
  });
  main.appendChild(grid);
}

/* ---------- Play: Games hub ---------- */
function goPlay() {
  clearMain();
  main.appendChild(crumb([{ label: "🏠 Home", onClick: goHome }, { label: "🎮 Play" }]));
  main.appendChild(el(`<h2>🎮 Play &amp; Learn</h2>`));
  main.appendChild(el(`<p class="topic-desc">Quick games to practice while having fun!</p>`));
  const grid = el(`<div class="subject-bento"></div>`);
  const mm = APP_DATA.games.memoryMatch, pm = APP_DATA.games.pictureMatch;
  const card1 = el(`
    <div class="subject-card span-half" style="background:#8B5CF6;">
      <span class="emoji">${mm.emoji}</span><h3>${mm.name}</h3><p>${mm.tagline}</p>
    </div>`);
  card1.addEventListener("click", goMemoryMatch);
  const card2 = el(`
    <div class="subject-card span-half" style="background:#2A9D8F;">
      <span class="emoji">${pm.emoji}</span><h3>${pm.name}</h3><p>${pm.tagline}</p>
    </div>`);
  card2.addEventListener("click", () => goPictureMatch(0));
  grid.appendChild(card1); grid.appendChild(card2);
  main.appendChild(grid);
}

/* ---------- Game 1: Memory Match ---------- */
function goMemoryMatch() {
  clearMain();
  const cfg = APP_DATA.games.memoryMatch;
  main.appendChild(crumb([{ label: "🏠 Home", onClick: goHome }, { label: "🎮 Play", onClick: goPlay }, { label: cfg.name }]));
  main.appendChild(el(`<h2>${cfg.emoji} ${cfg.name}</h2>`));
  main.appendChild(el(`<p class="topic-desc">${cfg.tagline}</p>`));

  const deck = shuffle(cfg.pairs.concat(cfg.pairs)).map((emoji, i) => ({ id: i, emoji, matched: false }));
  let first = null, second = null, lock = false, moves = 0, matchedCount = 0;

  const moveLabel = el(`<div class="quiz-progress">Moves: <span id="mmMoves">0</span></div>`);
  main.appendChild(moveLabel);
  const board = el(`<div class="memory-board"></div>`);
  deck.forEach(card => {
    const btn = el(`<button class="memory-card" data-id="${card.id}"><span class="mc-face">${card.emoji}</span></button>`);
    btn.addEventListener("click", () => {
      if (lock || btn.classList.contains("flipped") || btn.classList.contains("matched")) return;
      btn.classList.add("flipped");
      playSound("tap");
      if (first === null) { first = { card, btn }; return; }
      second = { card, btn };
      moves++; moveLabel.querySelector("#mmMoves").textContent = moves;
      if (first.card.emoji === second.card.emoji) {
        first.btn.classList.add("matched"); second.btn.classList.add("matched");
        matchedCount += 2; first = null; second = null;
        if (matchedCount === deck.length) {
          setTimeout(() => {
            recordGameResult("memoryMatch", true);
            playSound("win");
            launchConfetti(board);
            main.appendChild(el(`<div class="daily-card pop-in"><span class="fact-icon">🎉</span><div><strong>All matched in ${moves} moves!</strong><p>Great memory, ${escapeHtml(state.name)}!</p></div></div>`));
            celebrateBadges();
          }, 300);
        }
      } else {
        lock = true;
        setTimeout(() => {
          first.btn.classList.remove("flipped"); second.btn.classList.remove("flipped");
          first = null; second = null; lock = false;
        }, 700);
      }
    });
    board.appendChild(btn);
  });
  main.appendChild(board);

  const restart = el(`<button class="btn btn-secondary" style="margin-top:16px;">🔁 New Board</button>`);
  restart.addEventListener("click", goMemoryMatch);
  main.appendChild(restart);
}

/* ---------- Game 2: Picture Match ---------- */
function goPictureMatch(round) {
  round = round || 0;
  clearMain();
  const cfg = APP_DATA.games.pictureMatch;
  main.appendChild(crumb([{ label: "🏠 Home", onClick: goHome }, { label: "🎮 Play", onClick: goPlay }, { label: cfg.name }]));

  if (round >= cfg.rounds.length) {
    const score = state.pmScore || 0;
    recordGameResult("pictureMatch", score);
    main.appendChild(el(`<h2>${cfg.emoji} ${cfg.name} — Done!</h2>`));
    const card = el(`
      <div class="result-card pop-in">
        <div class="result-emoji">${score === cfg.rounds.length ? "🏆" : "🌟"}</div>
        <div class="result-score">${score} / ${cfg.rounds.length} correct</div>
        <div class="mascot-bubble"><span class="mascot">${APP_DATA.mascot.emoji}</span><p>${APP_DATA.mascot.name} says: Nice work matching pictures!</p></div>
        <div class="result-actions"></div>
      </div>`);
    const actions = card.querySelector(".result-actions");
    const again = el(`<button class="btn btn-primary">Play Again 🔁</button>`);
    again.addEventListener("click", () => { state.pmScore = 0; goPictureMatch(0); });
    const back = el(`<button class="btn btn-secondary">Back to Play</button>`);
    back.addEventListener("click", goPlay);
    actions.appendChild(again); actions.appendChild(back);
    main.appendChild(card);
    playSound(score >= Math.ceil(cfg.rounds.length * 0.6) ? "win" : "try");
    if (score === cfg.rounds.length) launchConfetti(card);
    celebrateBadges();
    return;
  }

  if (round === 0) state.pmScore = 0;
  const r = cfg.rounds[round];
  main.appendChild(el(`<div class="quiz-progress">Round ${round + 1} of ${cfg.rounds.length}</div>`));
  main.appendChild(el(`<h2>${cfg.emoji} Which picture shows: "${r.word}"?</h2>`));
  const grid = el(`<div class="picture-grid"></div>`);
  shuffle(r.options).forEach(opt => {
    const btn = el(`<button class="picture-option">${opt}</button>`);
    btn.addEventListener("click", () => {
      const correct = opt === r.correct;
      btn.classList.add(correct ? "correct" : "incorrect");
      playSound(correct ? "win" : "try");
      if (correct) state.pmScore = (state.pmScore || 0) + 1;
      [...grid.children].forEach(c => c.disabled = true);
      setTimeout(() => goPictureMatch(round + 1), 700);
    });
    grid.appendChild(btn);
  });
  main.appendChild(grid);
}

/* ---------- Router / screens ---------- */
const main = document.getElementById("main");

/* Clears the main panel and retriggers a gentle fade-in for the new screen */
function clearMain() {
  main.innerHTML = "";
  main.classList.remove("fade-in-up");
  void main.offsetWidth; // restart the CSS animation
  main.classList.add("fade-in-up");
}

/* A small, tasteful confetti burst — used once, for a perfect quiz score */
function launchConfetti(container) {
  const pieces = ["🎉", "⭐", "🎈", "✨", "🏆"];
  for (let i = 0; i < 14; i++) {
    const span = document.createElement("span");
    span.className = "confetti-piece";
    span.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDelay = (Math.random() * 0.4) + "s";
    container.appendChild(span);
  }
  setTimeout(() => { container.querySelectorAll(".confetti-piece").forEach(p => p.remove()); }, 2200);
}

function crumb(items) {
  const bar = el(`<div class="crumbbar"></div>`);
  items.forEach((it, i) => {
    if (i > 0) bar.appendChild(el(`<span>›</span>`));
    if (it.onClick) {
      const b = el(`<button class="backbtn">${it.label}</button>`);
      b.addEventListener("click", it.onClick);
      bar.appendChild(b);
    } else {
      bar.appendChild(el(`<span>${it.label}</span>`));
    }
  });
  return bar;
}

/* Bento span pattern so the subject grid doesn't look uniform */
const BENTO_SPANS = ["span-wide", "span-narrow", "span-half", "span-half", "span-full"];

function goHome() {
  state.subjectKey = null;
  state.topicIndex = null;
  updateLevelPill();
  clearMain();

  main.appendChild(el(`
    <div class="hero">
      <h2>What would you like to explore today, ${escapeHtml(state.name)}? 🎨</h2>
      <p>You're in the <strong>${APP_DATA.levels[state.level].label}</strong> group. Pick a subject below!</p>
    </div>
  `));

  main.appendChild(el(`<div class="mascot-bubble"><span class="mascot">${APP_DATA.mascot.emoji}</span><p>${APP_DATA.mascot.name} says: Hi ${escapeHtml(state.name)}! Ready to learn something new today?</p></div>`));
  main.appendChild(dailyFactCard());
  main.appendChild(badgeShelf());
  main.appendChild(renderProgressBar("Your overall progress", completedTopicCount(), totalTopicCount()));

  const grid = el(`<div class="subject-bento"></div>`);
  const cards = [...APP_DATA.subjects, APP_DATA.professions];
  cards.forEach((subj, idx) => {
    const isProfessions = subj.key === "professions";
    const total = isProfessions ? subj.chapters.length : subj.levels[state.level].length;
    const done = isProfessions
      ? subj.chapters.filter(c => getSavedResult("professions", null, c.title)).length
      : subj.levels[state.level].filter(t => getSavedResult(subj.key, state.level, t.title)).length;
    const span = BENTO_SPANS[idx % BENTO_SPANS.length];
    const card = el(`
      <div class="subject-card ${span} done-badge" data-progress="${done}/${total}" style="background:${subj.color}; animation-delay:${idx * 0.06}s;">
        <span class="emoji">${subj.emoji}</span>
        <h3>${subj.name}</h3>
        <p>${subj.tagline}</p>
      </div>
    `);
    card.addEventListener("click", () => isProfessions ? goProfessions() : goSubject(subj.key));
    grid.appendChild(card);
  });
  main.appendChild(grid);
}

function goSubject(subjectKey) {
  state.subjectKey = subjectKey;
  state.topicIndex = null;
  const subj = getSubject(subjectKey);
  const topics = getTopics(subjectKey, state.level);
  const done = topics.filter(t => getSavedResult(subjectKey, state.level, t.title)).length;

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${subj.emoji} ${subj.name}` }
  ]));
  main.appendChild(el(`<h2>${subj.emoji} ${subj.name} — ${APP_DATA.levels[state.level].label}</h2>`));
  main.appendChild(el(`<p class="topic-desc">${subj.tagline}. Here are ${topics.length} topics to explore, one step at a time.</p>`));
  main.appendChild(renderProgressBar(`${subj.name} progress`, done, topics.length, subj.color));
  if (done === topics.length) main.appendChild(certificateButton(`${subj.name} — ${APP_DATA.levels[state.level].label}`, () => goSubject(subjectKey)));

  const list = el(`<div class="layout-${subj.layout} subject-progress"></div>`);
  topics.forEach((topic, idx) => {
    const savedResult = getSavedResult(subjectKey, state.level, topic.title);
    const badgeText = savedResult ? `✅ ${savedResult.score}/${savedResult.total}` : "▶️ Start";
    let row;
    if (subj.layout === "grid") {
      row = el(`
        <div class="tile" style="background:${subj.color}; animation-delay:${idx * 0.06}s;">
          <span class="badge">${idx + 1}</span>
          <h4>${topic.title}</h4>
          <p>${topic.blurb}</p>
          <div style="margin-top:8px;"><span class="badge">${badgeText}</span></div>
        </div>
      `);
    } else if (subj.layout === "timeline") {
      row = el(`
        <div class="timeline-item" style="animation-delay:${idx * 0.06}s;">
          <h4>${idx + 1}. ${topic.title}</h4>
          <p>${topic.blurb}</p>
          <span class="badge">${badgeText}</span>
        </div>
      `);
    } else if (subj.layout === "cards") {
      row = el(`
        <div class="big-card" style="animation-delay:${idx * 0.06}s;">
          <h4>${idx + 1}. ${topic.title}</h4>
          <p>${topic.blurb}</p>
          <span class="badge">${badgeText}</span>
        </div>
      `);
    } else {
      row = el(`
        <div class="list-row" style="animation-delay:${idx * 0.06}s;">
          <span class="cres">☪️</span>
          <div class="info">
            <h4>${idx + 1}. ${topic.title}</h4>
            <p>${topic.blurb}</p>
          </div>
          <span class="badge">${badgeText}</span>
        </div>
      `);
    }
    row.addEventListener("click", () => goTopic(subjectKey, idx));
    list.appendChild(row);
  });
  main.appendChild(list);
}

/* ---------- Professions: single reading-list view (no age split) ---------- */
function goProfessions() {
  state.subjectKey = "professions";
  state.topicIndex = null;
  const profs = APP_DATA.professions;
  const done = profs.chapters.filter(c => getSavedResult("professions", null, c.title)).length;

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${profs.emoji} ${profs.name}` }
  ]));
  main.appendChild(el(`
    <div class="book-cover">
      ${profs.coverImage ? `<img src="${profs.coverImage}" alt="Professions cover art" class="book-cover-img" />` : ""}
      <h2>📖 ${profs.bookTitle}</h2>
      <p>${profs.tagline}</p>
    </div>
  `));
  main.appendChild(renderProgressBar("Reading progress", done, profs.chapters.length, profs.color));
  if (done === profs.chapters.length) main.appendChild(certificateButton("Professions — When I Grow Up", goProfessions));

  const list = el(`<div class="layout-book"></div>`);
  profs.chapters.forEach((chap, idx) => {
    const savedResult = getSavedResult("professions", null, chap.title);
    const badgeText = savedResult ? `✅ ${savedResult.score}/${savedResult.total}` : "▶️ Read";
    const row = el(`
      <div class="chapter-row" style="animation-delay:${idx * 0.05}s">
        ${chap.image ? `<img src="${chap.image}" alt="${chap.title}" class="chapter-thumb" />` : `<div class="chapter-num">${idx + 1}</div>`}
        <div class="info">
          <h4>${idx + 1}. ${chap.title}</h4>
          <p>${chap.blurb}</p>
        </div>
        <span class="badge">${badgeText}</span>
      </div>
    `);
    row.addEventListener("click", () => goTopic("professions", idx));
    list.appendChild(row);
  });
  main.appendChild(list);

  if (profs.closingMessage) {
    main.appendChild(el(`<div class="book-note">💬 "${profs.closingMessage}"</div>`));
  }
  if (profs.authorBio) {
    main.appendChild(el(`
      <div class="author-card">
        <div class="author-avatar">${escapeHtml(profs.authorName ? profs.authorName[0] : "F")}</div>
        <div>
          <h4>About the Author</h4>
          <p>${profs.authorBio}</p>
          ${profs.authorName ? `<p class="author-name">— ${profs.authorName}</p>` : ""}
        </div>
      </div>
    `));
  }
}

/* ---------- Topic detail (video + fact) ---------- */
function currentTopicList(subjectKey) {
  return subjectKey === "professions" ? APP_DATA.professions.chapters : getTopics(subjectKey, state.level);
}
function currentSubjectMeta(subjectKey) {
  return subjectKey === "professions" ? APP_DATA.professions : getSubject(subjectKey);
}

function goTopic(subjectKey, topicIndex) {
  state.subjectKey = subjectKey;
  state.topicIndex = topicIndex;
  const subj = currentSubjectMeta(subjectKey);
  const topic = currentTopicList(subjectKey)[topicIndex];
  const backToList = () => subjectKey === "professions" ? goProfessions() : goSubject(subjectKey);

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${subj.emoji} ${subj.name}`, onClick: backToList },
    { label: topic.title }
  ]));

  const panel = el(`<div class="topic-panel"></div>`);
  panel.appendChild(el(`<h2>${topic.title}</h2>`));
  panel.appendChild(speakBtn(() => `${topic.title}. ${topic.story || topic.blurb} ${topic.fact || ""}`));

  if (topic.image) {
    panel.appendChild(el(`<img src="${topic.image}" alt="${topic.title}" class="topic-illustration" />`));
  }
  if (topic.story) {
    panel.appendChild(el(`<blockquote class="topic-story">${topic.story}</blockquote>`));
  } else {
    panel.appendChild(el(`<p class="topic-desc">${topic.blurb}</p>`));
  }

  const hasVideo = topic.videoId && topic.videoId !== "REPLACE_ME";
  if (hasVideo) {
    panel.appendChild(el(`
      <div class="video-wrap">
        <iframe src="https://www.youtube.com/embed/${topic.videoId}" title="${topic.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    `));
  } else {
    panel.appendChild(el(`
      <div class="video-note">🎬 A video for this topic hasn't been added yet — you can still try the exercises below!</div>
    `));
  }

  if (topic.fact) {
    const fb = el(`<div class="fact-box"><span class="fact-icon">${topic.icon || "💡"}</span><span class="fact-text">${topic.fact}</span></div>`);
    fb.appendChild(speakBtn(() => topic.fact));
    panel.appendChild(fb);
  }

  const startBtn = el(`<button class="btn btn-primary btn-big" style="margin-top:20px;">Take the Quiz 📝</button>`);
  startBtn.addEventListener("click", () => startQuiz(subjectKey, topicIndex));
  panel.appendChild(startBtn);

  main.appendChild(panel);
}

/* ---------- Quiz flow (shuffled every attempt) ---------- */
const QUESTIONS_PER_ATTEMPT = 3;
function startQuiz(subjectKey, topicIndex) {
  const topic = currentTopicList(subjectKey)[topicIndex];
  const picked = shuffle(topic.questions).slice(0, Math.min(QUESTIONS_PER_ATTEMPT, topic.questions.length));
  const shuffledQuestions = picked.map(shuffleQuestion);
  state.quiz = { pool: shuffledQuestions, current: 0, answers: new Array(shuffledQuestions.length).fill(null) };
  renderQuizQuestion(subjectKey, topicIndex);
}

function renderQuizQuestion(subjectKey, topicIndex) {
  const subj = currentSubjectMeta(subjectKey);
  const topic = currentTopicList(subjectKey)[topicIndex];
  const backToList = () => subjectKey === "professions" ? goProfessions() : goSubject(subjectKey);
  const qIndex = state.quiz.current;
  const question = state.quiz.pool[qIndex];

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${subj.emoji} ${subj.name}`, onClick: backToList },
    { label: topic.title, onClick: () => goTopic(subjectKey, topicIndex) },
    { label: "Quiz" }
  ]));

  main.appendChild(el(`<div class="quiz-progress">Question ${qIndex + 1} of ${state.quiz.pool.length}</div>`));

  const card = el(`<div class="quiz-card"></div>`);
  const qRow = el(`<div class="quiz-question"><span>${question.q}</span></div>`);
  qRow.appendChild(speakBtn(() => `${question.q}. ${question.options.join(". ")}`));
  card.appendChild(qRow);

  const optWrap = el(`<div class="options"></div>`);
  question.options.forEach((opt, i) => {
    const btn = el(`<button class="option" data-i="${i}">${opt}</button>`);
    if (state.quiz.answers[qIndex] === i) btn.classList.add("selected");
    btn.addEventListener("click", () => {
      state.quiz.answers[qIndex] = i;
      playSound("tap");
      [...optWrap.children].forEach(c => c.classList.remove("selected"));
      btn.classList.add("selected");
    });
    optWrap.appendChild(btn);
  });
  card.appendChild(optWrap);

  const actions = el(`<div class="quiz-actions"></div>`);
  if (qIndex > 0) {
    const backBtn = el(`<button class="btn btn-secondary">◀ Back</button>`);
    backBtn.addEventListener("click", () => { state.quiz.current--; renderQuizQuestion(subjectKey, topicIndex); });
    actions.appendChild(backBtn);
  } else {
    actions.appendChild(el(`<span></span>`));
  }
  const isLast = qIndex === state.quiz.pool.length - 1;
  const nextBtn = el(`<button class="btn btn-primary">${isLast ? "Review My Answers ✅" : "Next ▶"}</button>`);
  nextBtn.addEventListener("click", () => {
    if (state.quiz.answers[qIndex] === null) { alert("Pick an answer first! 🙂"); return; }
    if (isLast) { renderReview(subjectKey, topicIndex); }
    else { state.quiz.current++; renderQuizQuestion(subjectKey, topicIndex); }
  });
  actions.appendChild(nextBtn);
  card.appendChild(actions);

  main.appendChild(card);
}

/* ---------- Review ---------- */
function renderReview(subjectKey, topicIndex) {
  const subj = currentSubjectMeta(subjectKey);
  const topic = currentTopicList(subjectKey)[topicIndex];

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${subj.emoji} ${subj.name}`, onClick: () => subjectKey === "professions" ? goProfessions() : goSubject(subjectKey) },
    { label: "Review" }
  ]));
  main.appendChild(el(`<h2>Let's Review! 🔍</h2>`));
  main.appendChild(el(`<p class="topic-desc">Check your answers below before seeing your final score.</p>`));

  let correctCount = 0;
  state.quiz.pool.forEach((q, i) => {
    const userAnswer = state.quiz.answers[i];
    const isCorrect = userAnswer === q.answer;
    if (isCorrect) correctCount++;
    const item = el(`
      <div class="review-item ${isCorrect ? "correct" : "incorrect"}" style="animation-delay:${i * 0.12}s">
        <div class="review-q"><span class="review-icon ${isCorrect ? "ok" : "oops"}">${isCorrect ? "✅" : "❌"}</span>${i + 1}. ${q.q}</div>
        <div class="review-line your">Your answer: ${q.options[userAnswer]}</div>
        ${!isCorrect ? `<div class="review-line correct-answer">Correct answer: ${q.options[q.answer]}</div>` : ``}
        <div class="review-line review-expl"><span class="expl-icon">${topic.icon || "💡"}</span><span>${q.explanation}</span></div>
      </div>
    `);
    main.appendChild(item);
  });

  const finishBtn = el(`<button class="btn btn-primary btn-big" style="margin-top:10px;">Finish Review — See My Grade 🎉</button>`);
  finishBtn.addEventListener("click", () => {
    const level = subjectKey === "professions" ? null : state.level;
    recordScore(subjectKey, level, topic.title, correctCount, state.quiz.pool.length);
    celebrateBadges();
    renderResult(subjectKey, topicIndex, correctCount, state.quiz.pool.length);
  });
  main.appendChild(finishBtn);
}

/* ---------- Result ---------- */
function renderResult(subjectKey, topicIndex, correct, total) {
  const subj = currentSubjectMeta(subjectKey);
  const topic = currentTopicList(subjectKey)[topicIndex];
  const pct = Math.round((correct / total) * 100);
  const backToList = () => subjectKey === "professions" ? goProfessions() : goSubject(subjectKey);

  let stars, msg, emoji;
  if (pct === 100) { stars = "⭐⭐⭐"; msg = "Perfect score! You're a superstar!"; emoji = "🏆"; }
  else if (pct >= 60) { stars = "⭐⭐"; msg = "Great job! You're learning so well!"; emoji = "🌟"; }
  else { stars = "⭐"; msg = "Nice try! Watch the video again and try once more!"; emoji = "🎈"; }

  clearMain();
  main.appendChild(crumb([
    { label: "🏠 Home", onClick: goHome },
    { label: `${subj.emoji} ${subj.name}`, onClick: backToList },
    { label: "Result" }
  ]));

  const card = el(`
    <div class="result-card pop-in">
      <div class="result-emoji">${emoji}</div>
      <h2>${topic.title}</h2>
      <div class="result-score">${correct} / ${total} correct</div>
      <div class="result-stars">${stars}</div>
      <div class="mascot-bubble"><span class="mascot">${APP_DATA.mascot.emoji}</span><p>${APP_DATA.mascot.name} says: ${msg}</p></div>
      <div class="result-actions"></div>
    </div>
  `);
  const actions = card.querySelector(".result-actions");
  if (pct === 100) { setTimeout(() => launchConfetti(card), 150); }
  playSound(pct >= 60 ? "win" : "try");

  const retryBtn = el(`<button class="btn btn-secondary">Try Again 🔁</button>`);
  retryBtn.addEventListener("click", () => startQuiz(subjectKey, topicIndex));
  actions.appendChild(retryBtn);

  const moreBtn = el(`<button class="btn btn-primary">More ${subj.name} ➜</button>`);
  moreBtn.addEventListener("click", backToList);
  actions.appendChild(moreBtn);

  main.appendChild(card);
}
