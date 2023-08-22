const express = require('express');
const ejs = require('ejs');
const server = express();

const playlists = require('./playlists');

const albums = require('./albums')


const Port =  process.env.Port || 3000

server.use(express.static('public'));
server.set('view engine', 'ejs');


server.get('/', (req, res) => {
    res.render('index', { data : playlists})
})


server.get('/playlist/:id', (req, res) => {

     const playlistID = JSON.parse(req.params.id)

     const findPlaylist = playlists.find((p) => p.playlistId === playlistID)
    // console.log(findPlaylist)
     res.render('template', { data : findPlaylist, title : `${findPlaylist.playlist_name}`})

})
server.get('/album/:id', (req, res) => {

     const albumID = JSON.parse(req.params.id)

     const findAlbum = albums.find((p) => p.albumId === albumID)
    // console.log(findPlaylist)
     res.render('template', { data : findAlbum, title : `${findAlbum.album_name}`})

})


server.get('/query', (req, res) => {
  const query = req.query.q 

   if (query === 'albums') {
        res.render('index', { data : albums})
   } 
 
   if (query === 'playlists') {
        res.render('index', { data : playlists})
   } 
 
  

});





server.listen(Port, () => {
    console.log(`server is running on port ${Port}`)
})