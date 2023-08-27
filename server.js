const express = require('express');

const server = express();

const playlists = require('./playlists');
const albums = require('./albums');
const tracks = require('./tracks');


const Port =  process.env.Port || 3000

server.use(express.static('public'));
server.set('view engine', 'ejs');


server.get('/', (req, res) => {
    res.render('index', { data : playlists})
})


server.get('/playlist/:id', (req, res) => {

     const playlistID = JSON.stringify(req.params.id)

     const findPlaylist = playlists.find((p) => p.playlistId === playlistID)
    // console.log(findPlaylist)
     res.render('template', { data : findPlaylist, title : `${findPlaylist.playlist_name}`})

})
server.get('/album/:id', (req, res) => {

     const albumID = req.params.id

     const findAlbum = albums.find((p) => p.albumId === albumID)
    // console.log(findPlaylist)
     res.render('template', { data : findAlbum, title : `${findAlbum.album_name}`})

})

server.get('/track/:id', (req, res) => {
     const id = req.params.id 

     const findTrack = tracks.find((t) => t.id === id);
   //  const author = tracks.filter((a) => a.authors ==)
     console.log(findTrack)
    findTrack ? res.render('track_template', { findTrack }) : res.sendStatus(400);
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