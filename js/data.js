/* DADOS DA PLATAFORMA — edite aqui. Tudo abaixo é EXEMPLO FICTÍCIO.
   Campos opcionais podem ser omitidos ou deixados como null. */
window.PLATAFORMA = {
  nome: "Casa de Louvor",
  tagline: "Música gospel que leva a Palavra mais longe.",
  descricao: "Conheça vozes, bandas e corais independentes. Ouça os lançamentos e acesse as plataformas oficiais de cada ministério."
};

window.ARTISTAS = [
  {
    slug: "marcos-soares",
    nome: "Marcos Soares",
    genero: "Gospel",                         // ajuste para o estilo real (ex.: louvor, pregação, música)
    destaque: true,
    imagem: "assets/artistas/marcos-soares.jpg",
    biografia: "",                            // escreva aqui a biografia real; vazio = seção oculta
    redes: {
      instagram: "https://www.instagram.com/pr_marcos_soares/",
      spotify: null,
      youtube: null,
      tiktok: null,
      outros: [],
      email: null,
      whatsapp: "5511986344038"               // +55 11 98634-4038
    },
    videos: [],
    lancamentos: [
      {
        id: "verdadeiro-amor", titulo: "Verdadeiro Amor", tipo: "Single",
        emBreve: "Em breve no Spotify",          // remova esta linha quando lançar
        capa: "assets/lancamentos/marcos-soares-verdadeiro-amor.jpg",
        audio: "assets/audio/verdadeiro-amor.mp3", // player próprio (opcional)
        spotifyUrl: null,                         // preencha quando a música estiver no Spotify
        youtubeUrl: null, youtubeId: null         // e o clipe, quando for publicado no YouTube
      },
      {
        id: "nao-desista", titulo: "Não desista", tipo: "Single",
        // data: "AAAA-MM-DD",               // opcional: informe a data real de lançamento
        capa: "assets/lancamentos/marcos-soares-nao-desista.jpg",
        spotifyUrl: "https://open.spotify.com/intl-pt/track/3hG3BRByL4p5UBAjSgeWOG",
        spotifyEmbed: "https://open.spotify.com/embed/track/3hG3BRByL4p5UBAjSgeWOG",
        youtubeUrl: null,
        youtubeId: null
      }
    ]
  },
  {
    slug: "ana-luz",                       // único e estável: artista.html?slug=ana-luz
    nome: "Ana Luz",
    genero: "Louvor e adoração",
    destaque: true,
    imagem: "assets/artistas/ana-luz.svg",
    biografia: "Cantora e compositora, serve no ministério de louvor da sua igreja desde a adolescência. Suas canções falam de esperança, gratidão e recomeço.\n\n[Texto de exemplo: substitua pela biografia real.]",
    redes: {
      instagram: "https://www.instagram.com/",   // exemplo: use a URL completa do perfil
      spotify: "https://open.spotify.com/",
      youtube: "https://www.youtube.com/",
      tiktok: null,
      outros: [],
      email: "contato@exemplo.com",              // exemplo
      whatsapp: null                             // só números com DDI, ex.: "5511999999999"
    },
    videos: [],                                  // [{ titulo: "Ao vivo", youtubeId: "ID_DE_11_CARACTERES" }]
    lancamentos: [
      {
        id: "nova-manha", titulo: "Nova Manhã", tipo: "Álbum", data: "2025-03-14",
        capa: "assets/lancamentos/ana-luz-nova-manha.svg",
        descricao: "Oito canções de adoração gravadas ao vivo. (Exemplo)",
        spotifyUrl: "https://open.spotify.com/",
        spotifyEmbed: null,   // ex.: "https://open.spotify.com/embed/album/ID"
        youtubeUrl: null,
        youtubeId: null       // 11 caracteres após v= na URL do vídeo
      },
      {
        id: "aleluia", titulo: "Aleluia", tipo: "Single", data: "2024-09-02",
        capa: "assets/lancamentos/ana-luz-aleluia.svg",
        spotifyUrl: null, youtubeUrl: "https://www.youtube.com/"
      }
    ]
  },
  {
    slug: "davi-rocha",
    nome: "Davi Rocha",
    genero: "Rap gospel",
    destaque: true,
    imagem: "assets/artistas/davi-rocha.svg",
    biografia: "Rapper e produtor. Usa a rima para contar histórias de superação e fé nas periferias. [Texto de exemplo.]",
    redes: { instagram: "https://www.instagram.com/", email: "davi@exemplo.com" },
    lancamentos: [
      {
        id: "rocha-firme", titulo: "Rocha Firme", tipo: "EP", data: "2025-06-20",
        capa: "assets/lancamentos/davi-rocha-rocha-firme.svg",
        descricao: "Cinco faixas. (Exemplo)", spotifyUrl: "https://open.spotify.com/"
      }
    ]
  },
  {
    slug: "coral-monte-siao",
    nome: "Coral Monte Sião",
    genero: "Gospel tradicional",
    destaque: false,
    imagem: "assets/artistas/coral-monte-siao.svg",
    biografia: "Coral com quarenta vozes, dedicado a hinos e arranjos corais. [Texto de exemplo.]",
    redes: { spotify: "https://open.spotify.com/", youtube: "https://www.youtube.com/" },
    lancamentos: [
      { id: "cantai", titulo: "Cantai", tipo: "Single", data: "2025-01-10", capa: "assets/lancamentos/coral-monte-siao-cantai.svg", spotifyUrl: "https://open.spotify.com/" },
      { id: "tua-graca", titulo: "Tua Graça", tipo: "EP", data: "2024-05-30", capa: "assets/lancamentos/coral-monte-siao-tua-graca.svg" }
    ]
  }
];
