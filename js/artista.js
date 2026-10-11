/* Página de perfil: lê ?slug= e renderiza o artista. */
function embedSobDemanda(rotulo, src, titulo, cls) {
  const wrap = h("div", { class: "embed " + (cls || "") });
  const btn = h("button", { class: "btn ghost", type: "button" }, rotulo);
  btn.addEventListener("click", () => {
    wrap.replaceChildren(h("iframe", {
      src, title: titulo, loading: "lazy", allowfullscreen: true,
      allow: "encrypted-media; picture-in-picture; fullscreen", referrerpolicy: "strict-origin-when-cross-origin"
    }));
  });
  wrap.append(btn);
  return wrap;
}
const audioOk = p => typeof p === "string" && !p.includes("..") && /^assets\/[\w\-./]+\.(mp3|m4a|ogg|wav)$/i.test(p) ? p : null;
const ytEmbed = id => /^[\w-]{11}$/.test(id || "") ? `https://www.youtube-nocookie.com/embed/${id}` : null;
const spEmbed = u => { const s = safeUrl(u); return s && s.startsWith("https://open.spotify.com/embed/") ? s : null; };

function linksRedes(r = {}) {
  const itens = [
    extLink(r.instagram, "Instagram", "chip"), extLink(r.spotify, "Spotify", "chip"),
    extLink(r.youtube, "YouTube", "chip"), extLink(r.tiktok, "TikTok", "chip"),
    ...(Array.isArray(r.outros) ? r.outros.map(o => extLink(o && o.url, (o && o.rotulo) || "Link", "chip")) : [])
  ];
  if (typeof r.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)) itens.push(h("a", { class: "chip", href: "mailto:" + r.email }, "E-mail"));
  const zap = String(r.whatsapp || "").replace(/\D/g, "");
  if (zap.length >= 10) itens.push(extLink("https://wa.me/" + zap, "WhatsApp", "chip"));
  return itens.filter(Boolean);
}

function blocoLancamento(l) {
  const sp = spEmbed(l.spotifyEmbed), yt = ytEmbed(l.youtubeId), au = audioOk(l.audio);
  return h("article", { class: "release" },
    h("div", { class: "card-img sq" }, img(l.capa, `Capa de ${l.titulo}`, 480, 480)),
    h("div", { class: "release-info" },
      h("h3", {}, l.titulo),
      h("p", { class: "muted" }, [l.tipo, dataBR(l.data)].filter(Boolean).join(", ")),
      l.descricao ? h("p", {}, l.descricao) : null,
      l.emBreve ? h("p", { class: "selo" }, l.emBreve) : null,
      au ? h("audio", { class: "player", controls: true, preload: "none", src: au, "aria-label": `Ouvir ${l.titulo}` }, "Seu navegador não suporta áudio.") : null,
      h("div", { class: "acoes" }, extLink(l.spotifyUrl, "Abrir no Spotify"), extLink(l.youtubeUrl, "Abrir no YouTube")),
      sp ? embedSobDemanda("Carregar player do Spotify", sp, `Player de ${l.titulo}`, "sp") : null,
      yt ? embedSobDemanda("Carregar vídeo", yt, `Vídeo de ${l.titulo}`, "yt") : null));
}

function renderPerfil(a) {
  document.title = `${a.nome}, ${(window.PLATAFORMA || {}).nome || "Portfólios"}`;
  const redes = linksRedes(a.redes);
  const lancs = Array.isArray(a.lancamentos) ? a.lancamentos : [];
  const vids = (Array.isArray(a.videos) ? a.videos : []).filter(v => v && ytEmbed(v.youtubeId));
  const bio = String(a.biografia || "").split(/\n\n+/).filter(Boolean).map(p => h("p", {}, p));
  const main = $("#perfil");
  main.replaceChildren(h("section", { class: "perfil-hero" },
    h("div", { class: "card-img perfil-img" }, img(a.imagem, `Foto de ${a.nome}`, 800, 1000, true)),
    h("div", {},
      a.genero ? h("p", { class: "muted" }, a.genero) : null,
      h("h1", { class: "nome" }, a.nome),
      bio.length ? h("div", { class: "bio" }, bio) : null,
      redes.length ? h("div", { class: "chips" }, redes) : null)));
  if (lancs.length) main.append(h("section", { class: "secao" }, h("h2", {}, "Lançamentos"), h("div", { class: "releases" }, lancs.map(blocoLancamento))));
  if (vids.length) main.append(h("section", { class: "secao" }, h("h2", {}, "Vídeos"),
    h("div", { class: "videos" }, vids.map(v => h("div", {}, h("p", { class: "muted" }, v.titulo || "Vídeo"), embedSobDemanda("Carregar vídeo", ytEmbed(v.youtubeId), v.titulo || "Vídeo", "yt"))))));
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarMarca();
  const main = $("#perfil");
  try {
    const slug = new URLSearchParams(location.search).get("slug");
    const a = artistas().find(x => x.slug === slug);
    if (!a) {
      document.title = "Perfil não encontrado";
      main.replaceChildren(h("section", { class: "vazio-pagina" },
        h("h1", {}, "Perfil não encontrado"),
        h("p", { class: "muted" }, "Esse endereço não corresponde a nenhum artista cadastrado."),
        h("a", { class: "btn", href: "index.html#artistas" }, "Voltar aos artistas")));
      return;
    }
    renderPerfil(a);
  } catch (e) {
    console.error(e);
    main.replaceChildren(h("p", { class: "vazio", role: "alert" }, "Erro ao carregar o perfil. Verifique js/data.js."));
  }
});
