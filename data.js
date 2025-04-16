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
      fullLyrics: "Hey baby, don't you worry\nEven though the road is rocky\nI'll be coming home to you again\nIt's only a day or two\nI'll be coming home to you again\nIt's only a day or two\nRecognize that the youths are the future\nGot to protect and guide and teach them culture\nThe world's about to blow and we need to know\nGot to protect and teach them right though, hey baby\nMake your life worth living\nDon't be ungrateful\nYou're truly blessed, yeah\nCount your blessings\nLove and happiness\nWhat you want to fulfill, yeah\nI've been gone awhile away from you and I hope you overstand\nThat I've got to do what I must do to be a better man\n'Cause if I was just to act a fool, do nothing with myself\nThen all my blessings would be cursed, my world would be crumble in\nIt's a joy when I sit down and think of the good times that we have\nAnd what we do to make it through when the good turns into bad\nWell, I hope you'll find it in your heart and know these words are true\nAnd please don't fuss because I must go do what I must do\nHey baby, don't you worry, even though the road is rocky\nI'll be coming home to you again\n'Cause if you thought that I was lost, I had to bare my cross\nNow I'm free from all these chains\nA time, a space, a different place, how perfect we might be\nI would be the wind that blows, you'd be that willow tree\nAnd I could never bare the thought of you not by my side\nSo I would be the warmth of day, you'd be the cool of night\nAnd every day I pray to Jah that one day you will see\nAnd overstand the fact I must fulfill my destiny\nI hope you'll find it in your heart and know these words are true\nAnd please don't cry, you know that I must do what I must do\nHey baby, don't you worry, even though the road is rocky\nI'll be coming home to you again\n'Cause if you thought that I was lost, I had to bare my cross\nNow I'm free from all these chains\nWell, and it's not easy\nJah knows how I tried, I tried\nSo don't you get weary (oh God)\nJah knows how I tried, I tried\nAnd God knows that life is one big road\nWith a lot of signs and turns and twist and curves\nEven though the road is rocky\nBut maintain to ride and keep on rockin'\nFrom city to city, backyard to yard\nAnd we be seein' the cites standin' under the lights\nAnd the spot is hot, it's cold and lonely at nights\nAnd I'm feenin' and I'm dreamin' and I'm holdin' you tight\nBut hold on, every single road I rode on\nCome to an end and I'm back home again\nSo baby, please don't cry\n'Cause no valley low and is no mountain high\nAnd our love don't die with the passage of time\nIt just grow more, it just keep strong\nAnd even though I'm gone, I ain't movin' too far\nYou're the light through the dark, shinnin' right through my heart\nSo my journey just start\nEven though the road is rocky\nI'll be coming home to you again\n'Cause if you thought that I was lost, I have to bare my cross\nNow I'm free from all these chains\n'Cause if you thought that I was lost, I have to bare my cross\nNow I'm free from all these chains...",
      streams: "15.2 million",
      awards: "Best Collaboration Award (2008)",
      links: {
        spotify: "https://open.spotify.com/track/1Bsl6Jw7bJtQ4pc7OQREog",
        appleMusic: "https://music.apple.com/us/album/hey-baby-feat-mos-def/1440769931?i=1440769945",
        youtube: "https://www.youtube.com/watch?v=DOTUzWtr5Yg"
      },
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
      lyrics: "Yeah yo yo what time the plane leavin?\nAhhh alright, I see you at the airport\nsamples of r-r-r-r-rock on",
      fullLyrics: "Intro:\nYeah yo yo what time the plane leavin?\nAhhh alright, I see you at the airport\n*samples of \"r-r-r-r-rock on\"*\n\nChorus:\nMemories don't live like people do\nThey always remember you\nWhether things are good or bad, it's just the memories\n\nMemories don't live like people do-o\nBaby don't forget me, I'm a travellin' man\nMovin through places, space and time\nGotta lotta things I got to do\nGod willin' I'm comin back to you\nMy baby boo\n\nI'm a travellin' man\nMovin through places, space and time(space and tiiiime)\nGotta lotta things I got to do\nBut God willin' I'm comin back to you\nBaby boo\nI'm leavin\n\nVerse 1:\nWell go 'head and leave\nThe call heard 'round the world from the wives of mc's\nThese cats is playin all that half a pound\nA garment bag we snatch it down\nAin't got the state but we could prob'ly run a blacker town\nScenarios like this is tear jerkers\nFor the modern mc I ain't a blue collar worker\n'cause this thing called rhymin' no different from coal minin'\nWe both on assignment to unearth the diamond\nWhen you start climbin'\nAnd then I start shinin'\nYou be strugglin' and strivin'\nAnd they think you prime-timin'\nMatain and keep silence make note and observation\nThis confrontation\nThis is the daily operation\nA concentration\nStay focused on my recitation\n'bout to reach my destination with the balls of hesitation\nBaby make the preperation 'cause this ain't no recreation\nThis is pro ball!\nAnd we lettin you know y'all\nAt the show y'all\nDoin' this for dough y'all\nGet the phone call\nAnd I'm ready to blow y'all\n'bout to go y'all\nBeen a pleasure to know y'all\nAnd I'm lettin' you know that...\n\nChorus:\nMemories don't live like people do\nThey always remember you\nWether things are good or bad, it's just the memories\n\nMemories don't live like people do-o\nBaby don't forget me, I'm a travellin' man\nMovin through places, space and time\nGotta lotta things I got to do\nG-d willin I'm comin back to you\nMy baby boo\n\nI'm a travellin' man\nMovin through places, space and time(space and tiiiime)\nGotta lotta things I got to do\nBut inshallah I'm comin back to you\nBaby boo\nI'm leavin\n\nVerse 2:\nBut God willin' I'll be back home\nTo drop these heavy ass bags up off my backbone\nAround the world with a catalog of rap songs\nMy baby girl is walkin, been away for that long\nBut no you haven't well least that's how it seem to me\nMy home town is like a whole different scenery\nThe old timers on the stoop leaning leisurely\nThe new jacks up in the bar smokin greenery\nEasily taken for granted when you up in it but it's sweet scented\nWhen you been down for a minute\nMove around city damage\nBreak it down with the vintage\nThe innovative\nClassical b-boy image\nCollect the winners\n'cause thats the reason that we came here\nThis thing is not a game here\nThe fortune not the fame here\nFrom new york to the cakalaks\nCali in the caddilacs\nChicago know we innovate\nInfiltrate virginia state\nDc make me say your name\nPhilly know we penatrate\nGeorgia make us generate\nLike suns as they create the pace\nThey celebrate to my jams in foreign lands\nEven your mans in japan know who I am\nMinasan, like everybody out in nippon\nSay ichiban, may God have well where your getting from\nPhenomenom, 'scuse me that's a phone call\nIts the show y'all\nTryin' to get this dough y'all\n'bout to blow y'all\nBeen a pleasure to know y'all\nAnd I'm lettin' you know that...\n\nChorus:\nMemories don't live like people do\nThey always remember you\nWether things are good or bad, it's just the memories\n\nMemories don't live like people do-o\nBaby don't forget me, I'm a travellin' man\nMovin through places, space and time\nGotta lotta things I got to do\nBut inshallah I'm comin back to you\nMy baby boo\n\nI'm a travellin' man\nMovin through places, space and time(space and tiiiime)\nGotta lotta things I got to do\nBut g-d willin I'm comin back to you\nBack to you\n\nI'm leeaaavvvvinnn'!\nI'll be back to you\nI'm leeaaavvvvinnn'!\nI'll be back to you\n\nAll over the world we go\nDc all over the world we go\nVa all over the world we go\nThe ? cakalaks? all over the world we go\nLondon all over the world we go\nJapan we go over the world we go\nParis we go over the world we go\n\n(beat playing in background and samples of\n*samples of \"r-r-r-r-rock on\"*)\n1-2, 1-2...all aboard!",
      streams: "8.7 million",
      awards: "Underground Hit of the Year (1999)",
      links: {
        spotify: "https://open.spotify.com/track/5BAwVGuohBVscZWyoLCkkG",
        appleMusic: "https://music.apple.com/us/album/travellin-man-feat-mos-def-remastered/320626506",
        youtube: "https://www.youtube.com/watch?v=YdQ_wn-g5aU"
      },
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
      fullLyrics: "First things first rest in peace Uncle Phil\nFor real, you the only father that I ever knew\nI get my bitch pregnant I'ma be a better you\nProphecies that I made way back in the Ville\nFulfilled, listen even back when we was broke my team ill\nMartin Luther King would have been on Dreamville\nTalk to a nigga\nOne time for my LA sisters\nOne time for my LA hoes\nLame niggas can't tell the difference\nOne time for a nigga who knows\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nNo role models and I'm here right now\nNo role models to speak of\nSearchin' through my memory, my memory\nI couldn't find one\nLast night I was gettin' my feet rubbed\nBy the baddest bitch, not Trina, but I swear to God\nThis bitch will make you call your girl up and tell her, \"Hey, what's good?\nSorry I'm never comin' home I'ma stay for good\"\nThen hang the phone up, and proceed to lay the wood\nI came fast like 9-1-1 in white neighborhoods\nAin't got no shame 'bout it\nShe think I'm spoiled and I'm rich 'cause I can have any bitch\nI got defensive and said \"Nah, I was the same without it\"\nBut then I thought back, back to a better me\nBefore I was a B-list celebrity\nBefore I started callin' bitches, \"bitches\" so heavily\nBack when you could get a platinum plaque without no melody\nYou wasn't sweatin' me\nOne time for my LA sisters\nOne time for my LA hoes\nLame niggas can't tell the difference\nOne time for a nigga who knows\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nI want a real love, dark skinned and Aunt Viv love\nThat Jada and that Will love\nThat leave a toothbrush at your crib love\nAnd you ain't gotta wonder whether that's your kid love\nNigga I don't want no bitch from reality shows\nOut of touch with reality hoes\nOut in Hollywood bringin' back 5 or 6 hoes\nFuck 'em then we kick em' to the door\nNigga you know how it go\nShe deserved that, she a bird, it's a bird trap\nYou think if I didn't rap she would flirt back?\nTakin' off her skirt, let her wear my shirt before she leave\nI'ma need my shirt back\nNigga you know how it go\nOne time for my LA sisters\nOne time for my LA hoes\nLame niggas can't tell the difference\nOne time for a nigga who knows\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nThere's an old saying in Tennessee, I know it's in Texas\nProbably in Tennessee, that says\n\"Fool me once, shame on\nShame on you\"\nFool me, we can't get fooled again\nFool me one time shame on you\nFool me twice, can't put the blame on you\nFool me three times, fuck the peace signs\nLoad the chopper, let it rain on you\nFool me one time shame on you\nFool me twice, can't put the blame on you\nFool me three times, fuck the peace signs\nLoad the chopper, let it rain on you\nMy only regret was too young for Lisa Bonet\nMy only regret was too young for Nia Long\nNow all I'm left with is hoes from reality shows\nHand her a script the bitch probably couldn't read along\nMy only regret was too young for Sade Adu\nMy only regret could never take Aaliyah home\nNow all I'm left with is hoes up in Greystone\nWith the stale face cause they know it's they song\nShe shallow but the pussy deep (she shallow, she shallow)\nShe shallow but the pussy deep (she shallow, she shallow)\nShe shallow but the pussy deep (she shallow, she shallow)\nShe shallow but the pussy deep (she shallow, she shallow)\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved\nDon't save her, she don't wanna be saved",
      streams: "1.2 billion",
      awards: "Multi-Platinum Certification",
      links: {
        spotify: "https://open.spotify.com/track/68Dni7IE4VyPkTOH9mRWHr",
        appleMusic: "https://music.apple.com/us/album/no-role-modelz/1600766204?i=1600766436",
        youtube: "https://www.youtube.com/watch?v=J-6eUsSKv7Q"
      },
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
      lyrics: "People flee\nThe glances of the others\nEach one is in his own stress\nEveryone trace his own path\nWithout raising the eyes towards people\n",
      fullLyrics: "People flee\nThe glances of the others\nEach one is in his own stress\nEveryone trace his own path\nWithout raising the eyes towards people\n\n[Refrain]\nVision of ordinary thing that are unusual\nWe remain alone in the city\nWe all need human heat (bis)\n\nThis world is acting as blind\nWe are seeing the truth\nEveryone traces is own path\nWithout raising the eyes towards people (bis)\n\n[Refrain]\nWe only need a little something\nTo fix our human relations\nWe only need a little something\nTo clear the atmosphere\nBecause indifference will reign (bis)\n\n[Refrain]",
      streams: "3.5 million",
      awards: "Best Reggae Track (European Reggae Awards)",
      links: {
        spotify: "https://open.spotify.com/track/1pJFPBsuD7mkANqolDZQR9",
        appleMusic: "https://music.apple.com/us/album/me-say/250197870?i=250197943",
        youtube: "https://www.youtube.com/watch?v=ni36rdQa2XE"
      },
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
      lyrics: "My love has got no money, he's got his strong beliefs\nMy love has got no power, he's got his strong beliefs\nMy love has got no fame, he's got his strong beliefs\nMy love has got no money, he's got his strong beliefs\nWant more and more, people just want more and more\n",
      fullLyrics: "My love has got no money, he's got his strong beliefs\nMy love has got no power, he's got his strong beliefs\nMy love has got no fame, he's got his strong beliefs\nMy love has got no money, he's got his strong beliefs\nWant more and more, people just want more and more\nFreedom and love, what he's looking for\nWant more and more, people just want more and more\nFreedom and love, what he's looking for\nFreed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nFreed from desire\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nMy love has got no money, he's got his strong beliefs\nMy love has got no power, he's got his strong beliefs\nMy love has got no fame, he's got his strong beliefs\nMy love has got no money, he's got his strong beliefs\nWant more and more, people just want more and more\nFreedom and love, what he's looking for\nWant more and more, people just want more and more\nFreedom and love, what he's looking for\nFreed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nFreed from desire, mind and senses purified\nFreed from desire\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na\nNa-na-na-na-na, na-na, na-na-na, na-na-na"
,
      streams: "350 million",
      awards: "Multiple Gold and Platinum certifications",
      links: {
        spotify: "https://open.spotify.com/track/3u5N55tHf7hXATSQrjBh2q",
        appleMusic: "https://music.apple.com/us/album/freed-from-desire/287591338?i=287592533",
        youtube: "https://www.youtube.com/watch?v=p3l7fgvrEKM"
      },
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
      fullLyrics: "[Intro: Gerry O'Driscoll]\n…And I am not frightened of dying, you know\nAny time will do, I don't mind\nWhy should I be frightened of dying?\nThere's no reason for it\nYou've gotta go sometime\n\n[Non-Lyrical Vocals: Clare Torry]\n\n[Interlude: Patricia Watts]\nI never said I was frightened of dying\n\n[Non-Lyrical Vocals: Clare Torry]"
,
      streams: "125 million",
      awards: "Part of the album that stayed on Billboard charts for 741 weeks",
      links: {
        spotify: "https://open.spotify.com/track/2TjdnqlpwOjhijHCwHCP2d",
        appleMusic: "https://music.apple.com/us/album/the-great-gig-in-the-sky/1065973699?i=1065973707",
        youtube: "https://www.youtube.com/watch?v=mPGv8L3a_sY"
      },
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
  transfermarkt: "https://www.transfermarkt.com/lamine-yamal/profil/spieler/937958"
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
  instagram: "https://www.instagram.com/oficialrc3/",
  clubInstagram: "https://www.instagram.com/realmadrid/",
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
  instagram: "https://www.instagram.com/thierryhenry/",
  clubInstagram: "https://www.instagram.com/arsenal/",
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
  transfermarkt: "https://www.transfermarkt.com/paolo-maldini/profil/spieler/5803"
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
        episodeCount: "100+",
        audience: "Millions of downloads per episode",
        podcastStyle: "Scientific, educational, research-based"
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
        podcastLaunch: "2018",
        episodeCount: "300+",
        podcastStyle: "Long-form, philosophical, in-depth interviews",
        notableGuests: "Elon Musk, Roger Penrose, Joe Rogan",
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
        expertise: "Mixed martial arts, comedy, and pop culture",
        podcastLaunch: "2009",
        episodeCount: "2000+",
        podcastStyle: "Conversational, curious, and often controversial",
        notableDeal: "$100 million Spotify exclusivity contract",
        notableGuests: "Elon Musk, Jordan Peterson, Bernie Sanders, Neil deGrasse Tyson"
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
        expertise: "Productivity, deep work, digital minimalism, and tech–society interaction",
        podcastLaunch: "2020",
        episodeCount: "200+",
        podcastStyle: "Advice-based, structured, productivity-focused",
        academicPosition: "Associate Professor at Georgetown University",
        bestSellingBooks: "Deep Work, Digital Minimalism, So Good They Can't Ignore You",
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
        twitter: "https://x.com/ProfCalNewport",
        youtube: "https://www.youtube.com/@CalNewportMedia",
        website: "https://www.calnewport.com/"
      }
    }
  ]
};

// Export the data so it can be imported in scripts.js
// This makes the data available to other JavaScript files