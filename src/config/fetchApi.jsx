import axios from "axios";





const fetchFromApi = async(title)=>{
  const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: `${title}`,
      part: 'snippet,id',
      regionCode: 'ET',
      maxResults: '50',
      order: 'date',
      // pageToken: 'CDIQAA'
    },
    headers: {
      'X-RapidAPI-Key': '91c1f39d51msh21e425064297fcap10772ejsn99273125779c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
   return await axios.request(options);
    
}

export default fetchFromApi;
export const utubeData=
[
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "VyzEp4te7Hs"
      },
      "snippet": {
          "publishedAt": "2023-08-31T12:14:30Z",
          "channelId": "UC3v5P9D5-oikWMyM95EnizQ",
          "title": "Mesay Tefera ft. Hewan Gebrewold Mashup",
          "description": "shorts Mesay Tefera ft. Hewan Gebrewold Mashup #mesaytefera #hewangebrewold #prodfre #ethiopian #ethiopianmusic ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/VyzEp4te7Hs/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/VyzEp4te7Hs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/VyzEp4te7Hs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Prod Fre",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T12:14:30Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "UXs_VFTDS0U"
      },
      "snippet": {
          "publishedAt": "2023-08-31T12:09:15Z",
          "channelId": "UC3v5P9D5-oikWMyM95EnizQ",
          "title": "Mesay Tefera ft. Hewan Gebrewold | መሳይ ተፈራ ft. ሄዋን ገብረወልድ | Mashup By ProdFre",
          "description": "Mesay Tefera ft. Hewan Gebrewold Mashup Mesay Tefera - Betam Enji Betam Hewan Gebrewold - Tfelegaleh Official ProdFre ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/UXs_VFTDS0U/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/UXs_VFTDS0U/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/UXs_VFTDS0U/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Prod Fre",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T12:09:15Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "GryQ9XIn3xA"
      },
      "snippet": {
          "publishedAt": "2023-08-31T11:38:04Z",
          "channelId": "UCNM8zZ-3IOp_qPMGZaJOvvQ",
          "title": "Addis Legesse - Ewedeshailu - አዲስ ለገሰ - እወድሻለሁ - New Ethiopian Music 2023 (Official Video)",
          "description": "አዲስ ለገሰ - እወድሻለሁ . . . . . ሰብስክራይብ ያድርጉ ቤተሰብ ይሁኑ @hulumedia24 ...............//................ የቴሌግራም ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/GryQ9XIn3xA/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/GryQ9XIn3xA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/GryQ9XIn3xA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Hulu Media",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T11:38:04Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "PWVLMhc33zI"
      },
      "snippet": {
          "publishedAt": "2023-08-31T11:21:02Z",
          "channelId": "UCjmFFtQDsaiLU82EsGFs6bg",
          "title": "Hanna Girma - Bante Lay - ሃና ግርማ - ባንተ ላይ - New Ethiopian Music 2023 (Official Video)",
          "description": "ethiopianmusic #nahomrecordsinc #hanagirma Hana Girma - Bante Lay - ሃና ግርማ - ባንተ ላይ - New Ethiopian Music ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/PWVLMhc33zI/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/PWVLMhc33zI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/PWVLMhc33zI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "TYD Entertainment",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T11:21:02Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "u2WAlTZXi4I"
      },
      "snippet": {
          "publishedAt": "2023-08-31T10:18:52Z",
          "channelId": "UCsPPEhfvWCuizmgCpeDyEtQ",
          "title": "Veronica adane | New Ethiopia music video 2023 | seifu on ebs | ebs | ebs cinema | #shorts #fact",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/u2WAlTZXi4I/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/u2WAlTZXi4I/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/u2WAlTZXi4I/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "kana cinema / ቃና ሲኒማ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T10:18:52Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "JWdHdfBAezw"
      },
      "snippet": {
          "publishedAt": "2023-08-31T09:13:49Z",
          "channelId": "UCw527CsYYlcRVR3W2ywMV0A",
          "title": "Ibiza Summer Mix 2023 🍓 Best Of Tropical Deep House Music Chill Out Mix 2023🍓 Chillout Lounge #247",
          "description": "BestOfVocalDeepHouse #RelaxingMusic #housemusic2023 @SoulDeep88 @ImagineDeep68 @Depaiva1997 Ibiza Summer ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/JWdHdfBAezw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/JWdHdfBAezw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/JWdHdfBAezw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Helios Deep",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T09:13:49Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "78dmMRSNeME"
      },
      "snippet": {
          "publishedAt": "2023-08-31T09:07:27Z",
          "channelId": "UCBKP-dvj2ovaeJThDdoreKQ",
          "title": "Abush Zeleke - Yitayal Sembere- አቡሽ ዘለቀ (ይታያል ሰምበሬ)- Ethiopian Music",
          "description": "Yitayal Sembere - ይታያል ሰምበሬ - New Ethiopian Music 2023 - From Brand new Abush Zeleke Album - Ende Abate ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/78dmMRSNeME/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/78dmMRSNeME/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/78dmMRSNeME/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "LALA LYRICS HD",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T09:07:27Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "iHnMNhyFlG8"
      },
      "snippet": {
          "publishedAt": "2023-08-31T08:08:26Z",
          "channelId": "UCp6_KuNhT0kcFk-jXw9Tivg",
          "title": "Music Mix 2023 🎧 EDM Remixes of Popular Songs 🎧 EDM Gaming Music",
          "description": "Music Mix 2023 EDM Remixes of Popular Songs EDM Gaming Music STREAM NOW: https://lnk.to/remixplaylist11 00:00 ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/iHnMNhyFlG8/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/iHnMNhyFlG8/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/iHnMNhyFlG8/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Magic Music",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T08:08:26Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "YlxiHYH6Nck"
      },
      "snippet": {
          "publishedAt": "2023-08-31T05:08:36Z",
          "channelId": "UC5BMQOsAB8hKUyHu9KI6yig",
          "title": "Picture - HYO(GIRLS’ GENERATION) [Music Bank] | KBS WORLD TV 230825",
          "description": "Music Bank 2023 : https://youtube.com/playlist?list=PLMf7VY8La5RHGe90QRg_fH__B1NrbOcOb 2022 ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/YlxiHYH6Nck/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/YlxiHYH6Nck/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/YlxiHYH6Nck/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KBS WORLD TV",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-31T05:08:36Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "VYt3CYidHTU"
      },
      "snippet": {
          "publishedAt": "2023-08-31T03:19:32Z",
          "channelId": "UCw527CsYYlcRVR3W2ywMV0A",
          "title": "Ibiza Summer Mix 2023 🍓 Best Of Tropical Deep House Music Chill Out Mix 2023🍓 Chillout Lounge #248",
          "description": "BestOfVocalDeepHouse #RelaxingMusic #housemusic2023 @SoulDeep88 @ImagineDeep68 @Depaiva1997 Ibiza Summer ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/VYt3CYidHTU/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/VYt3CYidHTU/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/VYt3CYidHTU/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Helios Deep",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-31T03:19:32Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "nfFc13q-aH8"
      },
      "snippet": {
          "publishedAt": "2023-08-31T00:08:42Z",
          "channelId": "UCPsfM4vuu_FmjQXfWCHdh4g",
          "title": "Relaxing Sleep Music 24/7, Healing Music, Meditation Music, Spa Music, Sleep Music, Study Music",
          "description": "Experience deep sleep anes. Soft, breathable, and designed to block out external light for a rejuvenating slumber: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/nfFc13q-aH8/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/nfFc13q-aH8/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/nfFc13q-aH8/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PrizeSleep-Sleeping Music For Deep Sleeping",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-31T00:08:42Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "TUBA-eFu5PY"
      },
      "snippet": {
          "publishedAt": "2023-08-30T23:00:14Z",
          "channelId": "UCrMtVm7FGrOZxYQrLMPv7Pw",
          "title": "Dattatreya Ashtachakra Stotram - Lord Dattatreya Bhakti Songs 2023 - Telugu Devotional Songs 2023",
          "description": "Watch ▻Dattatreya Ashtachakra Stotram - Lord Dattatreya Bhakti Songs 2023 - Telugu Devotional Songs 2023 #dattatreyasongs ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/TUBA-eFu5PY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/TUBA-eFu5PY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/TUBA-eFu5PY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Devotional Time",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T23:00:14Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "blb7xd2XPpk"
      },
      "snippet": {
          "publishedAt": "2023-08-30T22:00:10Z",
          "channelId": "UCMUxOJqZLfjM6F_U6YVtZ4Q",
          "title": "The New eSprinter | BIGe Music Video 2023",
          "description": "Watch our new BIGe film that shows the new features of the new eSprinter in a music video. Sound on! The new eSprinter makes ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/blb7xd2XPpk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/blb7xd2XPpk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/blb7xd2XPpk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Mercedes-Benz Vans",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T22:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "9-KxqSW8VPY"
      },
      "snippet": {
          "publishedAt": "2023-08-30T20:31:30Z",
          "channelId": "UCKvKjZ3l9azWz4F49q2R3tQ",
          "title": "Rain Jazz ~ Relaxing Jazz Instrumental Music ☕ Cozy Coffee Shop Ambience ~ Warm Jazz Music to Sleep",
          "description": "Rain Jazz ~ Relaxing Jazz Instrumental Music ☕ Cozy Coffee Shop Ambience ~ Warm Jazz Music to Sleep This is a compilation ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/9-KxqSW8VPY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/9-KxqSW8VPY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/9-KxqSW8VPY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Coffee Relaxing Jazz",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T20:31:30Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "v_6wE1nOiL4"
      },
      "snippet": {
          "publishedAt": "2023-08-30T19:00:10Z",
          "channelId": "UC4cvpsB_dAX8i5vdaBB-96w",
          "title": "That Mexican OT - 15 Missed Calls (feat. Sploosh God) (Official Music Video)",
          "description": "Watch That Mexican OT's official music video for \"15 Missed Calls\" feat. Sploosh God from the new project, \"Lonestar Luchador\" ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/v_6wE1nOiL4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/v_6wE1nOiL4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/v_6wE1nOiL4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "That Mexican OT",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T19:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "J1tm0_-2T1I"
      },
      "snippet": {
          "publishedAt": "2023-08-30T17:33:30Z",
          "channelId": "UCJrmJEaR1iqnJy0GoXt2-eQ",
          "title": "Medane_Hana_Tekle_(መዳኔ_ሃና_ተክሌ)_instrumental_Lyrics_ ‎@bilolyrics9625  relaxing_duet",
          "description": "original songs ➡️https://youtu.be/idsI1H9pA6Q?si=zq4y55YPwjm82DC2 #hanatekleofficial #christiansongs #ethiopianmusic ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/J1tm0_-2T1I/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/J1tm0_-2T1I/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/J1tm0_-2T1I/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bilo Lyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T17:33:30Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "BDF1-RZfy7E"
      },
      "snippet": {
          "publishedAt": "2023-08-30T17:12:38Z",
          "channelId": "UCHNl4qushEWLXrnsH0tvzeA",
          "title": "ቃልህን አመንኩት Track 9  ከ ፩ምዕራፍ Album           ቴዲ ታደሰ KELEHEN AMENKUT vol.4     Teddy Tadesse 2016/2023",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/BDF1-RZfy7E/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/BDF1-RZfy7E/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/BDF1-RZfy7E/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bire Man",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T17:12:38Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "imJ8WmIU-rM"
      },
      "snippet": {
          "publishedAt": "2023-08-30T17:00:34Z",
          "channelId": "UCYWqRcg3qhWwJzGGtCZ6enA",
          "title": "Lily Williams - Things That Fall (Official Music Video)",
          "description": "Lily Williams - Things That Fall (Official Music Video) Song Out Now: https://lily-williams.lnk.to/newsong Produced By: Fizzy Films ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/imJ8WmIU-rM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/imJ8WmIU-rM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/imJ8WmIU-rM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Lily Williams",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T17:00:34Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "vIb65D5LtVo"
      },
      "snippet": {
          "publishedAt": "2023-08-30T16:31:09Z",
          "channelId": "UCXRkCHbZ285NTSuGhPjAKdg",
          "title": "በል ከቻልክ - Papy X Abissinya (official Audio)",
          "description": "በል ከቻልክ New music performed by papy & Abissinya produced by / papy / written by /abissinya / & /papy / mix and mastering ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/vIb65D5LtVo/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/vIb65D5LtVo/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/vIb65D5LtVo/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "PAPYMUSIC",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T16:31:09Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "PRf_Ub74sZ4"
      },
      "snippet": {
          "publishedAt": "2023-08-30T15:14:17Z",
          "channelId": "UCJhjE7wbdYAae1G25m0tHAA",
          "title": "THURSDAY MORNING JAZZ: Cozy Relaxation with Jazz &amp; Bossa Nova for Work and Study",
          "description": "Listen Everywhere → Good Morning THURSDAY: https://lnk.to/IkpNR1R5. Please Subscribe!",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/PRf_Ub74sZ4/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/PRf_Ub74sZ4/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/PRf_Ub74sZ4/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Cafe Music BGM channel",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-30T15:14:17Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "gzZE8KcmSjY"
      },
      "snippet": {
          "publishedAt": "2023-08-30T15:07:50Z",
          "channelId": "UCPM3ulxUC0j8PE-o2YGPAyg",
          "title": "Top 100 Songs Of 2023 - The Weeknd, Maroon 5, Ed Sheeran, Justin Bieber, Dua Lipa, Adele, Ava Max",
          "description": "Top 100 Songs Of 2023 - The Weeknd, Maroon 5, Ed Sheeran, Justin Bieber, Dua Lipa, Adele, Ava Max ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/gzZE8KcmSjY/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/gzZE8KcmSjY/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/gzZE8KcmSjY/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Billboard Hot 100",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-30T15:07:50Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "bzVTONHA5h4"
      },
      "snippet": {
          "publishedAt": "2023-08-30T15:00:26Z",
          "channelId": "UC2t5bjwHdUX4vM2g8TRDq5g",
          "title": "Feeding Frenzy | Briar Cinematic - League of Legends",
          "description": "After years behind bars in Noxus, Briar is starving for some action. Video created in collaboration with Brunch Eddy. League of ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/bzVTONHA5h4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/bzVTONHA5h4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/bzVTONHA5h4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "League of Legends",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T15:00:26Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "bv1a-OrikdM"
      },
      "snippet": {
          "publishedAt": "2023-08-30T14:01:16Z",
          "channelId": "UCvZHe-SP3xC7DdOk4Ri8QBw",
          "title": "Imagine Dragons - Children of the Sky (a Starfield song): World Fly Through",
          "description": "Explore the many worlds of Starfield with a special song from Imagine Dragons. Starfield launches on September 6 on Xbox ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/bv1a-OrikdM/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/bv1a-OrikdM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/bv1a-OrikdM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Bethesda Softworks",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T14:01:16Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "Vim5B17CCEw"
      },
      "snippet": {
          "publishedAt": "2023-08-30T13:28:53Z",
          "channelId": "UCXklXxs7e6XFTFOPo_8pR7g",
          "title": "Bethlehem Sherefedin Hanna Girma - Bante Lay - ሃና ግርማ - ባንተ ላይ - New Ethiopian Music 2023",
          "description": "share #like #follow #BanteLay #HannaGirma #ethiopianmoive #teddyafro #teddy #teddylivemusic #teddymusic #rophnan ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Vim5B17CCEw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Vim5B17CCEw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Vim5B17CCEw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Line tube ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T13:28:53Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "e8wstQTSMew"
      },
      "snippet": {
          "publishedAt": "2023-08-30T13:18:59Z",
          "channelId": "UCBNIT_ZjGTX7-XSd8N6jV4A",
          "title": "check out my latest music video ጥቁር አንበሳ #debutalbum #ethiopianmusic #independentartist #musicvideo",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/e8wstQTSMew/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/e8wstQTSMew/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/e8wstQTSMew/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "DAGMAWI WUBE",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T13:18:59Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "Rc4jxLWaA2o"
      },
      "snippet": {
          "publishedAt": "2023-08-30T13:10:47Z",
          "channelId": "UCr-Bo2moY0_aHQmEjdGsYwA",
          "title": "Eyob Mekonnen Negen Layew Lyrics / እዮብ መኮንን ነገን ላየው#lyrics #musiclyrics #music #90s #ethiopiamusic",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Rc4jxLWaA2o/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Rc4jxLWaA2o/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Rc4jxLWaA2o/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Dag Music Lyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T13:10:47Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "0IIL4AsrxWQ"
      },
      "snippet": {
          "publishedAt": "2023-08-30T13:00:00Z",
          "channelId": "UCdVg2kngSxi8np_VW44cTNA",
          "title": "Speed up tiktok audios 2023 Part 117",
          "description": "Sped Up Audios 2023 Thank you for listening!!! tags: tiktok audios, speed up songs, sped up playlist, edit audios, good vibes, ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/0IIL4AsrxWQ/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/0IIL4AsrxWQ/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/0IIL4AsrxWQ/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Mina ♡",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T13:00:00Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "uTVk-FRJRM4"
      },
      "snippet": {
          "publishedAt": "2023-08-30T11:45:48Z",
          "channelId": "UCWo-yLJLfPJlFNRAXvIiyOg",
          "title": "BiTANYA X JAY MATIC X DC DIAMOND - New Ethiopian Music 2023 {official}",
          "description": "Natanim - Mehedsh - New Ethiopian Music 2023 #ethiopia #ethiopianmusic #ethiopianews #ethiopiantiktok # #habeshatiktok ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/uTVk-FRJRM4/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/uTVk-FRJRM4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/uTVk-FRJRM4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Arhibu Tv",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T11:45:48Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "y4jCSQrP9kc"
      },
      "snippet": {
          "publishedAt": "2023-08-30T11:47:04Z",
          "channelId": "UCshcwYW4LuNuKp3DsfPIh1w",
          "title": "Hanna Girma - Bante Lay - ሃና ግርማ - ባንተ ላይ - New Ethiopian Music 2023 (lyric Video)",
          "description": "gi d ebs ethiopian music kana tv jacky gosee music amharic music ethiopian new ethiopian music 2022 ebs tv tigrigna music ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/y4jCSQrP9kc/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/y4jCSQrP9kc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/y4jCSQrP9kc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "mn alu Tube",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T11:47:04Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "nS94wE_9qe0"
      },
      "snippet": {
          "publishedAt": "2023-08-30T11:30:17Z",
          "channelId": "UCvt5p3A11M8zd8iJPCC5XvQ",
          "title": "Trending tiktok 2023🍹 Tiktok viral songs ~ Tiktok mashup 2023",
          "description": "tiktokviral #trendingtiktok #lovelifelyrics Trending tiktok 2023   Tiktok viral songs ~ Tiktok mashup 2023 Send us song ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/nS94wE_9qe0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/nS94wE_9qe0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/nS94wE_9qe0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Love Life Lyrics",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T11:30:17Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "OpX68s-hiQ0"
      },
      "snippet": {
          "publishedAt": "2023-08-30T11:22:18Z",
          "channelId": "UCMmLGS7kiNavue2neSgc_cw",
          "title": "sped up tiktok audios for your edits p.26 +timestamps ☆",
          "description": "thank you for watching, please like and subscribe :) #spedup #spedupsongs ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/OpX68s-hiQ0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/OpX68s-hiQ0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/OpX68s-hiQ0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "lolisounds",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T11:22:18Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "Oaqc-J_E3HE"
      },
      "snippet": {
          "publishedAt": "2023-08-30T10:37:10Z",
          "channelId": "UCwsqTMolm3mSpcQHQh2CJNA",
          "title": "GREATEST LOVE SONG Jim Brickman, David Pomeranz, Rick Price | Love Song Forever 2023",
          "description": "romanticlovemusic #lovesongs #romanticsongs #lovesong #lovesongs80s #bestlovesongs #lovesong80s90s GREATEST LOVE ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/Oaqc-J_E3HE/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/Oaqc-J_E3HE/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/Oaqc-J_E3HE/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": " OPM Channel ",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-30T10:37:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "zPAnI05GNKA"
      },
      "snippet": {
          "publishedAt": "2023-08-30T10:30:30Z",
          "channelId": "UCG0SzK_t4-Ylf1yZq9Xmi_g",
          "title": "🔥Cool Music Mix 2023 ♫ Best of EDM ♫ Best NCS Gaming Music Mix 2023",
          "description": "Welcome to Freeme NCS☆ ------- ▻Cool Music Mix 2023 ♫ Best of EDM ♫ Best NCS Gaming Music Mix 2023 ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/zPAnI05GNKA/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/zPAnI05GNKA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/zPAnI05GNKA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Freeme NCS Music",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T10:30:30Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "EYM1BxyVHBY"
      },
      "snippet": {
          "publishedAt": "2023-08-30T09:30:03Z",
          "channelId": "UCRUebU5JcAx7adT8nampDUw",
          "title": "ጥላሁን ገሰሰ - ኢትዮጵያ ከግጥም ጋር || Tilahun Gessese - Ethiopia music lyrics video",
          "description": "Subscribe to Musika Lyrics and turn on notifications to stay updated on all new uploads! Tilahun Gessese's Ethiopia music with ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/EYM1BxyVHBY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/EYM1BxyVHBY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/EYM1BxyVHBY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Musika lyric's",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T09:30:03Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "eSphGKK-GDw"
      },
      "snippet": {
          "publishedAt": "2023-08-30T09:22:58Z",
          "channelId": "UCmH0GYC0Tfxfjkrwyiu-EeA",
          "title": "New Ethiopian Cover music 2023 by Ermias Getachew #Tsegaye Eshetu song #Ethiopia_music",
          "description": "Credit : Artist Tsegaye Eshetu video link: https://youtube.com/@hibirRecording?si=MG9rBcynOD07lF7H Ethiopia new music New ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/eSphGKK-GDw/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/eSphGKK-GDw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/eSphGKK-GDw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Nigat English",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T09:22:58Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "ZqGLJa4jMac"
      },
      "snippet": {
          "publishedAt": "2023-08-30T07:50:13Z",
          "channelId": "UCnChIdV8OWTi6UWx-Ki_O2g",
          "title": "Hanna Girma - Bante Lay - ሃና ግርማ - ባንተ ላይ - New Ethiopian Music 2023 (Official Video)",
          "description": "share #like #follow #BanteLay #HannaGirma #ethiopianmoive #teddyafro #teddy #teddylivemusic #teddymusic #rophnan ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/ZqGLJa4jMac/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/ZqGLJa4jMac/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/ZqGLJa4jMac/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Firtuna",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T07:50:13Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "lScX0QDNk_M"
      },
      "snippet": {
          "publishedAt": "2023-08-30T07:00:10Z",
          "channelId": "UCdWmirD6MzuTFeUAtAv4TKQ",
          "title": "Best Music Mix 2023 🎧 Mashups &amp; Remixes Of Popular Songs 🎧 EDM Bass Boosted Music Mix",
          "description": "Listen on Spotify: https://magicmusic.link/BestCarPlaylist https://deepuniverse.lnk.to/HouseMusic ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/lScX0QDNk_M/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/lScX0QDNk_M/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/lScX0QDNk_M/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Forever Young",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T07:00:10Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "a-N-XUv67II"
      },
      "snippet": {
          "publishedAt": "2023-08-30T06:39:49Z",
          "channelId": "UCPaLi5xEyzuffjwXHJfeBJQ",
          "title": "Deep House 2023 I Chill Out Feel Good Music",
          "description": "Subscribe: https://www.youtube.com/channel/UCPaLi5xEyzuffjwXHJfeBJQ?sub_confirmation=1 Listen to our Latest Tracks: ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/a-N-XUv67II/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/a-N-XUv67II/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/a-N-XUv67II/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Pete Bellis & Tommy",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T06:39:49Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "lZXEuiw7uYk"
      },
      "snippet": {
          "publishedAt": "2023-08-30T04:56:49Z",
          "channelId": "UCVQN8ZVUjrFAkTWdRVQPC6g",
          "title": "Gossaye tesfaye-evangadi|ጎሳዬ ተስፋዬ-ኢቫንጋዲ",
          "description": "Seifuonebs#babi#aletube#donkeytube#abrelohd#asertad#atr#abelbirhanu#hopemusic#hopeentertainment#nahomrecords# ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/lZXEuiw7uYk/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/lZXEuiw7uYk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/lZXEuiw7uYk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Dream Studio ",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T04:56:49Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "kYQGAzUseeY"
      },
      "snippet": {
          "publishedAt": "2023-08-30T03:38:19Z",
          "channelId": "UCTJ9Qg-1vBu2pP_YrWUfGnQ",
          "title": "IBIZA SUMMER MIX 2023 🍓 Best Of Tropical Deep House Music Chill Out Mix 🍓 Chillout Lounge",
          "description": "BestOfVocalDeepHouse #RelaxingMusic #HouseMusic2023 IBIZA SUMMER MIX 2023 Best Of Tropical Deep House Music ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/kYQGAzUseeY/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/kYQGAzUseeY/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/kYQGAzUseeY/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Miracle Music",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-30T03:38:19Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "3RFewcHKNec"
      },
      "snippet": {
          "publishedAt": "2023-08-30T02:00:01Z",
          "channelId": "UCUjBuJXx0nXvWsJ8Ow8umuQ",
          "title": "#cootie #howyoulivin #trending #tik tok #shorts #reels #music #bicfizzle #viral",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/3RFewcHKNec/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/3RFewcHKNec/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/3RFewcHKNec/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Cootie",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T02:00:01Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "m64FlI-LnWg"
      },
      "snippet": {
          "publishedAt": "2023-08-30T01:42:57Z",
          "channelId": "UCNElJ4ZqXXTViaFAckNgEpQ",
          "title": "We ain’t got it easy anymore 🖤 #easy #music #shorts",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/m64FlI-LnWg/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/m64FlI-LnWg/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/m64FlI-LnWg/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Alexandra Kay",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T01:42:57Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "3J0gxpmPkIE"
      },
      "snippet": {
          "publishedAt": "2023-08-30T01:07:05Z",
          "channelId": "UCN4ag-1NWoZ9s9Sj8EZJ-Yg",
          "title": "SI TE SABES EL TIKTOK BAILA - 2023🔥| KCY TikTok",
          "description": "Si Te Sabes El TikTok Baila! 2023 ✓ ACTIVA LA CAMPANITA   ✓ DALE LIKE ✓CONTACTO: infokcy.pe@gmail.com ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/3J0gxpmPkIE/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/3J0gxpmPkIE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/3J0gxpmPkIE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "KCY TikTok",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T01:07:05Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "-i73kagGG-o"
      },
      "snippet": {
          "publishedAt": "2023-08-30T00:42:41Z",
          "channelId": "UCk35YdCoXoFSEEiU-MUeMAQ",
          "title": "Top Songs 2023 🎶 New Popular Songs 2023 🎶 Best English Songs ( Best Pop Music Playlist ) on Spotify",
          "description": "Top Songs 2023 New Popular Songs 2023 Best English Songs ( Best Pop Music Playlist ) on Spotify Thanks for watching ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/-i73kagGG-o/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/-i73kagGG-o/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/-i73kagGG-o/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Pop internacional",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-30T00:42:41Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "i0FLn9j60Ys"
      },
      "snippet": {
          "publishedAt": "2023-08-29T23:00:30Z",
          "channelId": "UCi4vci-25S566Ll2dlHta2A",
          "title": "Top 100 Songs of 2022 2023 - Billboard Hot 100 This Week - Best Pop Music Playlist on Spotify 2023",
          "description": "Top 100 Songs of 2022 2023 - Billboard Hot 100 This Week - Best Pop Music Playlist on Spotify 2023 ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/i0FLn9j60Ys/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/i0FLn9j60Ys/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/i0FLn9j60Ys/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Music Collection",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-29T23:00:30Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "HQycpJWffp0"
      },
      "snippet": {
          "publishedAt": "2023-08-29T22:16:38Z",
          "channelId": "UC4zvcd2F0UebXfG4LfygTmQ",
          "title": "Old Vs New Bollywood Mashup 2023 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2023",
          "description": "Old Vs New Bollywood Mashup 2023 | Superhits Romantic Hindi Songs Mashup Live - DJ MaShUP 2023 ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/HQycpJWffp0/default_live.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/HQycpJWffp0/mqdefault_live.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/HQycpJWffp0/hqdefault_live.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "New Hindi PartyMix",
          "liveBroadcastContent": "live",
          "publishTime": "2023-08-29T22:16:38Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "UWBm-WgCNYY"
      },
      "snippet": {
          "publishedAt": "2023-08-29T21:00:14Z",
          "channelId": "UCymq18XYDaYTnrK4o3jjkMg",
          "title": "Listen to the Rock! | Rockin&#39; Chuck E. Cheese Music Video with a literal Rock!",
          "description": "\"   Join the ultimate rockin' adventure with Chuck E. Cheese as he takes center stage to sing a catchy rock song ! Watch as ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/UWBm-WgCNYY/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/UWBm-WgCNYY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/UWBm-WgCNYY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Chuck E. Cheese",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-29T21:00:14Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "wJglMnTbhj0"
      },
      "snippet": {
          "publishedAt": "2023-08-29T21:00:28Z",
          "channelId": "UCPbNOeXnG2Oj07gY_fueBBw",
          "title": "Dylan Marlowe - You Were Right (Nat&#39;s Song [Official Music Video])",
          "description": "Listen to “You Were Right (Nat's Song)” out now: https://DM.lnk.to/DRWID Listen On: Spotify: https://DM.lnk.to/DRWID/spotify Apple ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/wJglMnTbhj0/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/wJglMnTbhj0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/wJglMnTbhj0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "DylanMarloweVEVO",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-29T21:00:28Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "yTHUKBT-MmU"
      },
      "snippet": {
          "publishedAt": "2023-08-29T20:26:56Z",
          "channelId": "UCSTXol20Q01Uj-U5Yp3IqFg",
          "title": "Herreweghe, Collegium Vocale Gent | 19. Chopin and his Europe International Music Festival",
          "description": "19. Chopin and his Europe International Music Festival 18.08 - 1.09.2023 TUESDAY 29.08, 9 p.m. Warsaw Philharmonic Concert ...",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/yTHUKBT-MmU/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/yTHUKBT-MmU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/yTHUKBT-MmU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Chopin Institute",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-29T20:26:56Z"
      }
  },
  {
      "kind": "youtube#searchResult",
      "id": {
          "kind": "youtube#video",
          "videoId": "-K_JUjjzfzc"
      },
      "snippet": {
          "publishedAt": "2023-08-29T18:29:29Z",
          "channelId": "UCPJFvbf8tNE9-_aYgeXfdKA",
          "title": "new music 9/8 🤍",
          "description": "",
          "thumbnails": {
              "default": {
                  "url": "https://i.ytimg.com/vi/-K_JUjjzfzc/default.jpg",
                  "width": 120,
                  "height": 90
              },
              "medium": {
                  "url": "https://i.ytimg.com/vi/-K_JUjjzfzc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
              },
              "high": {
                  "url": "https://i.ytimg.com/vi/-K_JUjjzfzc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
              }
          },
          "channelTitle": "Lauren Daigle",
          "liveBroadcastContent": "none",
          "publishTime": "2023-08-29T18:29:29Z"
      }
  }
]