const playlists = [
    { 
      type : 'playlist',
      playlistId : 12345,
      playlist_name : 'This is Quavo', 
      playlist_cover :'/data/covers/migos cover.jpg',
      favorite : false, 
      playlist_features : [
        {
          artist : 'quavo',
          id : 'qua123'
        },
        {
          artist : 'offset',
          id : 'offset123'
        },
        {
          artist : 'takeoff',
          id : 'takeoff123'
        },
        {
          artist : 'pop smoke',
          id : 'popsmoke123'
        },
        {
          artist : 'dababy',
          id : 'dababy123'
        },
        {
          artist : 'travis scott',
          id : 'travisscott123'
        }
      ],
      playlist_audios : [
         
         {
           name : 'Us Vs Them', 

           authors : [
            {
                artist : 'Gucci mane',
                id : 'guccimane123'
            },
            {
               artist : 'takeoff',
               id : 'takeoff123'
            },
            {
               artist : 'quavo',
               id : 'qua123'
            }
          ], 

           cover : '/data/covers/530715-us-vs-them.jpg',
           src : '/data/playlists/this_is_quavo/- Quavo & Takeoff Ft. Gucci Mane - Us vs. Them (Official Video) (128 kbps).mp3',
           id : 7754,
           favorite : false 
         },
         {
            name : 'Aim For The Moon', 
            authors : [
            {
                artist : 'quavo',
                id : 'quavo123'
            },
            {
                artist : 'pop smoke',
                id : 'popsmoke123'
            }
          ], 
        
           cover : '/data/covers/183189-ric-flair-drip-2.jpg',
           src : '/data/playlists/this_is_quavo/Aim for the Moon feat Quavo.mp3',
           id : 8766,
           favorite : false 
         }, 
         {
           name : 'Pick Up', 
           authors : [
            {
                artist : 'quavo',
                id : 'quavo123'
            },
            {
                artist : 'dababy',
                id : 'dababy123'
            }
          ], 
          
           cover : '/data/covers/future mask off.jpg',
           src : '/data/playlists/this_is_quavo/DaBaby_–_PICK_UP_FT._QUAVO.mp3',
           id : 3748,
           favorite : false 
         },


         {
          name : 'Fucking Up Profits', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'offset',
               id : 'offset123'
           },
           {
               artist : 'takeoff',
               id : 'takeoff123'
           }
         ], 
         
          cover : '/data/covers/future mask off.jpg',
          src : '/data/playlists/this_is_quavo/Migos - _Fucking Up Profits_ (Official Audio) (128 kbps).mp3',
          id : 3748,
          favorite : false 
        },
       
        {
          name : 'Flooded', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'takeoff',
               id : 'takeoff123'
           },
           {
               artist : 'offset',
               id : 'offset123'
           }
         ], 
         
          cover : '/data/covers/future mask off.jpg',
          src : '/data/playlists/this_is_quavo/Migos - Flooded (Audio).mp3',
          id : 3748,
          favorite : false 
        },

        {
          name : 'Too Much Jewelry', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'takeoff',
               id : 'takeoff123'
           }
         ], 
         
          cover : '/data/covers/future mask off.jpg',
          src : '/data/playlists/this_is_quavo/Migos - Too Much Jewelry .mp3',
          id : 3748,
          favorite : false 
        },
       
        {
          name : 'Pure Water', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'takeoff',
               id : 'takeoff123'
           },
           {
               artist : 'offset',
               id : 'offset123'
           }
         ], 
         
          cover : '/data/covers/future mask off.jpg',
          src : '/data/playlists/this_is_quavo/Migos Pure Water.mp3',
          id : 3748,
          favorite : false 
        }
       ,

       {
        name : 'How We Coming', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Migos_-_How_We_Coming_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3',
        id : 3748,
        favorite : false 
      },
     
       
      {
        name : 'Menace', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Migos_-_Menace_(Official_Audio)_(Culture_3_Deluxe)(256k).mp3',
        id : 3748,
        favorite : false 
      },

      {
        name : 'Straightenin', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Migos_-_Straightenin_(Official_Video)(256k).mp3',
        id : 3748,
        favorite : false 
      },

      {
        name : 'Modern Slavery', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'travis scott',
             id : 'travisscott123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Modern Slavery.mp3',
        id : 3748,
        favorite : false 
      },

      {
        name : 'Hotel Lobby', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Quavo-Takeoff-HOTEL-LOBBY.mp3',
        id : 3748,
        favorite : false 
      },
     
      
      {
        name : 'Rap Saved Me', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : '21 Savage',
             id : '21savage123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Rap Saved Me.mp3',
        id : 3748,
        favorite : false 
      },
     
     
      {
        name : 'Shooters Inside My Crid', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Shooters inside my crib.m4a',
        id : 3748,
        favorite : false 
      },


      {
        name : 'Stripper Bowl', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Stripper Bowl.mp3',
        id : 3748,
        favorite : false 
      },


      {
        name : 'Taco Tuesday', 
        authors : [
         {
             artist : 'quavo',
             id : 'quavo123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/Taco Tuesday.mp3',
        id : 3748,
        favorite : false 
      },

      {
        name : '2 Seater', 
        authors : [
         {
             artist : 'ybn nahmir',
             id : 'ybnnahmir123'
         },
         {
             artist : 'G_Eazy',
             id : 'geazy123'
         },
         {
             artist : 'offset',
             id : 'offset123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/YBN_Nahmir_-_2_Seater_(feat._G_Eazy_&_Offset)_[Official_Music_Video](128k).m4a',
        id : 3748,
        favorite : false 
      },


      {
        name : 'Lick', 
        authors : [
         {
             artist : 'offset',
             id : 'offset123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/yt5s.com - Offset - Lick (Audio) (128 kbps).mp3',
        id : 3748,
        favorite : false 
      },


      {
        name : 'Last Memory', 
        authors : [
         {
             artist : 'takeoff',
             id : 'takeoff123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/yt5s.com - Takeoff - Last Memory (HQ Audio) (128 kbps).mp3',
        id : 3748,
        favorite : false 
      },

      {
        name : 'Danger', 
        authors : [
         {
             artist : 'offset',
             id : 'offset123'
         },
         {
             artist : 'jid',
             id : 'jid123'
         }
       ], 
       
        cover : '/data/covers/future mask off.jpg',
        src : '/data/playlists/this_is_quavo/yt5s.io - Offset, JID - Danger (Spider) (Visualizer) (320 kbps).mp3',
        id : 3748,
        favorite : false 
      }
     
     
     
     
     
     
     
        
        ]
    }

 ]
 
 module.exports = playlists