class Multimedia{
  constructor(url){
    const _url = url;
    this.getUrl = () => _url;
  }
  get url(){
    return this.getUrl();
  }
  setInicio(){
    return `Este método es para realizar un cambio en la URL del video.`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id){
    super(url);
    let _id = id;
    this.getId = () => _id;
  }
  get id(){
    return this.getId();
  }
  playMultimedia(){
    Player(this.url, this.id);
  }
  setInicio(time = 0){
    const idHTML = document.getElementById(this.id);
    if (!idHTML) return;
    idHTML.setAttribute('src', `${this.url}?start=${time}`);
  }
}

const Player = (() => {
  const addMedia = (url, id) => {
    const idHTML = document.getElementById(id);
    if (!idHTML) return; 
    idHTML.setAttribute('src', url);
  }
  const addMediaPublic = (url, id) => addMedia(url, id);
  return addMediaPublic;
})();

const pelicula = new Reproductor("https://www.youtube.com/embed/R-fQPTwma9o", "pelicula");
const music = new Reproductor("https://www.youtube.com/embed/XRNSan20Wpw", "music");
const serie = new Reproductor("https://www.youtube.com/embed/DgljcMqPG98", "serie");
const meme = new Reproductor("https://www.youtube.com/embed/B3a4Pl8mbRs", "meme");

pelicula.playMultimedia();
music.playMultimedia();
serie.playMultimedia();
meme.playMultimedia();