# Casa de Louvor — plataforma de portfólios musicais

HTML, CSS e JavaScript puros. Sem build, sem dependências, compatível com GitHub Pages. Todos os artistas e links nos arquivos são **exemplos fictícios**.

## 1. Abrir localmente
Dê duplo clique em `index.html`. Se preferir um servidor local: `python3 -m http.server` na pasta do projeto e acesse `http://localhost:8000`.

## 2. Personalizar a plataforma
Em `js/data.js`, edite `window.PLATAFORMA` (`nome`, `tagline`, `descricao`). Cores e tipografia ficam nas variáveis no topo de `css/style.css`. Ajuste também o `<title>` de `index.html`.

## 3. Cadastrar um artista
Copie um objeto de `window.ARTISTAS` em `js/data.js` e altere. O `slug` deve ser único, em minúsculas e com hifens. O perfil abre em `artista.html?slug=SEU-SLUG`. Para remover, apague o objeto. `destaque: true` coloca o artista na seção "Em destaque".

## 4. Imagens e capas
- Foto do artista: `assets/artistas/SLUG.jpg` (sugestão: 800×1000, até 200 KB).
- Capas: `assets/lancamentos/SLUG-ID.jpg` (sugestão: 800×800).
- Use caminhos relativos, sem barra inicial, e respeite maiúsculas/minúsculas (o GitHub Pages diferencia).
Os `.svg` fornecidos são só marcadores de posição.

## 5. Spotify e YouTube
Por lançamento: `spotifyUrl` e `youtubeUrl` geram botões. Para player, use `spotifyEmbed` (no Spotify: Compartilhar, Incorporar, copie só o `src`, que começa com `https://open.spotify.com/embed/`) e `youtubeId` (os 11 caracteres após `v=`). Os players só carregam quando o visitante clica. Vídeos avulsos entram em `videos: [{ titulo, youtubeId }]`. Campos vazios são ocultados.

## 6. Redes e contato
Em `redes`: `instagram`, `spotify`, `youtube`, `tiktok` (URLs completas com `https://`), `outros: [{ rotulo, url }]`, `email` e `whatsapp` (só números com DDI, ex.: `5511999999999`).

## 7. Publicar no GitHub Pages
1. Crie um repositório e envie todos os arquivos na raiz.
2. Em **Settings, Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
4. Para atualizar, faça commit e push. A publicação leva alguns minutos.

## Testes sugeridos
Abra `artista.html?slug=inexistente` (deve mostrar "Perfil não encontrado"), deixe `ARTISTAS = []` (estado vazio), remova campos de um artista e confira o console (F12).

## Áudio próprio e música "em breve" (opcional)
Para divulgar uma música antes de ela chegar às plataformas, converta para MP3 (até ~160 kbps), salve em `assets/audio/` e use no lançamento `audio: "assets/audio/arquivo.mp3"`. Use `emBreve: "Em breve no Spotify"` para mostrar um selo. Quando lançar, preencha `spotifyUrl` e remova `emBreve`. Atenção: o arquivo fica público para download no site.
