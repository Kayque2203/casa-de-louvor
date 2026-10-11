# Casa de Louvor, plataforma de portfólios musicais gospel

Vitrine de artistas e músicas feita só com HTML, CSS e JavaScript puros. Sem build, sem dependências e compatível com GitHub Pages.

Site: https://kayque2203.github.io/casa-de-louvor/

## Licença e direitos

- O **código** do projeto (HTML, CSS e JavaScript) está sob a licença **MIT**, e o texto completo está no arquivo `LICENSE`.
- A licença MIT **não cobre** o conteúdo dos artistas: fotos, capas, músicas, vídeos, nomes e textos. Tudo isso pertence aos respectivos autores, com **todos os direitos reservados**, e não pode ser copiado, redistribuído ou reutilizado sem autorização deles.
- Os artistas fictícios (Ana Luz, Davi Rocha e Coral Monte Sião) e seus lançamentos são apenas exemplos de demonstração.

## 1. Abrir localmente

Dê duplo clique em `index.html`. Se preferir um servidor local, rode `python3 -m http.server` na pasta do projeto e acesse `http://localhost:8000`.

## 2. Personalizar a plataforma

Em `js/data.js`, edite `window.PLATAFORMA` (`nome`, `tagline` e `descricao`). As cores e a tipografia ficam nas variáveis no topo de `css/style.css`. Ajuste também o `<title>` de `index.html`.

## 3. Cadastrar um artista

Copie um objeto de `window.ARTISTAS` em `js/data.js` e altere os dados.

- O `slug` deve ser único, em minúsculas e com hifens. O perfil abre em `artista.html?slug=SEU-SLUG`.
- Para remover um artista, apague o objeto dele.
- `destaque: true` coloca o artista na seção "Em destaque".
- Campos vazios ou `null` são ocultados automaticamente.

## 4. Imagens e capas

- Foto do artista: `assets/artistas/SLUG.jpg` (sugestão: 800x1000, até 200 KB, rosto no centro e espaço acima da cabeça).
- Capas: `assets/lancamentos/SLUG-ID.jpg` (sugestão: 800x800).
- Use caminhos relativos, sem barra inicial, e respeite maiúsculas e minúsculas, porque o GitHub Pages diferencia.
- Os arquivos `.svg` de exemplo são marcadores de posição.

## 5. Spotify e YouTube

Por lançamento:

- `spotifyUrl` e `youtubeUrl` geram os botões.
- `spotifyEmbed` mostra o player do Spotify. No Spotify, use Compartilhar, Incorporar e copie só o `src`, que começa com `https://open.spotify.com/embed/`.
- `youtubeId` mostra o player do YouTube. Use os 11 caracteres que vêm depois de `v=` na URL.
- Os players só carregam quando o visitante clica, e nada toca sozinho.
- Vídeos avulsos entram em `videos: [{ titulo, youtubeId }]` no artista.

## 6. Redes e contato

Em `redes`:

- `instagram`, `spotify`, `youtube` e `tiktok`: URLs completas, com `https://`.
- `outros`: lista no formato `[{ rotulo, url }]`.
- `email`: endereço de e-mail.
- `whatsapp`: somente números com DDI e DDD, por exemplo `5511999999999`.

Os dados de contato ficam públicos no site. Publique apenas o que o artista autorizou.

## 7. Música "em breve" e áudio próprio (opcional)

Para divulgar uma música antes de ela chegar às plataformas:

1. Converta o áudio para MP3 (até 160 kbps) e salve em `assets/audio/`.
2. No lançamento, use `audio: "assets/audio/arquivo.mp3"`.
3. Use `emBreve: "Em breve no Spotify"` para mostrar um selo.
4. Quando a música for lançada, preencha `spotifyUrl` e apague a linha `emBreve`.

Atenção: o arquivo de áudio fica público e pode ser baixado por qualquer pessoa. Considere publicar apenas um trecho de 30 a 60 segundos até o lançamento oficial.

## 8. Publicar e atualizar no GitHub Pages

1. Envie todos os arquivos para a **raiz** do repositório, com o `index.html` na primeira pasta.
2. Em **Settings, Pages**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
3. O site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.
4. Para atualizar, edite os arquivos e faça commit. A publicação leva alguns minutos, e vale dar um recarregar forçado (Ctrl+F5) para ver a mudança.

## 9. Testes sugeridos

- Abra `artista.html?slug=inexistente` e confira se aparece "Perfil não encontrado".
- Deixe `window.ARTISTAS = []` para ver o estado vazio.
- Remova campos de um artista e confirme que as seções somem sem deixar links quebrados.
- Abra o console do navegador (F12) e confirme que não há erros.
- Teste em celular e em computador.

## Estrutura

```
index.html
artista.html
css/style.css
js/data.js      dados de artistas e lançamentos
js/main.js      funções compartilhadas e página inicial
js/artista.js   página de perfil
assets/artistas/      fotos dos artistas
assets/lancamentos/   capas
assets/audio/         áudios (opcional)
LICENSE
```