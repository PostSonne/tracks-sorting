export const Tracks = [
    {
      "Index": "1",
      "Image": "",
      "IsLoved": false,
      "TrackName": "A Crippled Mind",
      "Genre": "Rock",
      "Language": "Немецкий",
      "Artist": "Agonoize",
      "ListeningCounter": 11
    },
    {
      "Index": "2",
      "Image": "",
      "IsLoved": true,
      "TrackName": "In My World",
      "Genre": "Rock",
      "Language": "Немецкий",
      "Artist": "CHROM",
      "ListeningCounter": 53
    },
    {
      "Index": "3",
      "Image": "",
      "IsLoved": true,
      "TrackName": "Hello",
      "Genre": "Поп",
      "Language": "Английский",
      "Artist": "Adele",
      "ListeningCounter": 50
    },
    {
      "Index": "4",
      "Image": "",
      "IsLoved": false,
      "TrackName": "Back to Black",
      "Genre": "Джаз",
      "Language": "Английский",
      "Artist": "Amy Winehouse",
      "ListeningCounter": 80
    },
    {
      "Index": "5",
      "Image": "",
      "IsLoved": true,
      "TrackName": "You and I",
      "Genre": "Поп",
      "Language": "Английский",
      "Artist": "Lady Gaga",
      "ListeningCounter": 100
    },
    {
      "Index": "6",
      "Image": "",
      "IsLoved": true,
      "TrackName": "Пиковая Дама",
      "Genre": "Классическая музыка",
      "Language": "Русский",
      "Artist": "Lady Gaga",
      "ListeningCounter": 1
    }
];
Object.keys(Tracks).map((item, index) => ({ item, id: index + 1 }));
