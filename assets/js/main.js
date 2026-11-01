import { PROJECTS, PROFILE, GH, CONTACT } from "./content.js";

const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
const esc = s => String(s).replace(/[&<>]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[m]));
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- content ---------- */
$("#roleline").textContent = PROFILE.role.join("  ·  ") + "  ·  secure web";
$("#lede").textContent = PROFILE.intro;
$("#year").textContent = "© " + new Date().getFullYear();
$("#wkNote").textContent = PROJECTS.length + " tools — each links to its public repository.";
$("#aboutLead").textContent = "Security tooling and secure web front-ends, built in the open.";
$("#aboutBody").textContent = PROFILE.about;
PROFILE.interests.forEach(i => $("#interests").append(el("li", null, esc(i))));
PROFILE.education.forEach(e => $("#education").append(el("li", null, esc(e))));
["Python", "Bash", "Linux", "Networking", "Cryptography", "MCP", "HTML / CSS / JS"].forEach(c => $("#chips").append(el("li", null, esc(c))));
$("#mailBig").textContent = CONTACT; $("#mailBig").href = "mailto:" + CONTACT;
$("#ghLink").href = "https://github.com/" + GH;
$("#loc").textContent = PROFILE.location;

const grid = $("#grid");
PROJECTS.forEach(p => {
  const card = el("article", "pcard"); card.dataset.id = p.id; card.setAttribute("role", "link"); card.tabIndex = 0;
  card.setAttribute("aria-label", p.name + " — " + p.tag);
  card.innerHTML = `
    <div class="pc-cover"><span class="pc-num">${esc(p.n)}</span><span class="pc-kind">${esc(p.kind)}</span>
      <img src="assets/img/${esc(p.cover)}" alt="${esc(p.name)} output" loading="lazy" width="640" height="360"></div>
    <div class="pc-body">
      <div class="pc-name">${esc(p.name)}</div>
      <p class="pc-tag">${esc(p.tag)}</p>
      <div class="pc-tech">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="pc-foot"><span>github.com/${GH}/${esc(p.id)}</span><span class="go">View ↗</span></div>
    </div>`;
  const open = () => window.open("https://github.com/" + GH + "/" + p.id, "_blank", "noopener");
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
  grid.append(card);
});

/* ---------- hero line reveal ---------- */
document.querySelectorAll(".hero-title .line").forEach((line, i) => {
  const span = el("span", null, esc(line.textContent)); line.textContent = ""; line.append(span);
  if (reduced) return;
  span.style.transform = "translateY(105%)";
  span.animate([{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
    { duration: 850, delay: 120 + i * 110, easing: "cubic-bezier(.19,1,.22,1)", fill: "both" });
});

/* ---------- reveal ---------- */
if (!reduced && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.1 });
  document.querySelectorAll(".work, .about, .contact").forEach(s => { s.classList.add("reveal"); io.observe(s); });
}

/* ========================= Pixel, the companion ========================= */
const bubble = $("#bubble"), pupils = document.querySelectorAll(".bot .pupil"), botBtn = $("#botBtn");
let bubbleTimer = 0;
function say(html, hold = 4200) {
  if (!bubble) return;
  bubble.innerHTML = html; bubble.classList.add("show");
  clearTimeout(bubbleTimer);
  if (hold) bubbleTimer = setTimeout(() => bubble.classList.remove("show"), hold);
}
// eye tracking
if (fine && !reduced && pupils.length) {
  addEventListener("pointermove", e => {
    pupils.forEach(p => {
      const r = p.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const a = Math.atan2(e.clientY - cy, e.clientX - cx), d = Math.min(4, Math.hypot(e.clientX - cx, e.clientY - cy) / 60);
      p.style.transform = `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px)`;
    });
  }, { passive: true });
}
// greeting + contextual messages per section
const LINES = {
  intro: ["Hi — I'm <b>Pixel</b>, your guide. Scroll on ↓", "Welcome. I'll point things out as you go ↓"],
  work: ["These are <b>Maak's</b> tools — click any card to open its repo.", "Seven security tools. Hover around ✦"],
  about: ["A bit about <b>Maak</b> — real background, honestly stated.", "Security tooling and secure web, built in the open."],
  contact: ["Like what you see? <b>Say hello</b> ✉", "Tap the email to reach Maak."],
};
const pick = a => a[Math.floor(Math.random() * a.length)];
if (!reduced) setTimeout(() => say(pick(LINES.intro)), 1400);
if ("IntersectionObserver" in window) {
  const secIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting && LINES[e.target.id]) say(pick(LINES[e.target.id]));
  }), { threshold: 0.4 });
  ["work", "about", "contact"].forEach(id => { const s = document.getElementById(id); if (s) secIO.observe(s); });
}
// click Pixel for a friendly line + a quick "wave" (arm wiggle via class)
const QUIPS = ["I just keep an eye on things 👀", "Everything here is real and runnable.", "Nice to meet you ✦", "Maak builds tools that are honest about their limits."];
let qi = 0;
botBtn && botBtn.addEventListener("click", () => { say(QUIPS[qi % QUIPS.length], 3600); qi++; });
