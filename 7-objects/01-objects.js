
let netflix = {
    id: 9,
    name: "Super Store",
      season1: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Pilot"},
            { episode: 2, episodeName: "Magazine Profile"},
            { episode: 3, episodeName: "Shots and Salsa"},
            { episode: 4, episodeName: "Mannequin"},
            { episode: 5, episodeName: "Shoplifter"}
          ]
        }
      },
      season2: {
        seasonInfo: {
          episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper"},
            { episode: 2, episodeName: "Color Wars"},
            { episode: 3, episodeName: "Wedding Day Sale"},
            { episode: 4, episodeName: "All-Nighter"},
            { episode: 5, episodeName: "Demotion"},
            { episode: 6, episodeName: "Labor"}
          ]
        }
      },
      season3: {}
    };

    //DOT NOTATION

    // console.log('All data: ', netflix);
    // console.log('Just season info: ', netflix.season2.seasonInfo.episodeInfo);
    // console.log(netflix.season2.seasonInfo.episodeInfo[1].episodeName);
    console.log(Object.values(netflix.season2.seasonInfo.episodeInfo[2]));

    let netArray = netflix.season2.seasonInfo.episodeInfo;
    for (net of netArray){
        // let string = `The episode# ${net[0]} and episode title is ${net[1]}...`
        console.log(string);
    }

