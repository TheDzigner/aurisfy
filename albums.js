const albums = [
     
    {
      type : 'album',
      albumId : 12345,
      album_name : 'Rocket Power', 
      album_cover :'/data/albums/rocket_power/rocket_power_cover.jpeg',
      favorite : false, 
      album_audios : [
         
         {
           name : 'Fueled Up', 

           authors : [
            {
                artist : 'quavo',
                id : 'quavo123'
            }
          ], 

           cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
           src : '/data/albums/rocket_power/01-Quavo-Fueled-Up-(BazeMack.com).mp3',
           id : 7754,
           favorite : false 
         },
         {
            name : 'Patty Cake', 
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
        
           cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
           src : '/data/albums/rocket_power/02-Quavo-Patty-Cake-ft-Takeoff-(BazeMack.com).mp3',
           id : 8766,
           favorite : false 
         }, 
         {
           name : 'Mama Told Me', 
           authors : [
            {
                artist : 'quavo',
                id : 'quavo123'
            }
          ], 
          
           cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
           src : '/data/albums/rocket_power/03-Quavo-Mama-Told-Me-(BazeMack.com).mp3',
           id : 3748,
           favorite : false 
         },
         {
          name : 'Who Wit Me', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/04-Quavo-Who-Wit-Me-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Narkedo Speaks', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/05-Quavo-Narkedo-Speaks-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Hold Me', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/06-Quavo-Hold-Me-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Where Can I Start', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/07-Quavo-Where-Can-I-Start-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Wall To Wall', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/08-Quavo-Wall-To-Wall-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Turn Yo Clip Up', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'future',
               id : 'future123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/09-Quavo-Turn-Yo-Clic-Up-ft-Future-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Back Where It Begins', 
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
               artist : 'future',
               id : 'future123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/10-Quavo-Back-Where-It-Begins-ft-Takeoff-Future-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : '11.11', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/11-Quavo-1111-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Galaxy', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/12-Quavo-Galaxy-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Disciples', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/13-Quavo-Disciples-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Focused', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'young thug',
               id : 'youngthug123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/14-Quavo-Focused-ft-Young-Thug-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Stain', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           },
           {
               artist : 'hunxho-babydrill',
               id : 'hunxhobabydrill123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/15-Quavo-Stain-ft-Hunxho-BabyDrill-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Not Done Yet', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/16-Quavo-Not-Done-Yet-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Rocket Power', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/17-Quavo-Rocket-Power-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         },
         {
          name : 'Greatness', 
          authors : [
           {
               artist : 'quavo',
               id : 'quavo123'
           }
         ], 
         
          cover : '/data/albums/rocket_power/rocket_power_cover.jpeg',
          src : '/data/albums/rocket_power/18-Quavo-Greatness-(BazeMack.com).mp3',
          id : 3748,
          favorite : false 

         }
        
        ]
    },


    {
        type : 'album',
        albumId : 54321,
        album_name : 'A Gift & A Curse', 
        album_cover :'/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
        favorite : false, 
        album_audios : [
           
           {
             name : 'Back At It', 
  
             authors : [
              {
                  artist : 'gunna',
                  id : 'gunna123'
              }
            ], 
  
             cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
             src : '/data/albums/a_gift_&_a_curse/01-Gunna-back-at-it-(BazeMack.com).mp3',
             id : 7754,
             favorite : false 
           },
           {
              name : 'Back To The Moon', 
              authors : [
              {
                  artist : 'gunna',
                  id : 'gunna123'
              }
            ], 
          
             cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
             src : '/data/albums/a_gift_&_a_curse/02-Gunna-back-to-the-moon-(BazeMack.com).mp3',
             id : 8766,
             favorite : false 
           }, 
           {
             name : 'Idk Nomore', 
             authors : [
              {
                  artist : 'gunna',
                  id : 'gunna123'
              }
            ], 
            
             cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
             src : '/data/albums/a_gift_&_a_curse/03-Gunna-idk-nomore-(BazeMack.com).mp3',
             id : 3748,
             favorite : false 
           },
           {
            name : 'Playbach', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/04-Gunna-paybach-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Ca H It', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/05-Gunna-ca-h-hit-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Fukumean', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/06-Gunna-fukumean-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Rodeo Dr', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/07-Gunna-rodeo-dr-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Bottom', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/08-Gunna-bottom-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'P Angels', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/09-Gunna-p-angels-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Born Rich', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/10-Gunna-born-rich-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Go Crazy', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/11-Gunna-go-crazy-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Bread Butter', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/12-Gunna-bread-butter-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'I Was Just Thinking', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/13-Gunna-i-was-just-thinking-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Alright', 
            authors : [
             {
                 artist : 'gunna',
                 id : 'gunna123'
             }
           ], 
           
            cover : '/data/albums/a_gift_&_a_curse/a_gift_&_curse_cover.jpeg',
            src : '/data/albums/a_gift_&_a_curse/14-Gunna-alright-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           }
          
          ]
      },


      {
        type : 'album',
        albumId : 6789,
        album_name : 'Culture 1', 
        album_cover :'/data/albums/culture_1/culture_1.jpeg',
        favorite : false, 
        album_audios : [
           
           {
             name : 'Culture', 
  
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
                  artist : 'dj khaled',
                  id : 'djkhaled123'
              }
            ], 
  
             cover : '/data/albums/culture_1/culture_1.jpeg',
             src : '/data/albums/culture_1/01-Migos-Culture-ft-DJ-Khaled-(BazeMack.com).mp3',
             id : 7754,
             favorite : false 
           },
           {
              name : 'T-Shirt', 
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
          
             cover : '/data/albums/culture_1/culture_1.jpeg',
             src : '/data/albums/culture_1/02-Migos-T-Shirt-(BazeMack.com).mp3',
             id : 8766,
             favorite : false 
           }, 
           {
             name : 'Call Casting', 
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
            
            cover : '/data/albums/culture_1/culture_1.jpeg',
             src : '/data/albums/culture_1/03-Migos-Call-Casting-(BazeMack.com).mp3',
             id : 3748,
             favorite : false 
           },
           {
            name : 'Bad And Boujee', 
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
                 artist : 'lil uzi vert',
                 id : 'liluzivert123'
             }
           ], 
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/04-Migos-Bad-and-Boujee-ft-Lil-Uzi-Vert-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Get Right Witcha',
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/05-Migos-Get-Right-Witcha-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Slippery', 
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
             },
             {
                 artist : 'gucci mane',
                 id : 'guccimane123'
             }
           ], 
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/06-Migos-Slippery-ft-Gucci-Mane-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Big On Big', 
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/07-Migos-Big-On-Big-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'What The Price', 
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/08-Migos-What-The-Price-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Brown Paper Bag', 
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/09-Migos-Brown-Paper-Bag-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Deadz', 
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
             },
             {
                 artist : '2 chainz',
                 id : '2chainz123'
             }
           ], 
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/10-Migos-Deadz-ft-2-Chainz-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'All Ass', 
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/11-Migos-All-Ass-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Kelly Price', 
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
             },
             {
                 artist : 'travis scott',
                 id : 'travisscott123'
             }
           ], 
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/12-Migos-Kelly-Price-ft-Travis-Scott-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           },
           {
            name : 'Out Yo Way', 
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
           
            cover : '/data/albums/culture_1/culture_1.jpeg',
            src : '/data/albums/culture_1/13-Migos-Out-Yo-Way-(BazeMack.com).mp3',
            id : 3748,
            favorite : false 
  
           }
          
          ]
      }




  



 ]
 
 module.exports = albums