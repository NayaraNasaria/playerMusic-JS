let musicas = [
  {
    titulo: "Onde anda você",
    artista: "Vinicius de Moraes e Toquinho",
    src: "music/Onde Anda Você (320 kbps).mp3",
    img: "img/mpb.jpg",
  },
  {
    titulo: "Can't take my eyes of you",
    artista: "Frankie Valli",
    src: "music/Can't Take My Eyes off You (320 kbps).mp3",
    img: "img/mark-pecar-TlZkyKVUv90-unsplash.jpg",
  },
  {
    titulo: "Just the Two of Us",
    artista: "Grover Washington Junior",
    src: "music/Just the Two of Us (feat. Bill Withers) (320 kbps).mp3",
    img: "img/mark-pecar-TlZkyKVUv90-unsplash.jpg",
  },
  {
    titulo: "La vie en rose",
    artista: "Edith Piaf",
    src: "music/La vie en rose (320 kbps).mp3",
    img: "img/mark-pecar-TlZkyKVUv90-unsplash.jpg",
  },
  {
    titulo: "Vienna",
    artista: "Billy Joel",
    src: "music/Billy Joel - Vienna (Audio) (320 kbps).mp3",
    img: "img/rock.jpg",
  },
  {
    titulo: "Bed Of Roses",
    artista: "Bon Jovi",
    src: "music/Bon Jovi - Bed Of Roses (Official Music Video) (320 kbps).mp3",
    img: "img/rock.jpg",
  },
  {
    titulo: "Don't cry",
    artista: "Guns N' Roses",
    src: "music/Guns N' Roses - Don't Cry (320 kbps).mp3",
    img: "img/rock.jpg",
  },
];

let musica = document.querySelector("audio");
let indexMusica = 0;

let duracaoMusica = document.querySelector(".fim-musica");
let imagem = document.querySelector("img");
let nomeMusica = document.querySelector(".descricao h2");
let nomeArtista = document.querySelector(".descricao i");

renderizarMusica(indexMusica);

document.querySelector(".play").addEventListener("click", tocarMusica);
document.querySelector(".pause").addEventListener("click", pausarMusica);
musica.addEventListener("timeupdate", atualizarBarra);

document.querySelector(".back").addEventListener("click", () => {
  indexMusica--;
  if (indexMusica < 0) {
    indexMusica = 6;
  }
  renderizarMusica(indexMusica);
});

document.querySelector(".next").addEventListener("click", () => {
  indexMusica++;
  if (indexMusica > 6) {
    indexMusica = 0;
  }
  renderizarMusica(indexMusica);
});

function renderizarMusica(index) {
  musica.setAttribute("src", musicas[index].src);
  musica.addEventListener("loadeddata", () => {
    nomeMusica.textContent = musicas[index].titulo;
    nomeArtista.textContent = musicas[index].artista;
    imagem.src = musicas[index].img;
    duracaoMusica.textContent = segundosParaMinutos(
      Math.floor(musica.duration)
    );
  });
}

function tocarMusica() {
  musica.play();
  document.querySelector(".pause").style.display = "block";
  document.querySelector(".play").style.display = "none";
}

function pausarMusica() {
  musica.pause();
  document.querySelector(".pause").style.display = "none";
  document.querySelector(".play").style.display = "block";
}

function atualizarBarra() {
  let barra = document.querySelector("progress");
  barra.style.width =
    Math.floor((musica.currentTime / musica.duration) * 100) + "%";
  let tempoDecorrido = document.querySelector(".inicio-musica");
  tempoDecorrido.textContent = segundosParaMinutos(
    Math.floor(musica.currentTime)
  );
}

function segundosParaMinutos(segundos) {
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;
  if (campoSegundos < 10) {
    campoSegundos = "0" + campoSegundos;
  }
  return campoMinutos + ":" + campoSegundos;
}
