import Song from "../../models/Song.js";

let songs = []

class ItunesService {
  constructor() {

  }

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
    var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
    // @ts-ignore
    return $.getJSON(url)
      .then(res => res.results.map(s => new Song(s)))
      .catch(err => console.log(err))
  }
}





  //DO NOT MODIFY






export default ItunesService