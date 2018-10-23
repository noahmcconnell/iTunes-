import Song from "../../models/Song.js";

let songs = []

class ItunesService {
  constructor() {}

  getSongs() {
    let songsCopy = []
    songs.forEach(song => {
      songsCopy.push(new Song(
        song.title,
        song.albumArt,
        song.Artist,
        song.collection,
        song.price,
        song.preview
      ))
    })
    return songsCopy
  }

  addSong(formData) {
    let newSong = new Song(
      formData.title.value,
      formData.albumArt.value,
      formData.artist.value,
      formData.collection.value,
      formData.price.value,
      formData.preview.value
    )
    songs.push(newSong)
    console.log(songs)
  }

  getMusicByArtist(artist) {

    var url1 = '//bcw-getter.herokuapp.com/?url=';
    var url2 = 'https://itunes.apple.com/search?term=' + artist
    var apiUrl = url1 + encodeURIComponent(url2);
    return $.getJSON(apiUrl).then(function (response) {
      var songList = response.results.map(s => {
        return new Song(s)
      })
      return songList;
    })
  }
}
export default ItunesService