import ItunesService from "./itunes-service.js";

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
  
let template = ''

for (let i = 0; i < songs.length; i++) {
  const song = songs[i];

  template += `
  <div id ="track" style = "outline: 1px solid black" class="col-3">
  <p>Song: ${song.title}</p>
  <img src="${song.albumArt}">
  <p>Album: ${song.collection}</p>
  <p>Price: ${song.price}</p>
  <audio class="audio" controls="controls" src="${song.preview}"</audio>
</div>
  `
}

document.getElementById('songs').innerHTML = template

}
document.addEventListener('play', function(e){
  var audios = document.getElementsByTagName('audio');
  for(var i = 0, len = audios.length; i < len;i++){
      if(audios[i] != e.target){
          audios[i].pause();
      }
  }
}, true);

class ItunesController {
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      $('#get-music-button').text('GET MUSIC');
    })
  }
}

export default ItunesController