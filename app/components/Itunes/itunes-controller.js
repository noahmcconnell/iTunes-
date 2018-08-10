import ItunesService from "./itunes-service.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(songs) {
  console.log(songs)
  
let template = ''

for (let i = 0; i < songs.length; i++) {
  const song = songs[i];

  template += `
  <div style = "outline: 1px solid black" class="col-3">
  <img src="${song.albumArt}">
  <p>Song: ${song.title}</p>
  <p>Artist: ${song.artist}</p>
  <p>Album: ${song.collection}</p>
  <p>Price: ${song.price}</p>
  <audio class="audio" controls="controls" src="${song.preview}"</audio>
</div>
  `
  
}

document.getElementById('songs').innerHTML = template

}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController