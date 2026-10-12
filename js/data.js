/* DADOS DA PLATAFORMA — edite aqui.
   Campos opcionais podem ser omitidos ou deixados como null. */
window.PLATAFORMA = {
  nome: "MS PRODUÇÕES",
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
  }
];
