/* Utilitários compartilhados + página inicial. Textos entram sempre via nós de texto (sem innerHTML). */
const $ = (s, r = document) => r.querySelector(s);

function h(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") e.className = v; else e.setAttribute(k, v === true ? "" : v);
  }
  kids.flat().forEach(c => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
  return e;
}
function safeUrl(u, protocolos = ["https:"]) {
  try { const x = new URL(u); return protocolos.includes(x.protocol) ? x.href : null; } catch { return null; }
}
function extLink(href, rotulo, cls = "btn") {
  const u = safeUrl(href);
  return u ? h("a", { class: cls, href: u, target: "_blank", rel: "noopener noreferrer" }, rotulo) : null;
}
function img(src, alt, w, hgt, eager) {
  return h("img", { src, alt, width: w, height: hgt, loading: eager ? "eager" : "lazy", decoding: "async" });
}
function artistas() {
  return Array.isArray(window.ARTISTAS) ? window.ARTISTAS.filter(a => a && a.slug && a.nome) : [];
}
function perfilUrl(a) { return "artista.html?slug=" + encodeURIComponent(a.slug); }
function dataBR(d) {
  if (!d) return "";
  const t = new Date(d + "T00:00:00");
  return isNaN(t) ? "" : t.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
}
function aplicarMarca() {
  const p = window.PLATAFORMA || {};
  document.querySelectorAll("[data-marca]").forEach(n => (n.textContent = p.nome || "Portfólios"));
}

function cartaoArtista(a) {
  return h("a", { class: "card", href: perfilUrl(a), "aria-label": `Ver perfil de ${a.nome}` },
    h("div", { class: "card-img" }, img(a.imagem, `Foto de ${a.nome}`, 600, 750)),
    h("h3", {}, a.nome),
    a.genero ? h("p", { class: "muted" }, a.genero) : null);
}

function cartaoLancamento(l, a) {
  return h("article", { class: "lanc" },
    h("div", { class: "card-img sq" }, img(l.capa, `Capa de ${l.titulo}, de ${a.nome}`, 480, 480)),
    h("h3", {}, l.titulo),
    h("p", { class: "muted" }, [l.tipo, a.nome, dataBR(l.data)].filter(Boolean).join(", ")),
    l.emBreve ? h("p", { class: "selo" }, l.emBreve) : null,
    h("div", { class: "acoes" },
      extLink(l.spotifyUrl, "Ouvir no Spotify"),
      extLink(l.youtubeUrl, "Ver no YouTube"),
      h("a", { class: "btn ghost", href: perfilUrl(a) }, "Ver artista")));
}

function renderGrade(alvo, lista, msgVazia) {
  alvo.replaceChildren();
  if (!lista.length) { alvo.append(h("p", { class: "vazio" }, msgVazia)); return; }
  lista.forEach(a => alvo.append(cartaoArtista(a)));
}

function iniciarHome() {
  const todos = artistas();
  const destaques = todos.filter(a => a.destaque);
  renderGrade($("#destaques"), destaques, "Nenhum artista em destaque por enquanto.");
  renderGrade($("#todos"), todos, "Nenhum artista cadastrado. Adicione um objeto em js/data.js.");
  const lancs = todos.flatMap(a => (a.lancamentos || []).map(l => ({ l, a })))
    .sort((x, y) => (y.l.data || "9999").localeCompare(x.l.data || "9999")).slice(0, 6);
  const alvo = $("#lancamentos");
  alvo.replaceChildren();
  lancs.forEach(({ l, a }) => alvo.append(cartaoLancamento(l, a)));
  const d = destaques[0] || todos[0], arte = $("#hero-artista");
  if (d && arte) {
    arte.href = perfilUrl(d);
    arte.setAttribute("aria-label", `Ver perfil de ${d.nome}`);
    arte.replaceChildren(h("div", { class: "card-img" }, img(d.imagem, `Foto de ${d.nome}`, 600, 750, true)),
      h("strong", { class: "hero-nome" }, d.nome), d.genero ? h("span", { class: "muted" }, d.genero) : null);
    const l0 = (d.lancamentos || []).find(l => safeUrl(l.spotifyUrl)), btn = $("#hero-ouvir");
    if (l0 && btn) {
      btn.href = safeUrl(l0.spotifyUrl); btn.target = "_blank"; btn.rel = "noopener noreferrer";
      btn.textContent = `Ouvir "${l0.titulo}"`; btn.hidden = false;
    }
  } else if (arte) arte.hidden = true;
  $("#sec-lancamentos").hidden = !lancs.length;
  $("#sec-destaques").hidden = !destaques.length;
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    aplicarMarca();
    const p = window.PLATAFORMA || {};
    if ($("#hero-titulo")) { $("#hero-titulo").textContent = p.tagline || ""; $("#hero-desc").textContent = p.descricao || ""; }
    if ($("#todos")) iniciarHome();
  } catch (e) {
    console.error(e);
    const m = $("main"); if (m) m.prepend(h("p", { class: "vazio", role: "alert" }, "Não foi possível carregar os dados. Verifique js/data.js."));
  }
});
