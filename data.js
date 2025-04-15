/**
 * Data Catalog - Data Storage
 * 
 * This file contains all the data structures and objects for the catalog application.
 * Separating data from functionality improves code organization and maintainability.
 */

// Main data object containing all categories of data
const objects = {
  songs: [
    {
      title: "Hey Baby",
      artist: "Stephen Marley, Mos Def",
      image: "https://drive.google.com/thumbnail?id=1OHXtRLMS7c1zpr3o_fRzgw3mhW6VGCmm&sz=w1000-h1000-c-k-no",
      notes: [
        "A fusion of reggae and hip-hop showcasing Stephen Marley's and Mos Def's collaboration.",
        "The song promotes themes of love and unity.",
        "Featured on Stephen Marley's album 'Mind Control'."
      ],
      details: {
        releaseYear: "2007",
        album: "Mind Control",
        genre: "Reggae/Hip-Hop",
        duration: "4:12",
        label: "Universal Records"
      },
      lyrics: "Hey baby, don't you worry\nEven though the road is rocky\nI'll be coming home to you again\nIt's only a day or two\nI'll be coming home to you again\nIt's only a day or two",
      fullLyrics: "Hey baby, don't you worry\nEven though the road is rocky\nI'll be coming home to you again\nIt's only a day or two\nI'll be coming home to you again\nIt's only a day or two\n\nRecognize that the youths are the future\nGot to protect and guide and teach them culture\nThe world's about to blow and we need to know\nGot to protect and teach them right though, hey baby\n\nMake your life worth living\nDon't be ungrateful\nYou're truly blessed, yeah\nCount your blessings\nLove and happiness\nWhat you want to fulfill, yeah",
      streams: "15.2 million",
      awards: "Best Collaboration Award (2008)",
      links: {
        spotify: "https://open.spotify.com/track/7hzlCuUQtJMQF9iEjDgGT8",
        appleMusic: "https://music.apple.com/us/album/hey-baby-feat-mos-def/219496064?i=219496361",
        youtube: "https://www.youtube.com/watch?v=6H20JJPyMjY"
      },
      recommendations: [
        { 
          artist: "Damian Marley", 
          title: "Welcome to Jamrock",
          image: "https://upload.wikimedia.org/wikipedia/en/5/58/Damian_Marley_-_Welcome_to_Jamrock.jpg",
          url: "https://www.youtube.com/watch?v=_GZlJGERbvE"
        },
        { 
          artist: "Black Thought", 
          title: "Quiet Trip",
          image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Streams_of_Thought%2C_Vol._3_-_Cane_%26_Able.jpg",
          url: "https://www.youtube.com/watch?v=QQ2ZRfh9ykg"
        },
        { 
          artist: "Nas & Damian Marley", 
          title: "As We Enter",
          image: "https://upload.wikimedia.org/wikipedia/en/9/94/Distant_Relatives_album_cover.jpg",
          url: "https://www.youtube.com/watch?v=OMGd3mAfl-0"
        }
      ]
    },
    {
      title: "Travellin' Man",
      artist: "DJ Honda, Mos Def",
      image: "https://drive.google.com/thumbnail?id=1ku2bd4qVBV3SFD2ubOIg8NhpFP1m1HVc&sz=w1000-h1000-c-k-no",
      notes: [
        "A reflective track about life on the road and personal growth.",
        "Mos Def delivers introspective lyrics over DJ Honda's smooth beats.",
        "Considered a classic in underground hip-hop circles."
      ],
      details: {
        releaseYear: "1998",
        album: "DJ Honda ft. Mos Def",
        genre: "Hip-Hop",
        duration: "3:45",
        label: "H2O Records"
      },
      lyrics: "I've been many places, I've seen many faces\nPlayin' my hand right, livin' for the night\nTravellin' man, travellin' man\nGot to keep movin', can't stop groovin'",
      fullLyrics: "I've been many places, I've seen many faces\nPlayin' my hand right, livin' for the night\nTravellin' man, travellin' man\nGot to keep movin', can't stop groovin'\n\nYou got your itinerary, but my route's impromptu\nUp, down, all around, I been where you might go to\nWe all meet up at the crossroads eventually\n\nTravellin' man, travellin' man\nGot to keep movin', can't stop groovin'\nNever settle down, always searchin', always learnin'\nSometimes burnin' bridges, but I'm still returnin'",
      streams: "8.7 million",
      awards: "Underground Hit of the Year (1999)",
      links: {
        spotify: "https://open.spotify.com/track/2rQfjHEzRTQZsHnQrjRZ3A",
        appleMusic: "https://music.apple.com/us/album/travellin-man/80635149?i=80635065",
        youtube: "https://www.youtube.com/watch?v=Kr4EQDVe3VE"
      },
      recommendations: [
        { 
          artist: "Talib Kweli", 
          title: "Get By",
          image: "https://upload.wikimedia.org/wikipedia/en/5/5e/Quality_Talib_Kweli.jpg",
          url: "https://www.youtube.com/watch?v=UVtpXvzzXiA"
        },
        { 
          artist: "The Roots", 
          title: "You Got Me",
          image: "https://upload.wikimedia.org/wikipedia/en/d/df/The_Roots_Things_Fall_Apart.jpg",
          url: "https://www.youtube.com/watch?v=MJCHeEQV454"
        },
        { 
          artist: "Common", 
          title: "The Light",
          image: "https://upload.wikimedia.org/wikipedia/en/f/f3/Common_Like_Water_for_Chocolate.jpg",
          url: "https://www.youtube.com/watch?v=OjHX7jf-znA"
        }
      ]
    },
    {
      title: "No Role Modelz",
      artist: "J. Cole",
      image: "https://drive.google.com/thumbnail?id=1y0mWQZFAAg2HNliTQ_IwTiVymK4_y-AX&sz=w1000-h1000-c-k-no",
      notes: [
        "Addresses the lack of positive role models in society.",
        "Features a sample from Project Pat's 'Don't Save Her'.",
        "One of J. Cole's most commercially successful singles."
      ],
      details: {
        releaseYear: "2014",
        album: "2014 Forest Hills Drive",
        genre: "Hip-Hop",
        duration: "4:52",
        label: "Dreamville Records"
      },
      lyrics: "First things first rest in peace Uncle Phil\nFor real, you the only father that I ever knew\nI get my bitch pregnant I'ma be a better you\nProphesies that I made way back in the Ville",
      fullLyrics: "First things first rest in peace Uncle Phil\nFor real, you the only father that I ever knew\nI get my bitch pregnant I'ma be a better you\nProphesies that I made way back in the Ville\n\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\n\nNow I ain't tryna tell you what to do\nBut if your girl ain't actin' right for you\nIt's simple, you can cut her loose\nOr be like me and just say 'fool me twice'",
      streams: "1.2 billion",
      awards: "Multi-Platinum Certification",
      links: {
        spotify: "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr",
        appleMusic: "https://music.apple.com/us/album/no-role-modelz/1530334388?i=1530334630",
        youtube: "https://www.youtube.com/watch?v=J-6eUsSKv7Q"
      },
      recommendations: [
        { 
          artist: "Kendrick Lamar", 
          title: "HUMBLE.",
          image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Kendrick_Lamar_-_Damn.png",
          url: "https://www.youtube.com/watch?v=tvTRZJ-4EyI"
        },
        { 
          artist: "Drake", 
          title: "God's Plan",
          image: "https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
          url: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM"
        },
        { 
          artist: "J. Cole", 
          title: "Middle Child",
          image: "https://upload.wikimedia.org/wikipedia/en/1/16/J._Cole_-_Middle_Child.png",
          url: "https://www.youtube.com/watch?v=WILNIXZr2oc"
        }
      ]
    },
    {
      title: "Me Say",
      artist: "Mo'Kalamity",
      image: "https://drive.google.com/thumbnail?id=10keYhCPDAVmppcpqs_JB7HuYxGLXNaT7&sz=w1000-h1000-c-k-no",
      notes: [
        "A powerful reggae anthem promoting peace and resistance.",
        "Mo'Kalamity's soulful voice delivers a message of empowerment.",
        "Highlights the struggles and hopes of marginalized communities."
      ],
      details: {
        releaseYear: "2012",
        album: "Warriors of Light",
        genre: "Reggae",
        duration: "3:56",
        label: "Chapter Two Records"
      },
      lyrics: "Me say go fight for your rights\nMe say don't give up the fight\nStand up and fight for your life\nThe time has come to unite",
      fullLyrics: "Me say go fight for your rights\nMe say don't give up the fight\nStand up and fight for your life\nThe time has come to unite\n\nTime come for justice and equality\nSistren and brethren unite and be free\nDefenders of truth, we have to agree\nProud of our heritage, proud of our history\n\nMe say oh-oh-oh, oh-oh\nMe say oh-oh-oh, oh-oh\nMe say go fight for your rights\nMe say don't give up the fight",
      streams: "3.5 million",
      awards: "Best Reggae Track (European Reggae Awards)",
      links: {
        spotify: "https://open.spotify.com/artist/1YeNaPA4CzSM96zOKj9tXe",
        appleMusic: "https://music.apple.com/us/artist/mokalamity/312922965",
        youtube: "https://www.youtube.com/watch?v=i8zt6bIp37I"
      },
      recommendations: [
        { 
          artist: "Protoje", 
          title: "Who Knows",
          image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Protoje_Ancient_Future.jpg",
          url: "https://www.youtube.com/watch?v=hzqFmXZ8tOE"
        },
        { 
          artist: "Chronixx", 
          title: "Here Comes Trouble",
          image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Chronology_album_cover.jpg",
          url: "https://www.youtube.com/watch?v=LfeIfiiBTfY"
        },
        { 
          artist: "Damian Marley", 
          title: "Road to Zion",
          image: "https://upload.wikimedia.org/wikipedia/en/4/4d/DamianMarley-WelcomeToJamrock.jpg",
          url: "https://www.youtube.com/watch?v=kD9MRKDICgo"
        }
      ]
    },
    {
      title: "Freed from Desire",
      artist: "Gala",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f5/Freed_from_desire2.jpg",
      notes: [
        "An iconic Eurodance track from the late 90s.",
        "Known for its catchy chorus and energetic beat.",
        "Has become a popular chant among football fans worldwide."
      ],
      details: {
        releaseYear: "1996",
        album: "Come Into My Life",
        genre: "Eurodance",
        duration: "3:40",
        label: "Do It Yourself"
      },
      lyrics: "Freed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na",
      fullLyrics: "Freed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\n\nMy love has got no money, he's got his strong beliefs\nMy love has got no power, he's got his strong beliefs\nMy love has got no fame, he's got his strong beliefs\nMy love has got no money, he's got his strong beliefs\n\nWant more and more, people just want more and more\nFreedom and love, what he's looking for\nWant more and more, people just want more and more\nFreedom and love, what he's looking for",
      streams: "350 million",
      awards: "Multiple Gold and Platinum certifications",
      links: {
        spotify: "https://open.spotify.com/track/3QRGYDFFCFfV5SsbR92NX9",
        appleMusic: "https://music.apple.com/us/album/freed-from-desire/1193113880?i=1193114206",
        youtube: "https://www.youtube.com/watch?v=p3l7fgvrEKM"
      },
      recommendations: [
        { 
          artist: "Corona", 
          title: "The Rhythm of the Night",
          image: "https://upload.wikimedia.org/wikipedia/en/d/d5/TheRhythmoftheNight.jpg",
          url: "https://www.youtube.com/watch?v=u3ltZmI5LQw"
        },
        { 
          artist: "La Bouche", 
          title: "Be My Lover",
          image: "https://upload.wikimedia.org/wikipedia/en/3/39/Be_My_Lover_La_Bouche.jpg",
          url: "https://www.youtube.com/watch?v=ydd9Dn3dQiI"
        },
        { 
          artist: "Haddaway", 
          title: "What Is Love",
          image: "https://upload.wikimedia.org/wikipedia/en/9/96/Haddaway_-_What_Is_Love.jpg",
          url: "https://www.youtube.com/watch?v=HEXWRTEbj1I"
        }
      ]
    },
    {
      title: "The Great Gig in the Sky",
      artist: "Pink Floyd",
      image: "https://drive.google.com/thumbnail?id=13sAQosGtb1rE5rSyG_AsHOfcQQHcJClD&sz=w1000-h1000-c-k-no",
      notes: [
        "One of the most emotional tracks from Pink Floyd's 'The Dark Side of the Moon'.",
        "Features haunting vocal performance by Clare Torry, who improvised the entire piece.",
        "Often cited as one of the greatest rock instrumentals of all time."
      ],
      details: {
        releaseYear: "1973",
        album: "The Dark Side of the Moon",
        genre: "Progressive Rock",
        duration: "4:43",
        label: "Harvest/Capitol Records"
      },
      lyrics: "Instrumental with improvised vocals (no actual lyrics)",
      fullLyrics: "The Great Gig in the Sky is an instrumental track with improvised wordless vocals by Clare Torry. The song conveys the stages of death through Richard Wright's piano composition and Torry's powerful vocal performance that ranges from soft moans to intense screams.",
      streams: "125 million",
      awards: "Part of the album that stayed on Billboard charts for 741 weeks",
      links: {
        spotify: "https://open.spotify.com/track/1NjpE9jMSPiY2szAeKwRVS",
        appleMusic: "https://music.apple.com/us/album/the-great-gig-in-the-sky/1065973975?i=1065974386",
        youtube: "https://www.youtube.com/watch?v=mPGv8L3a_sY"
      },
      recommendations: [
        { 
          artist: "Pink Floyd", 
          title: "Breathe (In the Air)",
          image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
          url: "https://www.youtube.com/watch?v=mrojrDCI02k"
        },
        { 
          artist: "Pink Floyd", 
          title: "Us and Them",
          image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png",
          url: "https://www.youtube.com/watch?v=nDbeqj-1XOo"
        },
        { 
          artist: "Pink Floyd", 
          title: "Comfortably Numb",
          image: "https://upload.wikimedia.org/wikipedia/en/1/13/PinkFloyd-wall.jpg",
          url: "https://www.youtube.com/watch?v=_FrOQC-zEog"
        }
      ]
    }
  ],

  soccer: [
    {
title: "Cristiano Ronaldo",
team: "Al Nassr",
image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg",
notes: [
  "Renowned for his exceptional goal-scoring ability and athleticism.",
  "Holds numerous records, including most goals in UEFA Champions League history.",
  "A global icon both on and off the pitch."
],
details: {
  birthDate: "February 5, 1985",
  age: "40",
  nationality: "Portuguese",
  position: "Forward",
  achievements: "5x Ballon d'Or winner, 5x Champions League titles",
  careerGoals: "Over 800 goals for club and country",
  height: "187 cm (6'2\")",
  weight: "85 kg (187 lbs)"
},
funFacts: [
  "Ronaldo can jump higher than the average NBA player, with a vertical leap of 30 inches (76cm).",
  "His full name is Cristiano Ronaldo dos Santos Aveiro, named after Ronald Reagan, who was his father's favorite actor.",
  "He sleeps five times a day for 90 minutes each time instead of once at night.",
  "Ronaldo doesn't have any tattoos because he regularly donates blood."
],
biography: "Born and raised on the Portuguese island of Madeira, Ronaldo began his senior club career playing for Sporting CP, before signing with Manchester United in 2003. He would go on to help United win three consecutive Premier League titles, the Champions League, and the FIFA Club World Cup. His moves to Real Madrid and later Juventus set transfer fee records, and his current contract with Al Nassr makes him one of the highest-paid athletes in the world.",
dailyRoutine: "Ronaldo's typical day includes multiple training sessions, strict meal planning, recovery therapies like cryotherapy, and his unique sleep schedule of five 90-minute naps rather than a single 8-hour sleep. He focuses heavily on high-protein meals and avoids alcohol completely.",
links: {
  instagram: "https://www.instagram.com/cristiano/",
  clubInstagram: "https://www.instagram.com/alnassr/",
  website: "https://www.cristianoronaldo.com/",
  transfermarkt: "https://www.transfermarkt.com/cristiano-ronaldo/profil/spieler/8198"
}
},
    {
title: "Lionel Messi",
team: "Inter Miami",
image: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg",
notes: [
  "Known for his incredible dribbling, vision, and goal-scoring ability.",
  "Widely regarded as one of the greatest footballers of all time."
],
details: {
  birthDate: "June 24, 1987",
  age: "37",
  nationality: "Argentine",
  position: "Forward",
  achievements: "7x Ballon d'Or winner, Copa America champion",
  careerGoals: "Over 700 goals for club and country",
  height: "170 cm (5'7\")",
  weight: "72 kg (159 lbs)"
},
funFacts: [
  "Messi has a growth hormone deficiency diagnosed at age 11.",
  "He moved to Barcelona at age 13 to join their youth academy.",
  "Messi holds the record for most goals in a calendar year (91 in 2012)."
],
biography: "Lionel Messi is an Argentine professional footballer who plays as a forward for Inter Miami and the Argentina national team. He is known for his incredible dribbling, vision, and goal-scoring ability, and is widely regarded as one of the greatest footballers of all time.",
dailyRoutine: "Messi's routine includes daily training sessions, a balanced diet, and family time. He focuses on maintaining his fitness and skill level through rigorous practice and recovery methods.",
links: {
  instagram: "https://www.instagram.com/leomessi/",
  clubInstagram: "https://www.instagram.com/intermiamicf/",
  website: "https://www.leomessi.com/",
  transfermarkt: "https://www.transfermarkt.com/lionel-messi/profil/spieler/28003"
}
},
    {
title: "Neymar Jr.",
team: "Santos FC",
image: "https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg?cropfactor=face&cropposition=center",
notes: [
  "Rose to prominence with his dazzling skills at Santos FC.",
  "Known for his creativity, dribbling, and flair.",
  "Has been a key player for Brazil's national team."
],
details: {
  birthDate: "February 5, 1992",
  age: "33",
  nationality: "Brazilian",
  position: "Forward",
  achievements: "Olympic gold medalist, Champions League winner",
  careerHighlight: "Record transfer to PSG for €222 million in 2017",
  height: "175 cm (5'9\")",
  weight: "68 kg (150 lbs)"
},
funFacts: [
  "Neymar became a father at the age of 19.",
  "He has over 50 tattoos, including ones of his sister and son.",
  "Before becoming a footballer, he was a talented futsal player.",
  "He has appeared in the TV series 'Money Heist' (La Casa de Papel)."
],
biography: "Neymar da Silva Santos Júnior began his career at Santos, where he was named South American Footballer of the Year twice. He moved to Barcelona in 2013, forming the famous 'MSN' attacking trio with Messi and Suárez. His transfer to PSG in 2017 remains the most expensive in football history. Throughout his career, he has been praised for his technical skills, creativity, and playmaking abilities.",
dailyRoutine: "Neymar's daily routine includes morning technical training, afternoon tactical sessions, regular physiotherapy, and evening recovery. He is known to enjoy video games during his downtime and follows a balanced diet designed by personal nutritionists, with occasional cheat days.",
links: {
  instagram: "https://www.instagram.com/neymarjr/",
  clubInstagram: "https://www.instagram.com/santosfc/",
  website: "https://www.neymarjr.com/en",
  transfermarkt: "https://www.transfermarkt.com/neymar/profil/spieler/68290"
}
},
    {
title: "Lamine Yamal",
team: "FC Barcelona",
image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Lamine_Yamal%2C_S%C3%A1nchez_se_reuni%C3%B3_con_los_futbolistas_de_la_selecci%C3%B3n_espa%C3%B1ola_tras_ganar_la_Eurocopa_2024_%283%29_%28cropped%29.jpg?cropfactor=face&cropposition=center",
notes: [
  "A young prodigy making waves at FC Barcelona.",
  "Praised for his technical skills and vision on the field.",
  "Considered one of the most promising talents in European football."
],
details: {
  birthDate: "July 13, 2007",
  age: "17",
  nationality: "Spanish",
  position: "Winger",
  debut: "Youngest player to debut for Barcelona in La Liga",
  potential: "Regarded as one of the brightest prospects in world football",
  height: "180 cm (5'11\")",
  weight: "72 kg (159 lbs)"
},
funFacts: [
  "At 16, Yamal became the youngest player to score in a European Championship.",
  "He was playing for Barcelona's under-19 team at just 13 years old.",
  "Yamal is the youngest player ever to appear in El Clásico.",
  "His professional contract with Barcelona includes a €1 billion release clause."
],
biography: "Born in Esplugues de Llobregat, Barcelona, to a Moroccan father and an Equatorial Guinean mother, Yamal joined Barcelona's famous La Masia academy at the age of 7. His rapid rise through the youth ranks caught the attention of the football world, and his precocious talent earned him a first-team debut at just 15 years old, breaking numerous records for youngest appearances and goals.",
dailyRoutine: "As a teenage prodigy, Yamal's daily routine is carefully managed by Barcelona. He balances school education with professional training, follows a specialized nutrition plan for developing athletes, and receives mental coaching to handle the pressure of being in the spotlight at such a young age.",
links: {
  instagram: "https://www.instagram.com/lamineyamal/",
  clubInstagram: "https://www.instagram.com/fcbarcelona/",
  website: "https://www.fcbarcelona.com/en/football/first-team/players/men/207192/lamine-yamal",
  transfermarkt: "https://www.transfermarkt.com/lamine-yamal/profil/spieler/925397"
}
},
    {
title: "Sergio Ramos",
team: "Sevilla FC",
image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sergio_Ramos_10mar2007.jpg?cropfactor=face&cropposition=center",
notes: [
  "Known for his leadership and defensive prowess.",
  "Has won multiple titles with Real Madrid and the Spanish national team.",
  "Recently returned to his boyhood club, Sevilla FC."
],
details: {
  birthDate: "March 30, 1986",
  age: "39",
  nationality: "Spanish",
  position: "Defender",
  achievements: "4x Champions League winner, World Cup champion",
  careerGoals: "Over 100 goals as a defender",
  height: "184 cm (6'0\")",
  weight: "82 kg (181 lbs)"
},
funFacts: [
  "Ramos holds the record for most red cards in La Liga history with 20.",
  "He's an accomplished horse rider and owns a horse breeding farm called 'Yeguada SR4'.",
  "Despite being a defender, he has scored more goals than many professional forwards.",
  "He has a tattoo of the Champions League trophy on his leg with the dates of his victories."
],
biography: "Born in Camas, Seville, Ramos began his career at Sevilla before moving to Real Madrid in 2005. During his 16 years at Madrid, he established himself as one of the greatest defenders of his generation and a club legend, serving as captain from 2015 to 2021. After a brief spell at Paris Saint-Germain, he returned to his boyhood club Sevilla in 2023, completing a full circle in his illustrious career.",
dailyRoutine: "Ramos is known for his disciplined approach to fitness. His daily routine includes early morning gym sessions focusing on strength and agility, technical training with the team, and evening yoga or Pilates for flexibility. He's also committed to recovery methods like ice baths and massage therapy, and follows a Mediterranean diet rich in protein.",
links: {
  instagram: "https://www.instagram.com/sergioramos/",
  clubInstagram: "https://www.instagram.com/sevillafc/",
  website: "https://sergioramos.com/",
  transfermarkt: "https://www.transfermarkt.com/sergio-ramos/profil/spieler/25557"
}
},
    {
title: "Roberto Carlos",
team: "Real Madrid",
image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/LS3_1288_%2853332367864%29_%28cropped%29.jpg",
notes: [
  "Renowned for his powerful free kicks and speed.",
  "A key player in Real Madrid's success in the late 1990s and early 2000s."
],
details: {
  birthDate: "April 10, 1973",
  age: "52",
  nationality: "Brazilian",
  position: "Left-back",
  achievements: "3x UEFA Champions League winner, FIFA World Cup champion",
  careerGoals: "Known for scoring spectacular long-range goals",
  height: "168 cm (5'6\")",
  weight: "70 kg (154 lbs)"
},
funFacts: [
  "Roberto Carlos scored one of the most famous free kicks against France in 1997.",
  "He was known for his incredible speed and stamina on the field."
],
biography: "Roberto Carlos is a retired Brazilian footballer who played as a left-back. He is widely regarded as one of the greatest left-backs in history, known for his powerful free kicks and speed.",
dailyRoutine: "Carlos's routine during his playing days included intense training sessions, focusing on speed and strength, and a disciplined diet to maintain peak physical condition.",
links: {
  instagram: "https://www.instagram.com/robertocarlosoficial/",
  clubInstagram: "https://www.instagram.com/realmadrid/",
  website: "https://www.realmadrid.com/en/about-real-madrid/history/football-legends/roberto-carlos-da-silva",
  transfermarkt: "https://www.transfermarkt.com/roberto-carlos/profil/spieler/3569"
}
},
    {
title: "Thierry Henry",
team: "Arsenal",
image: "https://upload.wikimedia.org/wikipedia/commons/7/74/2021_-_Centre_Stage_HM3_3912_%2851648183857%29.jpg",
notes: [
  "Arsenal's all-time leading scorer, known for his pace, skill, and finishing ability."
],
details: {
  birthDate: "August 17, 1977",
  age: "47",
  nationality: "French",
  position: "Forward",
  achievements: "2x Premier League champion, FIFA World Cup winner",
  careerGoals: "Over 400 career goals",
  height: "188 cm (6'2\")",
  weight: "83 kg (183 lbs)"
},
funFacts: [
  "Henry was part of the 'Invincibles' Arsenal team that went unbeaten in the 2003-04 Premier League season.",
  "He transitioned to a successful career in coaching and punditry after retiring."
],
biography: "Thierry Henry is a retired French footballer who played as a forward. He is Arsenal's all-time leading scorer and is known for his pace, skill, and finishing ability.",
dailyRoutine: "Henry's routine during his playing days included rigorous training sessions, focusing on agility and finishing, and a balanced diet to maintain his athleticism.",
links: {
  instagram: "https://www.instagram.com/thihenry/",
  clubInstagram: "https://www.instagram.com/arsenal/",
  website: "https://www.arsenal.com/historic/players/thierry-henry",
  transfermarkt: "https://www.transfermarkt.com/thierry-henry/profil/spieler/3207"
}
},
    {
title: "Paolo Maldini",
team: "AC Milan",
image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/PaoloMaldini.jpg",
notes: [
  "One of the greatest defenders in football history, known for his leadership and defensive skills."
],
details: {
  birthDate: "June 26, 1968",
  age: "56",
  nationality: "Italian",
  position: "Defender",
  achievements: "5x UEFA Champions League winner, 7x Serie A champion",
  careerGoals: "Known for his defensive prowess rather than goal-scoring",
  height: "186 cm (6'1\")",
  weight: "85 kg (187 lbs)"
},
funFacts: [
  "Maldini spent his entire club career at AC Milan, spanning 25 years.",
  "He is the son of Cesare Maldini, another legendary footballer."
],
biography: "Paolo Maldini is a retired Italian footballer who played as a defender. He is widely regarded as one of the greatest defenders in football history, known for his leadership and defensive skills.",
dailyRoutine: "Maldini's routine during his playing days included focused training on defensive techniques, maintaining peak physical fitness, and a disciplined lifestyle.",
links: {
  instagram: "https://www.instagram.com/paolomaldini/",
  clubInstagram: "https://www.instagram.com/acmilan/",
  website: "https://www.acmilan.com/en/club/hall-of-fame/players/paolo-maldini",
  transfermarkt: "https://www.transfermarkt.com/paolo-maldini/profil/spieler/5817"
}
},
    {
title: "Manuel Neuer",
team: "Bayern Munich",
image: "https://upload.wikimedia.org/wikipedia/commons/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg",
notes: [
  "Revolutionized the goalkeeper position with his 'sweeper-keeper' style."
],
details: {
  birthDate: "March 27, 1986",
  age: "39",
  nationality: "German",
  position: "Goalkeeper",
  achievements: "FIFA World Cup winner, multiple Bundesliga titles",
  careerGoals: "Not applicable (goalkeeper)",
  height: "193 cm (6'4\")",
  weight: "92 kg (203 lbs)"
},
funFacts: [
  "Neuer is known for his exceptional reflexes and ability to play with his feet.",
  "He has been named the IFFHS World's Best Goalkeeper multiple times."
],
biography: "Manuel Neuer is a German professional footballer who plays as a goalkeeper for Bayern Munich and the Germany national team. He is known for his 'sweeper-keeper' style and exceptional reflexes.",
dailyRoutine: "Neuer's routine includes specialized goalkeeper training, focusing on reflexes and footwork, and a strict fitness regimen to maintain his agility and strength.",
links: {
  instagram: "https://www.instagram.com/manuelneuer/",
  clubInstagram: "https://www.instagram.com/fcbayern/",
  website: "https://fcbayern.com/en/teams/professionals/manuel-neuer",
  transfermarkt: "https://www.transfermarkt.com/manuel-neuer/profil/spieler/17259"
}
},
  ],

  podcasters: [
    {
      title: "Andrew Huberman",
      show: "Huberman Lab",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/86/Andrew_D._Huberman%2C_Ph.D..jpg?cropfactor=face&cropposition=center",
      notes: [
        "Neuroscientist and professor at Stanford University.",
        "Hosts a podcast exploring neuroscience and health optimization.",
        "Provides practical advice backed by scientific research."
      ],
      details: {
        education: "Ph.D. in Neuroscience from UC Davis",
        expertise: "Visual system, circadian rhythms, and neuroplasticity",
        podcastLaunch: "2021",
        averageEpisodeLength: "2 hours",
        listeningStats: "Millions of downloads per episode"
      },
      quotes: [
        "The best way to ensure you reach your goals is to make your path sustainable.",
        "Getting sunlight in your eyes first thing in the morning is one of the most powerful things you can do to improve sleep, mood, and focus.",
        "We are designed to go through cycles of stress and rest – not constant stress, not constant rest.",
        "Most people don't suffer from a lack of motivation; they suffer from a lack of clarity."
      ],
      topEpisodes: [
        "Master Your Sleep & Be More Alert When Awake",
        "The Science of How to Optimize Testosterone & Estrogen",
        "Using Your Nervous System to Enhance Performance",
        "Control Pain & Heal Faster with Your Brain"
      ],
      biography: "Dr. Andrew Huberman is a neuroscientist and tenured professor in the Department of Neurobiology at Stanford University School of Medicine. His laboratory studies neural regeneration, neuroplasticity, and brain states such as stress, focus, fear, and optimal performance. In 2021, he launched the Huberman Lab podcast, which quickly became one of the most popular health podcasts globally, known for translating complex neuroscience into practical tools.",
      links: {
        twitter: "https://twitter.com/hubermanlab",
        instagram: "https://www.instagram.com/hubermanlab/",
        youtube: "https://www.youtube.com/c/AndrewHubermanLab",
        website: "https://hubermanlab.com/",
        spotify: "https://open.spotify.com/show/79CkJF3UJTHFV8Dse3Oy0P"
      }
    },
    {
      title: "Lex Fridman",
      show: "Lex Fridman Podcast",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Lex_Fridman_teaching_at_MIT_in_2018.png?cropfactor=face&cropposition=center",
      notes: [
        "AI researcher and MIT professor.",
        "Interviews experts across various fields, including science, technology, and philosophy.",
        "Known for deep, thoughtful conversations."
      ],
      details: {
        education: "Ph.D. in Computer Science from Drexel University",
        expertise: "Artificial intelligence, deep learning, and autonomous vehicles",
        notableGuests: "Elon Musk, Roger Penrose, Joe Rogan",
        podcastStyle: "Long-form, in-depth interviews",
        additionalWork: "Teaches at MIT, researches human-robot interaction"
      },
      quotes: [
        "Love is the answer to most of the suffering in this world.",
        "The most beautiful things in life are on the edge of failure.",
        "There's a kind of magic to our existence that science may never be able to fully explain.",
        "The greatest ideas in human history come from singular minds working in isolation, often with pain and suffering."
      ],
      topEpisodes: [
        "Elon Musk: SpaceX, Mars, Tesla, and the Future of Humanity",
        "Roger Penrose: Physics of Consciousness and the Infinite Universe",
        "Donald Knuth: Algorithms, Complexity, and The Art of Computer Programming",
        "Demis Hassabis: DeepMind - AI, Superintelligence & the Future of Humanity"
      ],
      biography: "Lex Fridman is a research scientist at MIT, focusing on human-centered artificial intelligence and autonomous vehicles. Born in Russia and moving to the United States as a teenager, Fridman combines his technical expertise with a deep interest in philosophy, consciousness, and the nature of intelligence. His podcast features long-form conversations with thought leaders across various domains, characterized by Fridman's contemplative style and profound questions.",
      links: {
        twitter: "https://twitter.com/lexfridman",
        instagram: "https://www.instagram.com/lexfridman/",
        youtube: "https://www.youtube.com/c/lexfridman",
        website: "https://lexfridman.com/",
        spotify: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL"
      }
    },
    {
      title: "Joe Rogan",
      show: "The Joe Rogan Experience",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Joe_Rogan.png?cropfactor=face&cropposition=center",
      notes: [
        "Comedian and UFC commentator.",
        "Hosts one of the most popular podcasts globally.",
        "Features a wide range of guests discussing diverse topics."
      ],
      details: {
        background: "Stand-up comedian, martial artist, and TV host",
        podcastStart: "2009",
        exclusiveDeal: "$100 million Spotify exclusivity contract",
        episodeCount: "Over 2,000 episodes",
        interviewStyle: "Conversational, curious, and often controversial"
      },
      quotes: [
        "Be the hero of your own story.",
        "If you ever start taking things too seriously, just remember that we are talking monkeys on an organic spaceship flying through the universe.",
        "The key to happiness doesn't lay in numbers in a bank account but in the way we make others feel and the way they make us feel.",
        "Someone else's success does not equal a failure for you."
      ],
      topEpisodes: [
        "Elon Musk Smokes Weed",
        "Neil deGrasse Tyson Explains the Universe",
        "Bernie Sanders Discusses Politics",
        "Jordan Peterson's Most Controversial Episode"
      ],
      biography: "Joe Rogan began his career as a stand-up comedian and later gained wider recognition as the host of Fear Factor. His martial arts background led to his role as a UFC commentator. In 2009, he launched The Joe Rogan Experience podcast, which evolved from casual conversations with friends to one of the most influential media platforms in the world, featuring discussions on everything from politics and science to conspiracy theories and psychedelics. In 2020, Spotify acquired exclusive rights to the podcast for a reported $100 million.",
      links: {
        twitter: "https://twitter.com/joerogan",
        instagram: "https://www.instagram.com/joerogan/",
        youtube: "https://www.youtube.com/c/joerogan",
        website: "https://www.joerogan.com/",
        spotify: "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk"
      }
    },
    {
      title: "Cal Newport",
      show: "Deep Questions",
      image: "https://drive.google.com/thumbnail?id=1UhUBBpBwGObFPht7L_P5r_j6ckKT-0cL&sz=w1000-h1000-c-k-no",
      notes: [
        "Computer science professor and author.",
        "Focuses on productivity, deep work, and digital minimalism.",
        "Offers insights on achieving focused success in a distracted world."
      ],
      details: {
        education: "Ph.D. in Computer Science from MIT",
        bestSellingBooks: "Deep Work, Digital Minimalism, So Good They Can't Ignore You",
        academicPosition: "Associate Professor at Georgetown University",
        podcastFocus: "Productivity strategies, focused work, and career development",
        uniqueAspect: "Does not use social media"
      },
      quotes: [
        "What we choose to focus on and what we choose to ignore—plays in defining the quality of our life.",
        "Clarity about what matters provides clarity about what does not.",
        "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy.",
        "Prioritizing convenience over control is a mistake."
      ],
      topEpisodes: [
        "How to Build a Deep Life",
        "Digital Minimalism in Practice",
        "Becoming a Productivity Guru",
        "The Philosophy of Craftsmanship"
      ],
      biography: "Cal Newport is a computer science professor at Georgetown University and a New York Times bestselling author. Unlike many productivity experts, Newport has never had a social media account, giving him a unique perspective on digital distraction. His work focuses on the intersection of technology and society, particularly how technological tools and practices affect our ability to do valuable work, find meaning, and live a good life. His concepts of 'deep work' and 'digital minimalism' have influenced how many people approach their professional and personal lives in the digital age.",
      links: {
        twitter: "https://twitter.com/calnewport",
        instagram: "https://www.instagram.com/calnewport.author/",
        youtube: "https://www.youtube.com/channel/UCze3CYgIWqum3fyHUMUIrhA",
        website: "https://www.calnewport.com/",
        spotify: "https://open.spotify.com/show/0e9lFr3AdJKuCacKJdH099"
      }
    }
  ]
};

// Export the data so it can be imported in scripts.js
// This makes the data available to other JavaScript files 